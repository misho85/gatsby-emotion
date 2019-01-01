// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates

import { css } from '@emotion/core'

//
// ─── MEDIA TEMPLATES ────────────────────────────────────────────────────────────
//

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

// Example:
// const Container = styled.div`
//   color: #333;
//   ${media.desktop`padding: 0 20px;`}
//   ${media.tablet`padding: 0 10px;`}
//   ${media.phone`padding: 0 5px;`}
// `

//
// ─── TRUNCATE ───────────────────────────────────────────────────────────────────
//

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

// Example:
// Make this div truncate the text with an ellipsis
// const Box = styled.div`
//   ${ truncate('250px') }
//   background: papayawhip;
// `;
