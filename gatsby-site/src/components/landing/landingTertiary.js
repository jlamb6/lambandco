import React from "react"
import "./landingSecondary.css"
import "../utility/animations.css"
import ContactForm from "../forms/contactForm"

const LandingTertiary = (props) => {
    
    return (
        <section style={{backgroundImage: `url(${props.backgroundImage}`}} className="landing-2">
            <div className="landing__container" style={{display: "grid", gridTemplateColumns: "2fr 3fr", gridGap: "20px"}}>
                <div>
                    <h1 
                        className="fade-in" 
                        style={{fontWeight: "600", color: "black"}}
                    >
                        {props.title}
                    </h1>
                    {props.smallContainer}
                </div>
                <div style={{position: "relative"}}>
                    <ContactForm small={true} />
                </div>
            </div>
        </section>
    )
}

export default LandingTertiary