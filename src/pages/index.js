import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Typography} from '@material-ui/core';

import Learning from "../components/learning"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Learning/>
  </Layout>
)

export default IndexPage
