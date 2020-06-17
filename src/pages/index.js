import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"


const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`dobrykorepetytor`, `tworzenie stron`]} />
    <LandingBio/>
  </Layout>
)

export default IndexPage
