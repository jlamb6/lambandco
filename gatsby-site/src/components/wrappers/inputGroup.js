import React from "react"

const InputGroup = (props) => {

    const input = () => {
        if (props.input === "input") return <input type={props.inputType} placeholder={props.placeholder} name={props.name} />;
        else if (props.input === "textarea") return <textarea name={props.name} rows={props.rows}>{props.placeholder}</textarea>;
        else if (props.input === "checkbox") return <input type={props.input} value={props.placeholder} name={props.name} />;
        else return <input type="text" placeholder="Placeholder text" />;
    }

    return (
        <div className={classes} style={props.style}>
            <label>{props.label}</label>
            {input}
        </div>
    )

}

export default InputGroup