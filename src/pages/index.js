import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="block md:hidden">
      <div className="">
        <StaticImage src="../images/discover-texas.png" alt="UT SXSW" />
      </div>
    </div>
    <div className="spline hidden md:block">
      <iframe
        class="responsive-iframe"
        title="Intro"
        width="1920"
        height="1080"
        src="https://my.spline.design/untitled-6709c686713d68944592ef2b3e953908/"
      ></iframe>
    </div>
  </Layout>
)

export default IndexPage
