import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const { image } = useStaticQuery(query)
  return (
    <>
      <div className="w-full md:w-1/2 mt-32 md:my-96">
        <h1 className="font-monument-ultrabold block md:hidden text-6xl">
          Juan Christian
        </h1>
        <h1 className="font-monument-ultrabold hidden md:block text-6xl">
          That's Me 👉
        </h1>
        <h1 className="text-4xl">Full Stack Developer</h1>
      </div>
      <div className="w-full md:w-1/2 mt-32 mb-96">
        <Img fluid={image.childImageSharp.fluid} />
      </div>
    </>
  )
}

export default Hero

const query = graphql`
  query HeroAboutImage {
    image: file(relativePath: { eq: "me.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 3000, quality: 75, webpQuality: 75, grayscale: true) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
