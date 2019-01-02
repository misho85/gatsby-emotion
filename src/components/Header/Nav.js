import React from 'react'
import styled from '@emotion/styled'

import NavItem from './NavItem'
import MobileMenu from './MobileMenu'

const Container = styled.nav`
  display: flex;
  align-items: center;
`

const DesktopMenu = styled.div`
  display: flex;
  @media (${props => props.theme.maxWidth.tablet}) {
    display: none;
  }
`

const Nav = ({ pathname }) => (
  <Container role="navigation">
    <DesktopMenu>
      <NavItem title="Blog" to="/blog" hasHover pathname={pathname} />
      <NavItem title="Repos" to="/repos" hasHover pathname={pathname} />
      <NavItem
        title="GitHub"
        to="https://github.com/misho85/gatsby-emotion"
        hasHover
        pathname={pathname}
      />
    </DesktopMenu>
    <MobileMenu pathname={pathname} />
  </Container>
)

export default Nav
