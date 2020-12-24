import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../style/pages/about.scss"

import SEO from "../components/SEO"

import Hero from "../components/page-components/about/Hero"
import Divider from "../components/page-components/about/Divider"

import ProfileCategory from "../components/page-components/about/ProfileCategory"
import ToolsCategory from "../components/page-components/about/ToolsCategory"
import ExperienceCategory from "../components/page-components/about/ExperienceCategory"

const About: React.FC = () => {
  const { seoImage } = useStaticQuery(query)
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
        image={seoImage.childImageSharp.fixed}
      />
      <div className="flex flex-wrap">
        <Hero />
        <ProfileCategory />
        <Divider />
        <ToolsCategory />
        <Divider />
        <ExperienceCategory />
      </div>
    </>
  )
}

export default About

const query = graphql`
  query AboutImage {
    seoImage: file(relativePath: { eq: "me.jpg" }) {
      id
      childImageSharp {
        fixed(height: 450, width: 500, grayscale: true, cropFocus: EAST) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
