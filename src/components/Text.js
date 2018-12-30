import styled from '@emotion/styled'

export const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`

export const Subtitle = styled.h6`
  color: ${props => props.theme.colors.grey};
`
export const Tagline = styled.h2`
  color: ${props => props.theme.colors.greyDarkest};
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`

export const Paragraph = styled.p``

export const Meta = styled.h5`
  color: ${props => props.theme.colors.greyDarker};
  font-size: 0.75rem;
  font-weight: 400;
  padding-top: 0.5rem;
`

export const LinkItem = styled.h3`
  color: ${props => props.theme.colors.greyDarkest};
  font-size: 0.75rem;
  margin-bottom: 0;
`
