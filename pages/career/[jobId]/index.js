import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../../../lib/api"
import { getStrapiMedia } from "../../../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../../../components/nav"
import Footer from "../../../components/footer"
import menu from "../../../lib/collection/menu"
import { useRouter } from "next/router"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const JobDetail = ({ global, office, jobOpportunities }) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
  }

  return (
    <Box className={classes.root}>
    </Box>
  )
}

export async function getStaticPaths() {
  // console.log("masuk1");
  const jobs = await fetchAPI(`/job-opportunities`)
  const paths = jobs?.map((job) => ({
    params: { jobId: job?.id ? job?.id?.toString() : '' },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  // console.log("masuk2");
  // console.log("ini context : ", context)
  // const { param } = context
  // Run API calls in parallel
  const [global, office, jobOpportunities] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI(`/office-addresses`),
    fetchAPI(`/job-opportunities/${params?.jobId}`),
  ])

  return {
    props: {
      global,
      office,
      jobOpportunities,
    },
    // revalidate: 1,
  }
}

export default JobDetail
