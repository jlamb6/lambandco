import React from "react"
import { Link } from "gatsby"
import "./iconBox.css"

const IconBox = (props) => {
    return (
        <Link to={props.link} className="no-decoration">
            <div className="iconbox">
                <object 
                    type="image/svg+xml" 
                    data={props.icon} 
                    className="iconbox__icon"
                >
                    {props.title}
                </object>
                <h4>{props.subTitle}</h4>
                <p>{props.body}</p>
            </div>
        </Link>
    )
}

export default IconBox