import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Box } from "../Box"

const Logo = styled.img`
  display: block;
  width: 100%;
`

export const Header = () => (
  <Box to="/" as={Link} mb={5} mt={6} mx="auto" display="block" width="140px">
    <Logo src="/logo.svg" />
  </Box>
)