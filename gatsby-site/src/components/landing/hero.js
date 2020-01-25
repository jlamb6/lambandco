import React from "react"
import "./hero.css"
import "../utility/animations.css"

const Hero = (props) => {
    
    return (
        <section className="hero">
            <div className="hero__container">
                <h1 
                    className="fade-in" 
                    style={{fontWeight: "400", color: "white", textAlign: "center"}}
                >
                    {props.title}
                </h1>
                <a className="button outline fade-in delay">Learn More</a>
            </div>
        </section>
    )
}

export default Hero