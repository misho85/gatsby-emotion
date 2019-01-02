/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { slide } from 'react-burger-menu'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

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
    top: 60,
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
              title="Blog"
              to="/blog"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="Repos"
              to="/repos"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="GitHub"
              to="https://github.com/misho85/gatsby-emotion"
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
