import Typography from 'typography'

export const HEADER_FONTS = [
  'Open Sans',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

export const SYSTEM_FONTS = [
  'Lato',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

const typography = new Typography({
  title: 'Gatsby Emotion',
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  scaleRatio: 3.157,
  headerFontFamily: HEADER_FONTS,
  bodyFontFamily: SYSTEM_FONTS,
  headerWeight: 700,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
