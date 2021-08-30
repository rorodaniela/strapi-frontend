import { Box, Typography, Grid, Button } from "@material-ui/core"
import useStyles from "./styles"
import { useSpring, animated } from "react-spring"
import { useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import {useRouter} from "next/router"

const jobMalay = [
  {
    id: 1,
    longName: "Venture Lead",
    shortName: "Co-founder",
  },
  {
    id: 2,
    longName: "Venture Architect",
    shortName: "Venture Architect",
  },
  {
    id: 3,
    longName: "CTO",
    shortName: "CTO",
  },
]

function Content({ career, image, office, jobOpportunities }) {
  const classes = useStyles()
  const router = useRouter()
  
  const floatInRight = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1000 },
  })
  
  const floatInLeft = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: 1000 },
  })

  useEffect(() => {
    Aos.init({})
  }, [])

  const goDetail = (office, job) => {
    router.push(`/career/${job.id}/country/${office.id}`)
  }

  return (
    <Grid container spacing={2} className={classes.root}>
      {/* Section 1 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ backgroundImage: `url(${image?.background1})` }}
        className={classes.background1}
      >
        <Box
          style={{ backgroundImage: `url(${image?.background1})` }}
          className={classes.background1}
        />
        <Box className={classes.orangeBox} />
        <Box className={classes.section1}>
          <animated.div className={classes.box} style={floatInRight}>
            <Typography className={classes.title1}>{career?.title1}</Typography>
          </animated.div>
          <animated.div className={classes.box} style={floatInLeft}>
            <Typography className={classes.content1}>
              {career?.content1}
            </Typography>
          </animated.div>
        </Box>
      </Grid>
      {/* Section 2 */}
      <Grid
        item
        container
        spacing={2}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section2}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <Typography className={classes.title2}>{career?.title2}</Typography>
        </Grid>
        {jobOpportunities?.map((job) => {
          if (job.id === 2 || job.id === 3 || job.id === 6) {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.gridJob}
                key={job.id}
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1900"
              >
                <Typography className={classes.jobName}>
                  {job?.longName}{" "}
                  {job?.shortName?.length > 0 ? `/ ${job?.shortName}` : ""}
                </Typography>
                <Typography className={classes.shortDesc}>
                  {job?.shortDesc}
                </Typography>
              </Grid>
            )
          }
        })}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          {/* eslint-disable-next-line */}
          <a href="/contact-us" className={classes.fyi}>
            {career?.fyi}
          </a>
        </Grid>
      </Grid>
      {/* Section 3 */}
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ backgroundImage: `url(${image?.background2})` }}
        className={classes.section3}
      >
        {/* Title */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            className={classes.orangeBox3}
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1500"
          />
          <Box
            className={classes.contentBox3}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
          >
            <Typography className={classes.title3}>{career?.title3}</Typography>
          </Box>
        </Grid>
        {/* Job Available */}
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.gridJobAvailable}
        >
          {office.map((country) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.gridCountry}
              key={country.id}
            >
              <Typography
                className={classes.country}
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1500"
              >
                {country?.country}
              </Typography>
              {country?.jobAvailable?.map((item) => (
                <Box className={classes.cardJob} key={item.id}>
                  <Typography
                    className={classes.jobAvailable}
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-duration="1500"
                  >
                    {item?.shortName ? item?.shortName : item?.longName}
                  </Typography>
                  <Button
                    onClick={() => goDetail(country, item)}
                    variant="contained"
                    className={classes.learnMoreBtn}
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-duration="1500"
                  >
                    Learn More
                  </Button>
                </Box>
              ))}
            </Grid>
          ))}

          {/* Job Malaysia */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.gridCountry}
          >
            <Typography
              className={classes.country}
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1500"
            >
              Malaysia
            </Typography>
            {jobMalay?.map((item, idx) => (
              <Box className={classes.cardJob} key={idx}>
                <Typography
                  className={classes.jobAvailable}
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-duration="1500"
                >
                  {item?.longName}
                </Typography>
                <Button
                  variant="contained"
                  className={classes.learnMoreBtn}
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1500"
                >
                  Learn More
                </Button>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
