import { Box } from "@material-ui/core"
import React from "react"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Dashboard from "../components/home"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import menu from "../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100%',
    width: "100%",
    overflow: "hidden",
    position: "relative",
  }
}))

const Home = ({ global, homepage, founders }) => {
  const classes = useStyles()
  const background = getStrapiMedia(homepage?.content?.background)
  const cityView = getStrapiMedia(homepage?.content?.image1)
  const tuxedo = getStrapiMedia(homepage?.content?.image2)
  const chart = getStrapiMedia(homepage?.content?.image3)
  const landingPlane = getStrapiMedia(homepage?.content?.image4)
  const logo = getStrapiMedia(global?.logo)
  const image = {
    background,
    cityView,
    tuxedo,
    chart,
    landingPlane,
    logo
  }
  const seo = {...homepage.ceo, siteName:"Wright Partners"}
  console.log(homepage, "<<<");
  return (
    <Box className={classes.root}>
      <Seo seo={seo} />
      <Nav categories={menu} logo={logo}/>
      <Dashboard homepage={homepage} image={image} founders={founders} />
      <Footer categories={menu} logo={logo}/>
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [global, homepage, founders] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/homepage"),
    fetchAPI("/founders"),
  ])

  return {
    props: { global, homepage, founders },
    revalidate: 1,
  }
}

export default Home
