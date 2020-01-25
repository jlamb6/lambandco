import React from "react"
import "./landingSecondary.css"
import "../utility/animations.css"

const LandingSecondary = (props) => {

    const bg = props.image;
    
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
                    <div 
                        className="toTopCorner delay full"
                        style={{
                            display: "block", 
                            position: "absolute", 
                            top: "15%",
                            right: "10%", 
                            backgroundColor: "rgba(255,255,255,.5)",
                            height: "70%", 
                            width: "80%", 
                            opacity: "0",
                            border: "1px solid black"
                        }}
                    ></div>
                    <img 
                        src={bg} 
                        className="fade"
                        alt={props.alt || "site image"}
                        style={{
                            zIndex: "100", 
                            width: "80%", 
                            position: "relative", 
                            margin: "60px auto", 
                            display: "block",
                            boxShadow: "0 10px 20px rgba(91,107,174,.15)"
                        }}
                    />
                    <div 
                        className="toBottomCorner delay full"
                        style={{
                            display: "block", 
                            position: "absolute", 
                            bottom: "15%",
                            left: "10%", 
                            backgroundColor: "rgba(255,255,255,.5)",
                            height: "70%", 
                            width: "80%",  
                            opacity: "0",
                            border: "1px solid black"
                        }}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default LandingSecondary