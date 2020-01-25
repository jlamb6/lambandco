import React from "react"
import Layout from "../components/wrappers/layout"
import PageContent from "../components/wrappers/page-content"
import SEO from "../components/utility/seo"
import LandingSecondary from "../components/landing/landingSecondary";
import SplitView from "../components/content/split-view"
import ContentList from "../components/content/contentList"
import BlueTriangle from "../images/dark-blue.png"
import bg from "../images/services.jpg"
import trees from "../images/palm-trees.jpg"
import Padding from "../components/wrappers/padding";

const ServicesPage = ({ data }) => {

    const l1 = "Here at Lamb&Co, we tailor our services to make your real estate experience as beneficial as possible.";
    const l2 = "We understand that each person has their own story.";
    const l3 = "Whether you are buying or selling a home, we will be there to walk you through the process.";
    
    return (
        <Layout active="services" navbar="dark">
            <SEO title="Services" />  
            <LandingSecondary 
                title="Services" 
                image={bg}
                backgroundImage={BlueTriangle} 
                smallContainer={<div className="fade-in delay" style={{paddingRight: "32px", paddingTop: "12px"}}><p>{l1}</p><p>{l2}</p><p>{l3}</p></div>}
            />
            <PageContent>
              <section id="sell">
                <SplitView 
                  title="Sell your home"
                  body="Selling your house is a big deal. You might be moving from your first home or the home your kids grew up in. At Lamb&Co. we understand there is a lot of emotion that goes into it. We will do our best to take as much stress out of it as possible. Utilizing the MLS, Facebook, and Instgram to reach as many people as possible."
                  link="/contact"
                  linkTitle="Contact Us"
                  img={trees}
                  left={true}
                />
              </section>
              <section id="buy">
                <Padding size="wide">
                  <ContentList small={false} title="All you services you need" />
                </Padding>
              </section>
              <section id="analysis">
               <SplitView 
                  title="Buy a home"
                  body="Congratulations! You’re buying a home! Here at Lamb&Co. we share in your excitement and want to help you find the best home for you and your family. You will get notified instantly when a new home with your specifications hit the market."
                  link="/contact"
                  linkTitle="Contact Us"
                  img={trees}
                  left={false}
                />
              </section>
            </PageContent>
        </Layout>
    )
}

export default ServicesPage
