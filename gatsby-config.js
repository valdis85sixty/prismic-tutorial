/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPO_NAME}`,
        // accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        customTypesApiToken: `${process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN}`,
      },
    },
  ],
}
