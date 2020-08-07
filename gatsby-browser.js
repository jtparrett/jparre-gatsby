const React = require("react")
const { ThemeProvider } = require("styled-components")

const { theme } = require("./src/theme")
const { Layout } = require("./src/components")

require("./src/index.css")

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

exports.wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
