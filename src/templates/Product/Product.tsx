import React from "react"
import { Link } from "gatsby"

import { Header, Wrapper, ProductCard, Box, Text } from "../../components"

export const Product = ({ pathContext: { product } }) => {
  return (
    <Wrapper width="700px">
      <Header />
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
