import { ReactText } from "react"
import styled from "styled-components"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  layout,
  color,
  border,
  typography,
  background,
  flexbox,
  grid,
  position,
} from "styled-system"

export const Box = styled.div.withConfig({
  shouldForwardProp: shouldForwardProp as (
    prop: ReactText,
    defaultValidatorFn: (prop: ReactText) => boolean
  ) => boolean,
})`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${typography}
  ${background}
  ${flexbox}
  ${grid}
  ${position}
`
