const currentEnv = process.env.MARKETING_ENV || 'development';

require("dotenv").config({
    path: `.env.${currentEnv}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.SELF_URL}`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: `${process.env.GOOGLE_TAG_MGR_ID}`,

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: true,

      // Specify optional GTM environment details.
      // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
      // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
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
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    'gatsby-plugin-react-helmet'
  ]

};
