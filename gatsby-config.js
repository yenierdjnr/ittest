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
    }
  ]

};
