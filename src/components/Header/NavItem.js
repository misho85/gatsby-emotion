import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const linkStyle = css`
  &:hover {
    text-decoration: none;
  }
`

const Item = styled.p`
  margin: 0 0 0 25px;
  padding-top: 10px;
  padding-bottom: 3px;
  border-bottom: 3px solid transparent;
  color: #2d2d2d;
  font-size: 18px;
  transition: border-bottom 0.2s;
  @media (${props => props.theme.maxWidth.tablet}) {
    margin: 0 0 20px;
    padding-top: 0;
    border-color: transparent;
  }
  ${prop =>
    prop.selected
      ? `
    border-color: #2b9ac8;`
      : ''};
  ${prop =>
    prop.hasHover && !prop.selected
      ? `&:hover {
    border-color: #2b9ac8;
  }`
      : ''};
`

const NavItem = props => {
  const { to: link, title, onClick, hasHover, pathname } = props
  const isOutsideLink = link.indexOf('http') > -1
  const selected = pathname.indexOf(`/${title.toLowerCase()}/`) > -1

  if (isOutsideLink) {
    return (
      <a css={linkStyle} href={link} target="_blank" rel="noopener noreferrer">
        <Item hasHover={hasHover} selected={selected}>
          {title}
        </Item>
      </a>
    )
  }
  return (
    <Link css={linkStyle} to={link} onClick={onClick}>
      <Item hasHover={hasHover} selected={selected}>
        {title}
      </Item>
    </Link>
  )
}

export default NavItem
