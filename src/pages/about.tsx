import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/SEO"

const About: React.FC = () => {
  const { image } = useStaticQuery(query)
  return (
    <>
      <SEO
        keywords={[
          `juan`,
          `juan christian`,
          `juan's portfolio`,
          `juan about`,
          `juan's about`,
          `about me`,
          `about juan`,
          `portfolio`,
          `web developer`,
          `web programmer`,
        ]}
        title="Home"
        image={image.childImageSharp.fixed}
      />
      <div className="flex flex-wrap">
        <div className="w-full mt-52 mb-96">
          <h1 className="text-9xl">Who am i?</h1>
        </div>
      </div>
    </>
  )
}

export default About

const query = graphql`
  query AboutSEOImage {
    image: file(relativePath: { eq: "me.jpg" }) {
      id
      childImageSharp {
        fixed(height: 450, width: 500, grayscale: true, cropFocus: EAST) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
