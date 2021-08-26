import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Content from "../components/alumni"
import menu from "../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const Alumni = ({
  global,
  alumniPage,
  alumni,
}) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background: getStrapiMedia(alumniPage?.background),
  }

  return (
    <Box className={classes.root}>
      <Nav categories={menu} logo={image.logo} />
      <Content
        alumniPage={alumniPage}
        image={image}
        alumni={alumni}
      />
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [global, alumniPage, alumni] =
    await Promise.all([
      fetchAPI("/global"),
      fetchAPI("/alumni-page"),
      fetchAPI("/alumni"),
    ])

  return {
    props: { global, alumniPage, alumni },
    revalidate: 1,
  }
}

export default Alumni
