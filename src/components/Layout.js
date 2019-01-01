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
import prism from '../styles/prism/index'

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

const Layout = ({
  children,
  location,
  data: {
    site: {
      siteMetadata: { title, shortName },
    },
  },
}) => (
  <>
    <Global styles={[prism.original, globalStyles]} />
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Container>
      <Header siteTitle={shortName} />
      <ContentViewport>
        <Content>
          <PageTransition location={location}>{children}</PageTransition>
        </Content>
        <Footer />
      </ContentViewport>
    </Container>
  </>
)

export default props => (
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
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        shortName: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
