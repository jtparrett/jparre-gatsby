const React = require("react")
const { ThemeProvider } = require("styled-components")

const { theme } = require("./src/theme")

require("./src/index.css")

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
