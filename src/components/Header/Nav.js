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
      <NavItem title="HOME" to="/" hasHover pathname={pathname} />
      <NavItem title="BLOG" to="/blog" hasHover pathname={pathname} />
      <NavItem title="REPOS" to="/repos" hasHover pathname={pathname} />
      <NavItem title="READING" to="/reading" hasHover pathname={pathname} />
      <NavItem title="CONTACT" to="/contact" hasHover pathname={pathname} />
    </DesktopMenu>
    <MobileMenu pathname={pathname} />
  </Container>
)

export default Nav
