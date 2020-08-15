import React from 'react'

const Home = () => {
    return (
        <div className="main">
            <h2 className="heading animate__animated animate__slideInUp">
                <span>Placeholder</span>
                <span>Images</span>
            </h2>
            <div>
                <img className="animate__animated animate__slideInUp" src={require("../assets/hero.png")} height="350px" alt="Image_hero" />
            </div>
        </div>
    )
}

export default Home
