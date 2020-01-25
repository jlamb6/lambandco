import React from "react"

const Padding = (props) => (
    <div className={`content-container ${props.size}`}>
        {props.children}
    </div>
)

export default Padding