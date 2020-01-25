import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import imageSource from "../../images/placeholder.png"

const ImageCard = ({ data }) => (
    <Link to={data.node.id} style={{display: "contents", textDecoration: "none", color: "initial"}}>
        <div
            style={{
                border: "1px solid #e4e4e4",
                borderRadius: "3px",
                padding: "20px 20px",
                boxShadow: "0 1px 1px -1px #909090",
                textAlign: "center"
            }}
        >
            <Img fixed={data.node.image.childImageSharp.fixed || imageSource} style={{marginBottom: "14px"}} alt={data.node.alt || "site image"} />
            <h4 style={{marginBottom: "14px"}}>{data.node.title}</h4>
            <p style={{fontSize: ".8em", lineHeight: "1.6em", marginBottom: "0"}}>{data.node.subTitle}</p>
        </div>
    </Link>
)

export default ImageCard