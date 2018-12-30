import React, { Component } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import Link from './Link'
// import logo from '../assets/images/logo.svg'

// nav > brandcontainer > link > span
//                 > linkovi || content > ul list > listItem > LinkItem

//
// ─── NAVBAR ─────────────────────────────────────────────────────────────────────
//

// Nav dobar
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${props => props.theme.colors.redDark};
  position: fixed;
  width: 100%;
  min-height: 3rem;
  z-index: 10;
  top: 0;
  line-height: 1.5;
  letter-spacing: 0;
`

//
// ─── LOGO ───────────────────────────────────────────────────────────────────────
//

// BrandContainer dobar
const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #ffffff;
  margin-right: 1.5rem;
`
// LogoLink dobar
const LogoLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`
// BrandText dobar
const BrandText = styled.span`
  font-size: 1.5rem;
  padding-left: 0.5rem;
`

//
// ─── HAMBURGER ──────────────────────────────────────────────────────────────────
//
const menuBtn = css`
  display: block;
  @media screen and (min-width: 992px) {
    display: none;
  }
`

const Hamburger = styled.button`
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-width: 1px;
  border-radius: 0.25rem;
  color: #b8c2cc;
  border-color: #8795a1;
  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`
const NavMenuBtn = ({ toggle }) => (
  <div css={menuBtn}>
    <Hamburger type="button" onClick={toggle}>
      <svg
        className="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </Hamburger>
  </div>
)

//
// ─── NAV-CONTENT ────────────────────────────────────────────────────────────────
//

const NavContent = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.orangeLighter};
  display: flex;
  flex-grow: 1;
  padding-top: 1.5rem;
  @media screen and (min-width: 992px) {
    display: none;
    align-items: center;
    width: auto;
    padding-top: 0;
    display: block;
  }
  ${props => !props.open && 'display: none'};
`
const ListLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
  @media screen and (min-width: 992px) {
    display: flex;
  }
`
const ListItem = styled.li`
  margin-right: 0.75rem;
  margin-bottom: 0;
`
const LinkItem = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.greyDark};
  text-decoration: none;
  padding: 0.75rem 0.5rem;
  &:hover {
    color: ${props => props.theme.colors.greyLighter};
    text-decoration: underline;
  }
`

class Header extends Component {
  state = {
    isActive: false,
  }

  toggleDropdown = () =>
    this.setState(prevState => ({ isActive: !prevState.isActive }))

  render() {
    const { isActive } = this.state
    return (
      <NavBar>
        <BrandContainer>
          <LogoLink href="#">
            <BrandText>BRAND</BrandText>
          </LogoLink>
        </BrandContainer>
        <NavMenuBtn toggle={this.toggleDropdown} />
        <NavContent open={isActive}>
          <ListLinks>
            <ListItem>
              <LinkItem href="#">Link</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Link</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Link</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Link</LinkItem>
            </ListItem>
          </ListLinks>
        </NavContent>
      </NavBar>
    )
  }
}

export default Header
