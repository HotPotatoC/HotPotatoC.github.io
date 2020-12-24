import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { motion } from "framer-motion"
import SEO from "../components/SEO"

export const Work = ({ data }: any) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const { images } = frontmatter
  console.log(images)
  const banner = images[0].banner.childImageSharp.fluid

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
          ...frontmatter.seo,
        ]}
        title="Home"
        image={banner}
      />
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: "6em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            ease: [0.19, 1.0, 0.22, 1.0],
            delay: 2.25,
          }}
          className="w-full mt-28 mb-6 sm:mb-8 md:mb-12 lg:mb-28 overflow-hidden"
        >
          <Img
            fluid={banner}
            alt={`${frontmatter.title}-img`}
            className="opacity-80"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: "0.3em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 3,
            ease: [0.19, 1.0, 0.22, 1.0],
            delay: 2.3,
          }}
          className="absolute hidden md:block top-32 text-center"
          style={{
            fontSize: "12em",
          }}
        >
          {frontmatter.title}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "0.5em" }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{
            duration: 3,
            ease: [0.19, 1.0, 0.22, 1.0],
            delay: 2.5,
          }}
          className="absolute hidden md:block top-48 text-center opacity-20"
          style={{
            fontSize: "12em",
          }}
        >
          {frontmatter.title}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "0.5em" }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{
            duration: 3,
            ease: [0.19, 1.0, 0.22, 1.0],
            delay: 2.75,
          }}
          className="absolute hidden md:block top-64 text-center opacity-10"
          style={{
            fontSize: "12em",
          }}
        >
          {frontmatter.title}
        </motion.h1>
        <div className="w-full mb-2">
          <h1 className="font-monument-ultrabold text-2xl md:text-4xl lg:text-6xl">
            {frontmatter.title}
          </h1>
        </div>
        <div className="w-full mb-4">
          <h1 className="font-axiforma text-gray-400 text-lg md:text-xl lg:text-2xl">
            {frontmatter.subtitle}
          </h1>
        </div>
        <div className="w-full mb-96">
          <div className="flex flex-row flex-wrap justify-end items-start">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <p className="font-axiforma text-lg md:text-2xl lg:text-4xl">
                {frontmatter.paragraph}
              </p>
              {frontmatter.paragraphTwo && (
                <>
                  <br />
                  <p className="font-axiforma text-lg md:text-2xl lg:text-4xl">
                    {frontmatter.paragraphTwo}
                  </p>
                </>
              )}
              {frontmatter.website && (
                <>
                  <br />
                  <p className="font-axiforma text-lg md:text-2xl lg:text-4xl">
                    Visit the website here:
                  </p>
                  <OutboundLink
                    className="underline font-axiforma text-lg md:text-2xl lg:text-4xl"
                    target="_blank"
                    href={frontmatter.website}
                  >
                    {frontmatter.website.substr(8)}
                  </OutboundLink>
                </>
              )}
            </div>
            <div className="w-full md:w-1/2 mb-80">
              <div className="flex flex-col flex-wrap items-end">
                <p className="mb-4 font-monument-ultrabold text-lg md:text-xl lg:text-2xl">
                  {frontmatter.year}
                </p>
                {frontmatter.tools.map((tool: string, index: number) => (
                  <div key={tool + index} className="mr-2 mb-2">
                    <p className="font-axiforma text-gray-400 text-xl md:text-2xl lg:text-3xl">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-52">
          <div className="flex flex-col">
            <h1 className="text-gray-400 mb-8 text-4xl md:text-6xl lg:text-8xl">
              Next
            </h1>
            <Link to={frontmatter.next}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl">
                <span className="underline italic hover:text-black hover:bg-white">
                  {frontmatter.nextText}
                </span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        subtitle
        seo
        tools
        year
        paragraph
        paragraphTwo
        website
        next
        nextText
        images {
          banner {
            childImageSharp {
              fluid(maxWidth: 3000, quality: 75, webpQuality: 75) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
