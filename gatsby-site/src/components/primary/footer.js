import React from "react"
import { Link } from "gatsby"
import "./footer.css"
//import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ data }) => (
    <footer className="footer">
        <div className="footer__top">
            <div className="footer__container">
                <div style={{marginRight: "120px"}}>
                    <h2 style={{fontSize: "1rem"}}>Lamb&Co Realty</h2>
                </div>
                <div className="footer__links">
                    <h4>Navigation</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer__links">
                    <h4>Social Media</h4>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Instagram</Link>
                    <Link to="/">LinkedIn</Link>
                </div>
                <div className="newsletter__form">
                    <h4>Join our Community</h4>
                    <div className="newsletter__signup">
                        <input type="email" placeholder="youremail@site.com" />
                        <button className="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="footer__container">
                <p>Licensed at Brough Realty</p>
                <p>copyright 2019 - Designed by Jake Lamb</p>
            </div>
        </div>
    </footer>
)

export default Footer