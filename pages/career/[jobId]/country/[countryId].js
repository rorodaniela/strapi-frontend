import { Box } from "@material-ui/core"
import React from "react"
import { fetchAPI } from "../../../../lib/api"
import { getStrapiMedia } from "../../../../lib/media"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../../../../components/nav"
import Footer from "../../../../components/footer"
import Content from "../../../../components/career/detail-job"
import menu from "../../../../lib/collection/menu"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
}))

const JobDetail = ({ global, office, jobOpportunities, careerDetail }) => {
  const classes = useStyles()
  const image = {
    logo: getStrapiMedia(global?.logo),
    background1: getStrapiMedia(careerDetail?.background1),
    background2: getStrapiMedia(careerDetail?.background2),
  }
  const seo = {
    siteName: `Job Description | ${careerDetail?.longName}`,
    metaTitle: "Wright - Partners",
  }

  return (
    <Box className={classes.root}>
      <Nav categories={menu} logo={image.logo} />
      <Content
        image={image}
        office={office}
        jobOpportunities={jobOpportunities}
        careerDetail={careerDetail}
      />
      <Footer categories={menu} logo={image.logo} />
    </Box>
  )
}

export async function getStaticPaths() {
  const office = await fetchAPI(`/office-addresses`)
  const jobs = await fetchAPI(`/job-opportunities`)
  const paths1 = jobs?.map((job) => ({
    params: { jobId: job?.id ? job?.id?.toString() : '' },
  }))

  const paths = office.map((country, idx) => ({
    params: {...paths1[idx]?.params, countryId: country?.id ? country?.id.toString() : ''}
  }))

  return { paths, fallback: false }
}
 
export async function getStaticProps({params}) {
  // Run API calls in parallel
  const [global, office, jobOpportunities, careerDetail] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI(`/office-addresses/${params?.countryId}`),
    fetchAPI(`/job-opportunities/${params?.jobId}`),
    fetchAPI("/career-detail"),
  ])

  return {
    props: {
      global,
      office,
      jobOpportunities,
      careerDetail
    },
    revalidate: 1,
  }
}

export default JobDetail
