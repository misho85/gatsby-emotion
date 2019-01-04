import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import StickyHide from './StickyHide'
import logo from '../../assets/images/logo.svg'
import { rhythm } from '../../utils/typography'
import Nav from './Nav'

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  height: ${rhythm(2)};
  background-color: #fff;
  box-shadow: inset 0 -1px 0 0 #fff, 0 1px 5px rgba(0, 0, 0, 0.1);
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

const Header = ({ title, pathname }) => (
  <StickyHide>
    <Wrapper role="banner">
      <Container>
        <Link to="/">
          <Logo src={logo} alt={title} />
        </Link>
        <Nav pathname={pathname} />
      </Container>
    </Wrapper>
  </StickyHide>
)

export default Header
