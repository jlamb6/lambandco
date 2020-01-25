import React from "react"
//import { Link, graphql } from "gatsby"
import moneyIcon from "../components/icons/money.svg"
import logisticsIcon from "../components/icons/real-estate.svg"
import financeIcon from "../components/icons/finance.svg"

import Layout from "../components/wrappers/layout"
import Padding from "../components/wrappers/padding"
import SplitView from "../components/content/split-view"
import PageContent from "../components/wrappers/page-content"
import SEO from "../components/utility/seo"
import Landing from "../components/landing/landing";
import BackgroundOne from "../images/landing-one.png"
import ContactForm from "../components/forms/contactForm"
import IconBox from "../components/content/iconBox"
import trees from "../images/palm-trees.jpg"
import kalie from "../images/kalie.jpg"

const IndexPage = ({ data }) => (
  <Layout active="home">
    <SEO title="Home" />  
    <Landing 
        title="Find your home in Utah." 
        buttonTitleOne="Our Services" 
        buttonLinkOne="services"
        buttonTitleTwo="Contact Us"
        buttonLinkTwo="contact"
        backgroundImage={BackgroundOne} 
    />
    <PageContent>
      <>
        <SplitView 
            title="More choice, less cost"
            body="Here at Wyvern Real Estate Group we strive 
                to offer you a Real Estate experience like no 
                other.
                Our unique approach  to handling payment 
                and service allows you to get what you want 
                without paying us a traditional commission, 
                and therefore saving you money!"
            link="/services"
            linkTitle="View our services"
            img={trees}
            left={true}
        />
        <section
            className="gradient"
            style={{
                padding: "60px 0"
            }}
        >
            <Padding size="wide">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "32px",
                }}>
                    <div>
                        <img 
                            src={kalie} 
                            alt="Kalie Lamb, director of Lamb&Co Realty"
                            style={{margin: "0", boxShadow: "rgba(91, 107, 174, 0.15) 0px 10px 20px"}}
                            
                        ></img>
                    </div>
                    <div style={{textAlign: "left", padding: "0 16px"}}>
                        <h1>About Me</h1>
                        <p>Here at Wyvern Real Estate Group we strive 
                    to offer you a Real Estate experience like no 
                    other.
                    <br/><br/>
                    Our unique approach  to handling payment 
                    and service allows you to get what you want 
                    without paying us a traditional commission, 
                    and therefore saving you money!</p>
                    </div>
                </div>
            </Padding>
        </section>
        <section
            style={{
                paddingTop: "120px",
                height: "100vh"
            }}
        >
            <Padding>
                <h1 
                    className="content__header"
                    style={{
                        fontWeight: "700",
                        textAlign: "center",
                        lineHeight: "1.4em"
                    }}    
                >
                    Let's get started
                </h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridGap: "20px",
                        textAlign: "center",
                        marginTop: "80px"
                    }}
                >
                    <IconBox 
                        icon={moneyIcon}
                        title="Money Icon" 
                        subTitle="Sell Your Home" 
                        body="We provide all the services you need to sell your home for top dollar" 
                        link="/services#sell"
                    />
                    <IconBox 
                        icon={logisticsIcon}
                        title="Logistics Icon" 
                        subTitle="Buy a Home" 
                        body="Find the perfect home for the next step in your life" 
                        link="/services#buy"
                    />
                    <IconBox 
                        icon={financeIcon}
                        title="Finance Icon" 
                        subTitle="Market Analysis" 
                        body="Find out what your home is worth so you don't leave money on the table"
                        link="/services#analysis"
                    />
                </div>
            </Padding>
        </section>
        <Padding>
            <ContactForm small={false} />
        </Padding>
        
        </>
    </PageContent>
  </Layout>
)

export default IndexPage
