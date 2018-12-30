import React from 'react'
import styled from '@emotion/styled'
import Link from './Link'
import { Meta } from './Text'

const Name = styled.div`
  font-weight: 700;
  color: ${props => props.theme.colors.grayDarkest};
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
      color: ${props => props.theme.colors.gray};
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
  <Link to={to}>
    <Container>
      <Name>{name}</Name>
      <Meta>{meta}</Meta>
    </Container>
  </Link>
)

export default List
