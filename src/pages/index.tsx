import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/SEO"

import Hero from "../components/page-components/Hero"
import Projects from "../components/page-components/Projects"

const Index: React.FC = () => {
  const { image } = useStaticQuery(query)
  return (
    <>
      <SEO
        keywords={[
          `juan`,
          `juan christian`,
          `juan's portfolio`,
          `portfolio`,
          `web developer`,
          `web programmer`,
        ]}
        title="Home"
        image={image.childImageSharp.fixed}
      />
      <div className="flex flex-wrap">
        <div className="w-full mt-52 mb-96">
          <Hero />
        </div>
        <div className="w-full mb-96">
          <Projects />
        </div>
      </div>
    </>
  )
}

export default Index

const query = graphql`
  query HomeSEOImage {
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
