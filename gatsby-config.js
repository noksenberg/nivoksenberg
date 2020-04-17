module.exports = {
  siteMetadata: {
    title: `Niv Oksenberg`,
    description: `Niv Oksenberg's personal website`,
    author: `@noksenberg`,
    siteUrl: `https://nivoksenberg.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163871634-1X"
      }
    }
  ]
};
