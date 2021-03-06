import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import mapbox from 'mapbox-gl/dist/mapbox-gl.css'
import { rhythm } from '../utils/typography'
import globalStyles from '../styles/global'
import prism from '../styles/prism/index'
import Header from './Header/Header'
import Footer from './Footer'
import PageTransition from './PageTransition'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: ${rhythm(1)};
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
const zoomBtn = css`
  &.mapboxgl-ctrl-group {
    border-radius: 0;
  }
  &.mapboxgl-ctrl-group:not(:empty) {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`

const Layout = ({ children, location, data }) => {
  const { pathname } = location

  return (
    <>
      <Global styles={[prism.solarized, globalStyles, mapbox, zoomBtn]} />
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
