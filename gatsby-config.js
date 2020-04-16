module.exports = {
    siteMetadata: {
      title: `Niv Oksenberg`,
      description: `Personal Website`,
      author: `@noksenberg`,
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
        // 'gatsby-plugin-styled-components',
      },
    ],
  }