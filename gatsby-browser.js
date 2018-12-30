/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import Layout from './src/components/Layout'
import theme from './src/styles/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
