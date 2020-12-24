/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/style/tailwind.css"
import "./src/style/index.scss"

import React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
