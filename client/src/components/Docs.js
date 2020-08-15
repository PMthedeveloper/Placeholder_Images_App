import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
 
const Docs = () => {

    const [url,setUrl] = useState(window.location.host)

    const [examples, setExamples] = useState([
        "/images/150",
        "/images/350x150",
        "/images/150/blue",
        "/images/222x150/blue/red",
        "/images/555?text=Hello+From+PM+World",
    ])

    return (
        <div className="docs">
            {
                examples.map((exampleItem, index) => (
                    <div className="box animate__animated  animate__fadeInLeft">
                    <div className="box-header">
                        <span>Simple Example</span>
                        <CopyToClipboard text={`https://${url}${exampleItem}`}>
                        <span className="material-icons animate__animated animate__bounce tooltip">
                        content_copy
                        <h6 className="tooltiptext">CLICK FOR COPY</h6>
                        </span>
                        </CopyToClipboard>
                        
                    </div>
                    <div className="box-body">
                    <span>https://{url}</span>
                    <span> {exampleItem}</span>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Docs;
