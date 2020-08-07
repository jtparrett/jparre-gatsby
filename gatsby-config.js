module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:400,700`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SHOPIFY",
        fieldName: "shopify",
        url: "https://j-parre.myshopify.com/api/graphql",
        headers: {
          "x-shopify-storefront-access-token":
            "51db6b42c6c889530de646c4b281ddcd",
        },
      },
    },
    "gatsby-plugin-styled-components",
  ],
}
