module.exports = {
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-example/.
  title: 'Studio | Gatsby-Emotion', // Site title.
  titleAlt: 'Studio', // Alternative site title for SEO.
  titleTemplate: '%s | Studio', // Useful when you want titles to inherit from a template
  siteUrl: 'https://gte.netlify.com/', // Domain of your website without pathPrefix.
  logo: 'src/assets/images/gatsby-icon.png', // Logo used for SEO and manifest.
  siteLanguage: 'en', // Language Tag on <html> element
  description: 'Test Gatsby with Emotion styling.', // Website description
  gTagID: '', // googleAnalyticsID gtag tracking ID.
  fbAppID: '', // FB Application ID for using app insights
  ogSiteName: 'studio', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  twitter: '@studio', // Twitter Username
  author: 'Miso Stevovic',
  shortName: 'Studio', // shortname for manifest. MUST be shorter than 12 characters
  themeColor: '#663399', // Used for setting manifest and progress theme colors.
  backgroundColor: '#663399', // Used for setting manifest background color.
  display: 'standalone', // Used for setting manifest display.
  copyright: 'Copyright © Studio 2018. All Rights Reserved.', // Copyright string for the footer of the website and RSS feed.
  // cordinates of mapbox marker
  mapLatitude: 44.812898,
  mapLongitude: 20.460539,
}
