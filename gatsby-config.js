module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
  },

  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/tagCategories/`,

      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/tags/`
      }
    }
  ]

};
