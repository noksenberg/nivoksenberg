module.exports = {
    siteMetadata: {
      title: `Niv Oksenberg`,
      description: `Niv Oksenberg's personal website`,
      author: `@noksenberg`,
      url: `https://nivoksenberg.com`
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
        },
      },
    ],
  }