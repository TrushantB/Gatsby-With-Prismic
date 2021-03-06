module.exports = {
  siteMetadata: {
    title: `Ivision Web Studio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ivision-Web-Studio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'gatsbywithprismic', // (required)
        accessToken: 'MC5YTUJyM3hFQUFDSUFtM2FH.77-977-9Su-_vXp677-977-977-9bWnvv70LPu-_ve-_ve-_vTApDkge77-9XCMi77-977-9G--_ve-_vVA', // (optional)
        
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
