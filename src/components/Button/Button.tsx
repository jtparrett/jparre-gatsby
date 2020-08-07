import React from "react"
import styled from "styled-components"

import { Box } from "../Box"

const ButtonRoot = styled(Box)`
  text-transform: uppercase;

  :hover {
    background: transparent;
    color: ${props => props.theme.colors.black};
  }
`

export const Button: React.FC<any> = ({ children, ...props }) => (
  <ButtonRoot
    display="inline-block"
    borderWidth="1px"
    borderStyle="solid"
    borderColor="black"
    px={3}
    py={2}
    fontWeight="bold"
    fontSize="1rem"
    color="white"
    backgroundColor="black"
    {...props}
  >
    {children}
  </ButtonRoot>
)

Button.defaultProps = {
  as: "button",
}
