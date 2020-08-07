import React from "react"
import styled from "styled-components"

import { Box } from "../Box"

interface Props {
  src: string
}

const VideoRoot = styled(Box)`
  ::before {
    content: "";
    padding-top: 56%;
    display: block;
  }
`

export const Video: React.FC<Props> = ({ src }) => (
  <VideoRoot width="700px" position="relative" maxWidth="100%" mx="auto">
    <Box
      as="iframe"
      src={src}
      frameBorder="0"
      position="absolute"
      width="100%"
      height="100%"
      allowFullScreen
      top="0"
    />
  </VideoRoot>
)
