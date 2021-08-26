import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Content from "../components/cvc-as-service"
import menu from "../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const CvcService = ({
  global,
  cvcService,
}) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background1: getStrapiMedia(cvcService?.background1),
    background2: getStrapiMedia(cvcService?.background2),
  }

  return (
    <Box className={classes.root}>
      <Nav categories={menu} logo={image.logo} />
      <Content
        cvcService={cvcService}
        image={image}
      />
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    global,
    cvcService,
  ] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/cvc-as-service"),
  ])

  return {
    props: {
      global,
      cvcService,
    },
    revalidate: 1,
  }
}

export default CvcService
