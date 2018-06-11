import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import AppBar from './AppBar'
import theme from '../themes/default'

import './index.css'

const Layout = ({ classes, children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <AppBar />
        {children()}
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`