/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { slide } from 'react-burger-menu'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rhythm } from '../../utils/typography'
import MobileMenuOpenIcon from '../../assets/mobile-menu-open.svg'
import MobileMenuCloseIcon from '../../assets/mobile-menu-close.svg'

import NavItem from './NavItem'

const Container = styled.div`
  display: none;
  @media (${props => props.theme.maxWidth.tablet}) {
    display: flex;
    margin: 0;
  }
`

const MobileMenuButton = styled.a`
  width: 26px;
  height: 26px;
  background-image: url(${prop => prop.image});
  background-repeat: no-repeat;
  background-position: center;
`

const NavItemWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: solid 1px #d2d2d2;
  text-align: center;
`

const mShadow = css`
  box-shadow: -10px 10px 30px -5px rgba(0, 0, 0, 0.25);
`
const Menu = styled(slide)`
  ${props => props.shadow && mShadow};
`

const menuStyle = {
  bmBurgerButton: {
    display: 'none',
  },
  bmCrossButton: {
    display: 'none',
  },
  bmMenu: {
    minHeight: '100vh',
    background: 'white',
  },
  bmMenuWrap: {
    top: rhythm(2),
    bottom: 0,
    width: '100%',
    height: 'auto',
    maxHeight: 'calc(100vh - 80px)',
  },
  bmItemList: {
    display: 'flex',
    padding: 40,
    flexDirection: 'column',
  },
}

class MobileMenu extends Component {
  state = {
    isOpen: false,
  }

  componentDidUpdate(prevState) {
    // If the hamburger menu is open, disable scrolling on the site
    if (prevState.isOpen !== this.state.isOpen) {
      if (this.state.isOpen) {
        // overflow:hidden disables the scrolling on a desktop browser
        // position: fixed is additionally needed for mobile devices
        document.body.setAttribute(
          'style',
          'overflow: hidden; position: fixed;'
        )
      } else {
        document.body.setAttribute(
          'style',
          'overflow: visible; position: static;'
        )
      }
    }
  }

  toggleMenu = () => {
    // document.getElementById('content').style.opacity = this.state.isOpen ? 1 : 0
    // document.getElementById('footer').style.opacity = this.state.isOpen ? 1 : 0
    // document.body.style.backgroundColor = this.state.isOpen ? '#fff' : '#fafafa'
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  render() {
    const { isOpen } = this.state
    const { pathname } = this.props
    return (
      <Container>
        <MobileMenuButton
          onClick={this.toggleMenu}
          image={isOpen ? MobileMenuCloseIcon : MobileMenuOpenIcon}
        />
        <Menu
          shadow={isOpen}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          isOpen={isOpen}
          right
          styles={menuStyle}
          noOverlay
        >
          <NavItemWrapper>
            <NavItem
              title="HOME"
              to="/"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="BLOG"
              to="/blog"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="REPOS"
              to="/repos"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="READING"
              to="/reading"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="CONTACT"
              to="/contact"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
          </NavItemWrapper>
        </Menu>
      </Container>
    )
  }
}

export default MobileMenu
