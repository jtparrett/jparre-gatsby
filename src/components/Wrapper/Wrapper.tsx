import styled from "styled-components"
import { Box } from "../Box"

export const Wrapper = styled(Box).attrs(props => ({
  width: props.width || "1000px",
  mx: "auto",
  maxWidth: "100%",
}))``
