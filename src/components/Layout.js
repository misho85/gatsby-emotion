import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import PageTransition from './PageTransition'
import Header from './Header'
import Footer from './Footer'
import globalStyles from '../styles/global'
import 'normalize.css'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`

const ContentViewport = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Content = styled.div`
  flex: 1;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            shortName
          }
        }
      }
    `}
    render={data => (
      <>
        <Global styles={globalStyles} />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
          <Header siteTitle={data.site.siteMetadata.shortName} />
          <ContentViewport>
            <Content>
              <PageTransition location={location}>{children}</PageTransition>
            </Content>
            <Footer />
          </ContentViewport>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
