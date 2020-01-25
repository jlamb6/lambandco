import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/wrappers/layout"
import PageContent from "../components/wrappers/page-content"
import SEO from "../components/utility/seo"
import ImageCard from "../components/content/card-with-image"
import LandingSecondary from "../components/landing/landingSecondary"
import LightBlueTriangle from "../images/light-blue.png"
import img from "../images/kalie_red.jpg"

const BlogPage = ({ data }) => {

  const l1 = "Welcome 👋.";
  const l2 = "I'm Kalie Lamb, travel enthusiast, swing dancing enthusiast and YOUR realtor.";
  const l3 = "This is my blog where I talk all things real estate, perks of living in Utah, and life in general.";
  
  return (
      <Layout active="blog" navbar="dark">
        <SEO title="Blog" />  
        <LandingSecondary 
            title="My Blog" 
            backgroundImage={LightBlueTriangle} 
            image={img}
            smallContainer={<div className="fade-in delay" style={{paddingRight: "32px", paddingTop: "12px"}}><p>{l1}</p><p>{l2}</p><p>{l3}</p></div>}
        />
        <PageContent>
          <section style={{ marginTop: "80px" }}>
              <h1 style={{textAlign: "center"}}>Articles</h1>
              <div 
                  style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr", 
                      gridGap: "20px",
                      maxWidth: "960px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      margin: "80px auto"
                  }}
              >
                  {data.allStrapiArticle.edges.map((document, index) => {
                    return (
                      <ImageCard key={index} data={document} />
                  )})}
              </div>
          </section>
        </PageContent>
      </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          subTitle
          content
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }


`