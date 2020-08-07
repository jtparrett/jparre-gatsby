module.exports = {
  siteMetadata: {
    title: "J.Parré Apparel Co",
    description: "U.K based independent original clothing.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["open sans:400,700"],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-generate-typings",
      options: {
        dest: "./src/generated/graphql-types.d.ts",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "J.Parré",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000",
        display: "minimal-ui",
        icon: "static/favicon.png",
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
