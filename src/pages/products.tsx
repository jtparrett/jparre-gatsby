import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Wrapper, Grid, ProductCard } from "../components"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      shopify {
        shop {
          collectionByHandle(handle: "all") {
            products(first: 250) {
              edges {
                node {
                  id
                  ...ProductCardFragment
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header />
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap={1}>
        {data?.shopify?.shop?.collectionByHandle?.products?.edges?.map(
          ({ node }) => (
            <ProductCard key={node.id} product={node} />
          )
        )}
      </Grid>
    </Wrapper>
  )
}

export default Products
