import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { LinkItem } from './Text'
import Link from './Link'

const Space = styled.div`
  padding-left: 1rem;
  @media screen and (min-width: 576px) {
    padding-left: 2rem;
  }
`

const backgroundDark = props => css`
  background: ${props.theme.colors.grayLighter};
`

const Ribbon = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  ${props => props.dark && backgroundDark};
`

const Half = styled.div`
  display: flex;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Footer = () => (
  <Ribbon>
    <Container>
      <Half left>
        <Link to="/">
          <LinkItem>HOME</LinkItem>
        </Link>
        <Space />
        <Link to="/blog">
          <LinkItem>BLOG</LinkItem>
        </Link>
        <Space />
        <Link to="/repos">
          <LinkItem>REPOS</LinkItem>
        </Link>
        <Space />
        <Link to="/reading">
          <LinkItem>READING</LinkItem>
        </Link>
        <Space />
        <Link to="/tester">
          <LinkItem>TEST</LinkItem>
        </Link>
        <Space />
        <Link to="https://github.com/misho85">
          <LinkItem>GITHUB</LinkItem>
        </Link>
        <Space />
      </Half>
      <Half>
        <Link to="/contact">
          <LinkItem>CONTACT</LinkItem>
        </Link>
      </Half>
    </Container>
  </Ribbon>
)

export default Footer
