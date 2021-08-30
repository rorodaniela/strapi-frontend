import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Content from "../components/contact-us"
import menu from "../lib/collection/menu"
import Seo from "../components/seo"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const ContactUs = ({
  global,
  contactUs,
  office,
}) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background: getStrapiMedia(contactUs?.background),
  }

  const seo = {
    siteName: "Contact - Us",
    metaTitle: "Wright - Partners",
  }

  return (
    <Box className={classes.root}>
      <Seo seo={seo}/>
      <Nav categories={menu} logo={image.logo} />
      <Content
        contactUs={contactUs}
        image={image}
        office={office}
      />
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    global,
    contactUs,
    office,
  ] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/contact-us"),
    fetchAPI("/office-addresses"),
  ])

  return {
    props: {
      global,
      contactUs,
      office,
    },
    revalidate: 1,
  }
}

export default ContactUs
