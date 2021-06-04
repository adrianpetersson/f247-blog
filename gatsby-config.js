module.exports = {
  siteMetadata: {
    title: `F24 blog Concept`,
    siteUrl: 'https://f247blog.netlify.app/',
    description: 'A fitness 24/7 blog',
    author: `Adrian Petersson`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
    pathPrefix: "/f247-blog"
}
