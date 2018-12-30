import styled from '@emotion/styled'
import { css } from '@emotion/core'

const darkBackground = props => css`
  background: ${props.theme.colors.grayLighter};
`

const paddingYBig = css`
  padding-top: 8rem;
  padding-bottom: 8rem;
`

const paddingYSmall = css`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Section = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  > * {
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
  }
  ${props => props.dark && darkBackground};
  ${props => (props.small ? paddingYSmall : paddingYBig)};
`

export default Section
