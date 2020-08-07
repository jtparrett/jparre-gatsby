import React from "react"
import { Link } from "gatsby"

import { SEO, Box, Button, Video } from "../components"

const Home = () => (
  <Box>
    <SEO title="Home" />

    <Video src="https://www.youtube.com/embed/SzJTzt2Hy74" />

    <Box textAlign="center" mt={5}>
      <Button as={Link} to="/products">
        Shop the collection &rarr;
      </Button>
    </Box>
  </Box>
)

export default Home
