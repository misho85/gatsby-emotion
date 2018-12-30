import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
`
const isInternalLink = link => !/^(https?:\/\/|\/\/)/i.test(link)

const StyledLinkWithAnchor = StyledLink.withComponent('a')

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = isInternalLink(to)

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledLink to={to} {...other}>
        {children}
      </StyledLink>
    )
  }
  return (
    <StyledLinkWithAnchor href={to} {...other} rel="noopener" target="_blank">
      {children}
    </StyledLinkWithAnchor>
  )
}

export default Link
