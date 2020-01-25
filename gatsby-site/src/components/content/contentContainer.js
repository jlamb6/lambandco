import React from "react"
import "./contentList.css"

const ContentContainer = (props) => {

    if (props.small) {
        return (
            <div className="small-container">
                <div className="small-container__highlight" style={{backgroundColor: props.color}}></div>
                <p className="small-container__title">
                    <span style={{marginRight: "4px"}}>
                        <strong>{props.title}</strong>
                    </span>
                    <em>{props.body}</em>
                </p>
            </div>
        )
    }
    else {
        return (
            <div className="large-container">
                <div className="large-container__icon">
                    <object 
                        type="image/svg+xml" 
                        data={props.icon} 
                        fill="#2f80ed"
                        className="large-container__icon-icon"
                    >
                        {props.title}
                    </object>
                </div>
                <div className="large-container__body">
                    <h4>{props.title}</h4>
                    <p>{props.body}</p>
                </div>
            </div>
        )
    }
}

export default ContentContainer