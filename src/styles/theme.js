import colors from './colors'

const sizes = {
  wide: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const theme = {
  colors,
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  minWidth: {
    wide: `min-width: ${sizes.wide / 16}em`,
    desktop: `min-width: ${sizes.desktop / 16}em`,
    tablet: `min-width: ${sizes.tablet / 16}em`,
    phone: `min-width: ${sizes.phone / 16}em`,
  },
  maxWidth: {
    wide: `max-width: ${sizes.wide / 16}em`,
    desktop: `max-width: ${sizes.desktop / 16}em`,
    tablet: `max-width: ${sizes.tablet / 16}em`,
    phone: `max-width: ${sizes.phone / 16}em`,
  },
}

export default theme
