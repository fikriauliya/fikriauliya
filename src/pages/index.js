import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Typography} from '@material-ui/core';
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"

import LearningFeed from "../components/learning-feed"
import LearningCalendar from "../components/learning-calendar"

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

const IndexPage = () => {
  const [selectedTabValue, setSelectedTabValue] = React.useState(0);
  const handleChange = (event, newValue) => setSelectedTabValue(newValue)
  return (<Layout>
    <SEO title="Home" />
    <Tabs value={selectedTabValue} onChange={handleChange}>
      <Tab label="Feed"/>
      <Tab label="Calendar"/>
    </Tabs>
    <TabPanel value={selectedTabValue} index={0}>
      <LearningFeed/>
    </TabPanel>
    <TabPanel value={selectedTabValue} index={1}>
      <LearningCalendar/>
    </TabPanel>
  </Layout>
  )
}

export default IndexPage
