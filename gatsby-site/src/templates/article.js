import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import Layout from "../components/wrappers/layout"
import SEO from "../components/utility/seo"
import "./articles.css"

const ArticleTemplate = ({ data }) => {

  const created = new Date(data.strapiArticle.created_at);
  const setMonth = (index) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[index];
  }

  return (
    <Layout active="blog" navbar="dark">
      <SEO title="Blog" /> 
        <section>
          <div className="article">
            <div className="article__header">
              <h1>{data.strapiArticle.title}</h1>
              <p>by{" "}<strong>{data.strapiArticle.author.fullName}</strong></p>
              <p>Written {`${setMonth(created.getMonth())} ${created.getDate()}, ${created.getFullYear()}`}</p>
            </div>
            <div className="article__banner">
              <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
            </div>
            <div className="article__body">
              <div id="content">
                  <ReactMarkdown
                    source={data.strapiArticle.content}
                  />
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      subTitle
      content 
      image {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
        fullName
      }
      created_at
    }
  }
`