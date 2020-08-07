import React from "react"

import { Header } from "../Header"
import { Footer } from "../Footer"

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
