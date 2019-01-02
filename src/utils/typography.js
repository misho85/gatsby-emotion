import Typography from 'typography'
import gray from 'gray-percentage'
import verticalRhythm from 'compass-vertical-rhythm'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const defaultFonts = [
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

const vr = verticalRhythm({
  baseFontSize: '16px',
  baseLineHeight: '24.88px',
})

const typography = new Typography({
  title: 'Gatsby Emotion',
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  scaleRatio: 2.5,
  headerFontFamily: ['Lato', ...defaultFonts],
  bodyFontFamily: ['Lato', ...defaultFonts],
  headerColor: gray(15),
  bodyColor: gray(20),
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
      fontWeight: options.headerWeight,
    },
    'h3,h4,h5,h6': {
      marginBottom: rhythm(1 / 2),
    },
    table: {
      ...scale(-1 / 5),
    },
    a: {
      fontWeight: 400,
      color: '#419eda',
      textDecoration: 'none',
    },
    'a:hover': {
      color: '#2a6496',
      textDecoration: 'underline',
    },
    h1: scale(4 / 4),
    h2: scale(3 / 4),
    h3: scale(2 / 4),
    h4: scale(1 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    blockquote: {
      // ...scale(1 / 6),
      borderLeft: `${rhythm(1 / 6)} solid ${gray(87)}`,
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(3 / 4),
      paddingRight: rhythm(3 / 4),
      marginLeft: 0,
      marginRight: 0,
      background: gray(97),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: 'normal',
    },
    // Mobile styles.
    [TABLET_MEDIA_QUERY]: {
      html: {
        ...vr.establishBaseline(),
      },
      blockquote: {
        paddingLeft: rhythm(1 / 2),
      },
      table: {
        ...scale(-1 / 5),
      },
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export const { rhythm, scale } = typography
export default typography
