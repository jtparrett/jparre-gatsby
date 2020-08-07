import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Text } from "../Text"
import { Box } from "../Box"

const PageLink = styled(Text).attrs({
  as: Link,
  mx: 2,
})`
  color: ${props => props.theme.colors.shaded};
`

export const Footer: React.FC = () => (
  <Box textAlign="center" mt={[4, 5]} pb={5}>
    <Text mb={2}>J.Parré Apparel Co.</Text>
    <PageLink to="/products">Products</PageLink>
    <PageLink to="/contact">Contact</PageLink>
    <PageLink to="/privacy-policy">Privacy Policy</PageLink>
  </Box>
)
