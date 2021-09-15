import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
// import HeroesOne from "../components/Heroes/HeroesOne"
// import HeroesTwo from "../components/Heroes/HeroesTwo"
// import ParallexOne from "../components/Parallex/ParallexOne"
import CaseStudies from "../components/Sections/CaseStudies"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CaseStudies />
    {/* <ParallexOne />
    <HeroesOne />
    <HeroesTwo /> */}
  </Layout>
)

export default IndexPage
