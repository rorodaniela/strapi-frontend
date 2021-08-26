import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Content from "../components/venture-building"
import menu from "../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const VentureBuilding = ({
  global,
  ventureBuilding,
}) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background: getStrapiMedia(ventureBuilding?.background),
    diagram: getStrapiMedia(ventureBuilding?.diagram),
  }

  return (
    <Box className={classes.root}>
      <Nav categories={menu} logo={image.logo} />
      <Content
        ventureBuilding={ventureBuilding}
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
    ventureBuilding,
  ] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/venture-building"),
  ])

  return {
    props: {
      global,
      ventureBuilding,
    },
    revalidate: 1,
  }
}

export default VentureBuilding
