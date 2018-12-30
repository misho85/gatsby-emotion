import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Tagline } from '../components/Text'
import Section from '../components/Section'
import List from '../components/List'

const OpenSourceSection = ({ data }) => (
  <Section id="open-source">
    <Tagline>Repos</Tagline>
    <div>
      {data.map(item => (
        <List
          key={item.link}
          to={item.link}
          name={item.title}
          meta={item.techs.join(', ')}
        />
      ))}
    </div>
  </Section>
)

export default () => (
  <StaticQuery
    query={graphql`
      {
        allOpenSourceYaml {
          edges {
            node {
              id
              title
              link
              techs
            }
          }
        }
      }
    `}
    render={data => (
      <OpenSourceSection
        data={data.allOpenSourceYaml.edges.map(({ node }) => node)}
      />
    )}
  />
)
