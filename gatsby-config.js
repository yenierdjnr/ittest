const currentEnv = process.env.MARKETING_ENV || 'development';

require("dotenv").config({
  path: `.env.${currentEnv}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.SELF_URL}`,
  },
  plugins: [

    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `${process.env.GOOGLE_TAG_MGR_ID}`,
        includeInDevelopment: true,
      },
    },
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
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/courses/`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/vLabs/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/careerPaths/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/getCertified/`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/itResources/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
  ]

};
