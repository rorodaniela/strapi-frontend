import { Box } from "@material-ui/core"
import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children, categories, logo }) => (
  <Box style={{height: '100%'}}>
    <Nav categories={categories} logo={logo} />
      {children}
    <Footer categories={categories} logo={logo} />
  </Box>
)

export default Layout
