import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Content from "../../components/career"
import menu from "../../lib/collection/menu"
import Seo from "../../components/seo"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const Career = ({ global, career, office, jobOpportunities }) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background1: getStrapiMedia(career?.background1),
    background2: getStrapiMedia(career?.background2),
  }

  const seo = {
    siteName: "Career",
    metaTitle: "Wright - Partners",
  }

  return (
    <Box className={classes.root}>
      <Seo seo={seo}/>
      <Nav categories={menu} logo={image.logo} />
      <Content career={career} image={image} office={office} jobOpportunities={jobOpportunities}/>
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [global, career, office, jobOpportunities] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/career"),
    fetchAPI("/office-addresses"),
    fetchAPI("/job-opportunities"),
  ])

  return {
    props: {
      global,
      career,
      office,
      jobOpportunities,
    },
    revalidate: 1,
  }
}

export default Career
