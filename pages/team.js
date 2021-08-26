import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Content from "../components/team"
import menu from "../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const Team = ({
  global,
  team,
  squadrons,
  advisories,
  founders,
  venturePartners,
}) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background: getStrapiMedia(team?.background),
  }

  return (
    <Box className={classes.root}>
      <Nav categories={menu} logo={image.logo} />
      <Content
        team={team}
        image={image}
        squadrons={squadrons}
        advisories={advisories}
        founders={founders}
        venturePartners={venturePartners}
      />
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [global, team, squadrons, advisories, founders, venturePartners,] =
    await Promise.all([
      fetchAPI("/global"),
      fetchAPI("/team"),
      fetchAPI("/squadrons"),
      fetchAPI("/advisories"),
      fetchAPI("/founders"),
      fetchAPI("/venture-partners"),
    ])

  return {
    props: { global, team, squadrons, advisories, founders, venturePartners, },
    revalidate: 1,
  }
}

export default Team
