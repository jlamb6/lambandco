import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = (props) => {

    const links = ["About", "Services", "Blog", "Contact"];
    const classes = (props.type === "dark") ? "navbar dark" : "navbar";

    return (
        <div className={classes}>
            <div className="navbar__container">
                <h4 className="navbar__title">
                    <Link to="/">{props.title}</Link>
                </h4>
                <div className="navbar__link-container">
                    {
                        links.map((cur, index) => {
                            if (cur.toLowerCase() === props.active.toLowerCase()) {
                                return (
                                    <div key={index} className="navbar__link active">
                                        <Link to={cur.toLowerCase().replace(/ /, "-")}>{cur}</Link>
                                        <span className="navbar__underline active"></span>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div key={index} className="navbar__link">
                                        <Link to={cur.toLowerCase().replace(/ /, "-")}>{cur}</Link>
                                        <span className="navbar__underline"></span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar