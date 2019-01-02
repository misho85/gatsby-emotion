import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import globalStyles from '../styles/global'
import prism from '../styles/prism/index'
import Header from './Header/Header'
import Footer from './Footer'
import PageTransition from './PageTransition'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  @media (${props => props.theme.maxWidth.tablet}) {
    margin-top: 2rem;
  }
`

const ContentViewport = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Content = styled.div`
  flex: 1;
`

const Layout = ({ children, location, data }) => {
  const { pathname } = location

  return (
    <>
      <Global styles={[prism.solarized, globalStyles]} />
      <Helmet title={data.site.siteMetadata.title}>
        <html lang="en" />
      </Helmet>
      <Container>
        <Header pathname={pathname} />
        <ContentViewport id="content">
          <Content>
            <PageTransition location={location}>{children}</PageTransition>
          </Content>
          <Footer />
        </ContentViewport>
      </Container>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
