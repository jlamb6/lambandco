import React from "react"
import {  useEffect } from "react"
import "./contactForm.css"
import "../utility/animations.css"

const ContactForm = (props) => {

    useEffect(() => {
        Array.from(document.querySelectorAll(".animate")).forEach((cur, index) => {

            let options = {
                threshold: .75
            }

            let target = cur; 
            let i = index + 6;
    
            function callback(entries) {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        if (Array.from(entry.target.classList).includes("flow")) {
                            entry.target.style.animationDelay = `${i++ / 10}s`;
                            entry.target.classList.add("flow-up");
                            entry.target.classList.remove("flow");
                        }
                        else entry.target.classList.add("fade-in");

                        entry.target.classList.remove("animate");
                        observer.unobserve(entry.target);
                        observer.disconnect();
                    }
                });
            }
    
            let observer = new IntersectionObserver(callback, options);
            observer.observe(target);
        })
    })

    if (props.small) {
        return (
            <section className="contact-small" id="#contact-form">
                <div className="contact__container" id="contact">
                    <div className="contact__form animate">
                        <form>
                            <div className="form__group animate flow" style={{gridArea: "fname"}}>
                                <label>First Name</label>
                                <input type="text" name="fname" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "lname"}}>
                                <label>Last Name</label>
                                <input type="text" name="lname" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "email"}}>
                                <label>Email</label>
                                <input type="email" name="email" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "zipcode"}}>
                                <label>Zipcode</label>
                                <input type="text" name="zipcode" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "message"}}>
                                <label>Message</label>
                                <textarea name="message" rows="6"></textarea>
                            </div>
                            <button className="animate flow" type="button" style={{gridArea: "submit"}}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
    else {
        return (
            <section className="contact" id="#contact-form">
                <div className="contact__container" id="contact">
                    <h1 className="contact__header animate">Contact us today!</h1>
                    <div className="contact__form animate">
                        <form style={{margin: "0"}}>
                            <div className="form__group animate flow" style={{gridArea: "fname"}}>
                                <label>First Name</label>
                                <input type="text" name="fname" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "lname"}}>
                                <label>Last Name</label>
                                <input type="text" name="lname" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "email"}}>
                                <label>Email</label>
                                <input type="email" name="email" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "zipcode"}}>
                                <label>Zipcode</label>
                                <input type="text" name="zipcode" />
                            </div>
                            <div className="form__group animate flow" style={{gridArea: "message", marginBottom: "24px"}}>
                                <label>Message</label>
                                <textarea name="message" rows="6"></textarea>
                            </div>
                            <button className="animate flow" type="button" style={{gridArea: "submit"}}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactForm