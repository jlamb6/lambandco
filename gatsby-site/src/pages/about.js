import React from "react"
import { Link } from "gatsby"
import Layout from "../components/wrappers/layout"
import PageContent from "../components/wrappers/page-content"
import SEO from "../components/utility/seo"
import LandingSecondary from "../components/landing/landingSecondary";
import BlueTriangle from "../images/blue-triangle.png"
import SplitView from "../components/content/split-view"
import Padding from "../components/wrappers/padding"
import bg from "../images/kalie.jpg"
import bg2 from "../images/kalie_bricks_2.jpg"
import trees from "../images/palm-trees.jpg"

const AboutPage = ({ data }) => {

    const l1 = "Hello 👋.";
    const l2 = "I'm Kalie Lamb, travel enthusiast, swing dancing enthusiast and YOUR realtor.";
    const l3 = "I am here to help you find your new home.";
    
    return (
        <Layout active="about" navbar="dark">
            <SEO title="About" />  
            <LandingSecondary 
                title="About" 
                image={bg}
                backgroundImage={BlueTriangle} 
                smallContainer={<div className="fade-in delay" style={{paddingRight: "32px", paddingTop: "12px"}}><p>{l1}</p><p>{l2}</p><p>{l3}</p></div>}
            />
            <PageContent>
                <Padding>
                    <SplitView
                        title="The value of a home"
                        body="We beleive that a house becomes a home when it is filled with Love and Family. 
                              It is a place a safety and acceptance. 
                              At Lamb&Co, we want to know what home means to you and help you find it.
                              Learn more about the ways we can help you start your new home."
                        link="/services"
                        linkTitle="View our services"
                        img={trees}
                        left={true}
                    ></SplitView>
                </Padding>
                <section
                    className="gradient"
                    style={{
                        padding: "60px 0"
                    }}
                >
                    <Padding size="wide">
                        <div style={{margin: "0 auto 120px", textAlign: "center"}}>
                            <h1>Lamb&Co Realty</h1>
                            <p>Take a closer look at our agents and who we are.</p>
                        </div>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gridGap: "32px",
                        }}>
                            <div>
                                <img 
                                    src={bg2} 
                                    alt="Kalie Lamb, director of Lamb&Co Realty"
                                    style={{margin: "0", boxShadow: "rgba(91, 107, 174, 0.15) 0px 10px 20px"}}
                                ></img>
                            </div>
                            <div style={{textAlign: "left", padding: "0 16px"}}>
                                <h1>Kalie Lamb</h1>
                                <p>
                                    I'm Kalie Lamb, group director of Lamb&Co Realty.
                                </p>
                                <p>
                                    Before I found my passion in real estate, I dropped out of the 3rd university I attended on my 5th major.
                                <br/>
                                <br/>
                                    After reading some books about real estate I fell in love. It combined my desire to have a flexible job, meet new people, and be around homes all the time. 
                                <br/>
                                <br/>
                                    You see my biggest dream is to be a mom. However, I knew I would still want to work and be able to provide for my family along side of my husband.                                        
                                <br/><br/>
                                    Real estate provides a way for me to work in an industry I love and have a little more flexibility than a normal office job. 
                                </p>
                                <Link to="/blog">Visit my blog</Link>
                            </div>
                        </div>
                    </Padding>
                </section>
                <Padding>
                    <SplitView
                        title="Get in touch"
                        body="We want to be there for all of your realty needs. Whether you are buying or selling a home, we can help you get the most out of this experience."
                        link="/contact"
                        linkTitle="Contact Us"
                        img={trees}
                        left={false}
                    ></SplitView>
                </Padding>
            </PageContent>
        </Layout>
    )
}

export default AboutPage
