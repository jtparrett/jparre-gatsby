import React from "react"
import { Link } from "gatsby"

import { SEO, Wrapper, ProductCard, Box, Text } from "../../components"
import { Shopify_Product } from "../../generated/graphql-types"

interface Props {
  pathContext: {
    product: Shopify_Product
  }
}

export const Product: React.FC<Props> = ({ pathContext: { product } }) => {
  return (
    <Wrapper width="700px">
      <SEO title={product?.title} description={product?.description} />
      <ProductCard product={product} />
      <Box p={4}>
        <Text as="h1" fontSize="1.8rem">
          {product?.title}
        </Text>
        <Box
          lineHeight="1.5"
          mt={2}
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
        <Text mt={2} fontWeight="bold">
          &pound;{product.variants.edges[0].node.price}
        </Text>
        <Box textAlign="center" mt={4}>
          <Text as={Link} to="/products">
            &larr; Return to the collection
          </Text>
        </Box>
      </Box>
    </Wrapper>
  )
}
