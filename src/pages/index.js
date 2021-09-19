import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
// import HeroesOne from "../components/Heroes/HeroesOne"
// import HeroesTwo from "../components/Heroes/HeroesTwo"
// import ParallexOne from "../components/Parallex/ParallexOne"
import CaseStudies from "../components/Sections/CaseStudies"
import Collections from "../components/Sections/Collections"
import Resources from "../components/Sections/Resources"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Collections collections={data.collections} />
    <Resources resources={data.resources} />
    <CaseStudies caseStudies={data.caseStudies} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    caseStudies: allDatoCmsCaseStudy {
      nodes {
        originalId
        designer
        date
        link
        description
      }
    }
    collections: allDatoCmsCollection {
      nodes {
        company
        link
        note
        originalId
        websiteScreenshot {
          originalId
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
    }
    resources: allDatoCmsResource {
      nodes {
        originalId
        link
        description
        image {
          gatsbyImageData(width: 700, placeholder: BLURRED)
        }
      }
    }
  }
`
