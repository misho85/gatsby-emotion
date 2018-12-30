import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Title, Tagline } from '../components/Text'
import Section from '../components/Section'

const Container = styled.div``

const TitleSection = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleSectionQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Title>{data.site.siteMetadata.title}</Title>
        <Tagline>{data.site.siteMetadata.description}</Tagline>
      </>
    )}
  />
)

const IndexPage = () => (
  <Container>
    <Section dark>
      <TitleSection />
    </Section>
  </Container>
)

export default IndexPage
