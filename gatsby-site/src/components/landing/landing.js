import React from "react"
import { Link } from "gatsby"
import "./landing.css"
import "../utility/animations.css"

const Landing = (props) => {
    
    return (
        <section style={{backgroundImage: `url(${props.backgroundImage}`}} className="landing">
            <div className="landing__container">
                <h1 
                    className="fade-in" 
                    style={{fontWeight: "400", color: "white"}}
                >
                    {props.title}
                </h1>
                <div className="fade-in delay">

                <Link className="button outline" style={{marginRight: "12px"}} to={props.buttonLinkOne}>{props.buttonTitleOne}</Link>
                <Link className="button default" to={props.buttonLinkTwo}>{props.buttonTitleTwo}</Link>
                </div>
            </div>
        </section>
    )
}

export default Landing