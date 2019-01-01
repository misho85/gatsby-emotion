import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Link from './Link'
import { Meta } from './Text'

const linkStyle = css`
  &:hover {
    text-decoration: none;
    color: hsla(0, 0%, 0%, 0.8);
  }
`

const Name = styled.div`
  font-weight: 700;
  /* color: ${props => props.theme.colors.grayDarkest}; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
`

const Container = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${Name} {
    ::after {
      content: '→';
      transition: all 250ms ease-in-out;
      opacity: 0;
      font-weight: 200;
      /* color: ${props => props.theme.colors.gray}; */
      padding-left: 1.5rem;
    }
  }
  :hover {
    ${Name} {
      ::after {
        opacity: 1;
        padding-left: 2rem;
      }
    }
  }
`

const List = ({ to, name, meta }) => (
  <Link css={linkStyle} to={to}>
    <Container>
      <Name>{name}</Name>
      <Meta>{meta}</Meta>
    </Container>
  </Link>
)

export default List
