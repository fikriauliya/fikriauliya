import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LearningFeed from "../components/learning-feed"
import LearningCalendar from "../components/learning-calendar"

const IndexPage = () => {
  return (<Layout>
    <SEO title="Home" />
    <LearningCalendar/>
    <LearningFeed/>
  </Layout>
  )
}

export default IndexPage
