import React from "react"
import { useState } from "react"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Dashboard = ({ props }) => {

    const [text, setText] = useState("");

    const handleChange = (value) => {
        setText(value);
    }

    return (
        <div>
            <h1>Welcome to the dashboard</h1>
            <SimpleMDE onChange={handleChange} value={text} />
        </div>
    )
}

export default Dashboard