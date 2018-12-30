import React from 'react'
import { NavigationControl } from 'react-map-gl'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import screenFull from '../../assets/images/screen-full.svg'
import screenNormal from '../../assets/images/screen-normal.svg'

const topLeft = css`
  padding: 0.5rem 0 0 0.5rem;
`
const bottomLeft = css`
  padding: 0 0 2rem 0.5rem;
  bottom: 0;
`
const topRight = css`
  padding: 0.5rem 0.5rem 0 0;
  top: 0;
  right: 0;
`

const Position = styled.div`
  position: absolute;
  ${props =>
    (props.topLeft && topLeft) ||
    (props.bottomLeft && bottomLeft) ||
    (props.topRight && topRight)};
`

const ThemeBtn = styled.button`
  background: white;
  outline: 0;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  border-width: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  &:hover {
    background: ${props => props.theme.colors.greyLighter};
  }
`
const FScreenBtn = styled.button`
  background-color: #ffffff;
  width: 2.5rem;
  outline: 0;
  cursor: pointer;
  border-width: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  &:hover {
    background: ${props => props.theme.colors.greyLighter};
  }
  img {
    margin-bottom: -3px;
  }
`
export default ({
  styleChange,
  onViewportChange,
  goFull,
  fullScreen,
  styleId,
}) => (
  <>
    <Position topLeft>
      <NavigationControl
        showCompass={false}
        onViewportChange={onViewportChange}
      />
    </Position>
    <Position bottomLeft>
      <ThemeBtn onClick={styleChange}>
        {styleId === 'light' ? 'dark' : 'light'} theme
      </ThemeBtn>
    </Position>
    <Position topRight>
      <FScreenBtn type="button" onClick={goFull}>
        <img src={fullScreen ? screenNormal : screenFull} alt="fullScreen" />
      </FScreenBtn>
    </Position>
  </>
)
