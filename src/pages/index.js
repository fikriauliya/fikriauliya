import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Typography} from '@material-ui/core';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Typography variant="body1">Welcome</Typography>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
