import React from "react"
import "./box.css"

const Box = (props) => {
    return (
        <div className="box fade-in delay">
            {(props.title) ? <h4>{props.title}</h4> : false }
            {props.text.map((cur, index) => {
                return (
                    <p key={index}>{cur}</p>
                )
            })}
        </div>
    )
}

export default Box