/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: `${theme.spacing(10)}px`,
  }
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5">
            {data.site.siteMetadata.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed className={classes.container}>
        {children}
      </Container>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
