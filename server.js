const express = require("express");
const path = require("path");
const nodeHtmltoImage = require("node-html-to-image");
const app = express();


app.get("/images/:dimension/:background?/:color?", async (req, res) => {
    const { dimension, background = "gray", color = "black" } = req.params;
    const [width, height = width] = dimension.split("x");
    const { text = `${width}x${height}` } = req.query;
    const image = await nodeHtmltoImage({
        html: `<html>
        <body style="width:  ${width}px;height: ${height};background-color: ${background};color: ${color};display:flex;justify-content:center;align-items:center;font-size:2em">
        <div>${text}</div>
        </body>
        </html>`,
        puppeteerArgs:{ args: ["--no-sandbox","--disable-setuid-sandbox"] },
    });
    res.contentType("image/jpeg");
    res.send(image);
});

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));


// https://github.com/jontewks/puppeteer-heroku-buildpack
