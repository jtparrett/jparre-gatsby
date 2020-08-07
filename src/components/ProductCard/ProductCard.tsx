import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { Box } from "../Box"
import { Shopify_Product } from "../generated/graphql-types"

const Media = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 75%;
  max-height: 75%;
`

interface Props {
  product: Shopify_Product
}

export const ProductCard: React.FC<Props> = ({ product }) => (
  <Box
    as={Link}
    to={`/products/${product.handle}`}
    display="block"
    backgroundColor="grey"
    position="relative"
    pt="100%"
  >
    <Media src={product.images.edges[0].node.transformedSrc} />
  </Box>
)

export const ProductCardFragment = graphql`
  fragment ProductCardFragment on SHOPIFY_Product {
    id
    handle
    images(first: 1) {
      edges {
        node {
          transformedSrc(maxWidth: 400)
        }
      }
    }
  }
`
