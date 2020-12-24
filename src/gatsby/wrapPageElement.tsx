import React from "react"
import Layout from "../components/Layout"

const CustomLayout = ({ element, props }: any, pluginOptions: any) => (
  <Layout {...props}>{element}</Layout>
)

export default CustomLayout
