import React from "react"
import { Link } from "gatsby"
import "./split-view.css"
import Padding from "../wrappers/padding"

const SplitView = (props) => {

    if (props.left) {
        return (
            <Padding>
                <div className="split">
                    <div className="split__header">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="split__body">
                        <p>{props.body}</p>
                        <Link to={props.link} className="button link">{props.linkTitle}</Link>
                    </div>
                    <div className="split__image right">
                        <img src={props.img} alt={props.alt || "site image"}/>
                    </div>
                </div>
            </Padding>
        )
    }
    else {
        return (
            <Padding>
                <div className="split">
                    <div className="split__header">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="split__image left">
                        <img src={props.img} alt={props.alt || "site image"} />
                    </div>
                    <div className="split__body">   
                        <p>{props.body}</p>
                        <Link to={props.link}>{props.linkTitle}</Link>
                    </div>
                </div>
            </Padding>
        )
    }
}

export default SplitView