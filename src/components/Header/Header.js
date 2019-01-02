import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import logo from '../../assets/images/logo.svg'
import { rhythm } from '../../utils/typography'
import Nav from './Nav'

const Wrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d2d2d2;
  background-color: #fff;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(1200px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
`

const Logo = styled.img`
  display: block;
  margin: 0;
`

const LogoLink = styled(Link)`
  width: 229px;
`

const Header = ({ title, pathname }) => (
  <Wrapper role="banner">
    <Container>
      <LogoLink to="/">
        <Logo src={logo} alt={title} />
      </LogoLink>
      <Nav pathname={pathname} />
    </Container>
  </Wrapper>
)

export default Header
