import React from "react"
import { Link } from "gatsby"

import { SEO, Box, Text } from "../components"

const NotFoundPage: React.FC = () => (
  <Box textAlign="center">
    <SEO title="404: Not found" />
    <Text as="h1">Page not found</Text>
    <Text as={Link} to="/" pt={4} display="inline-block">
      &larr; Go back home
    </Text>
  </Box>
)

export default NotFoundPage
