import React from "react"
import Layout from "../components/wrappers/layout"
import PageContent from "../components/wrappers/page-content"
import SEO from "../components/utility/seo"
import LandingTertiary from "../components/landing/landingTertiary";
import DarkBlueTriangle from "../images/dark-blue.png"
import bg from "../images/slc.jpg"

const ContactPage = ({ data }) => {

  const l1 = "Group Director";
  const l2 = "(480)—438—2002";
  const l3 = "lambandcorealty@gmail.com";
  
  return (

    <Layout active="contact" navbar="dark">
      <SEO title="Contact" />  
      <LandingTertiary 
          title="Let's chat" 
          backgroundImage={DarkBlueTriangle} 
          image={bg}
          smallContainer={<div className="fade-in delay" style={{paddingRight: "32px", paddingTop: "12px"}}><h4>Kalie Lamb</h4><p>{l1}</p><p>{l2}</p><p>{l3}</p></div>}
      />
      <PageContent>
      </PageContent>
    </Layout>
  )
}

export default ContactPage
