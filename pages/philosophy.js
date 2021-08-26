import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Content from "../components/philosophy"
import menu from "../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const Philosophy = ({ global, philosophy }) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background2: getStrapiMedia(philosophy?.background2[0]),
    background1: getStrapiMedia(philosophy?.background),
  }

  return (
    <Box className={classes.root}>
      <Nav categories={menu} logo={image.logo} />
      <Content philosophy={philosophy} image={image} />
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [global, philosophy] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/philosophy"),
  ])

  return {
    props: { global, philosophy },
    revalidate: 1,
  }
}

export default Philosophy
