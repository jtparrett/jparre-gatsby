const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      shopify {
        shop {
          collectionByHandle(handle: "all") {
            products(first: 250) {
              edges {
                node {
                  id
                  title
                  handle
                  descriptionHtml
                  variants(first: 1) {
                    edges {
                      node {
                        price
                      }
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        transformedSrc(maxWidth: 900)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  data.shopify.shop.collectionByHandle.products.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/Product/index.ts`),
      context: {
        product: node,
      },
    })
  })
}
