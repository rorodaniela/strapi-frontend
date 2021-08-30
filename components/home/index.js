import { Box, Button, Typography, Grid, IconButton } from "@material-ui/core"
import useStyles from "./styles"
import IconCustom from "../../src/icons"
import { getStrapiMedia } from "../../lib/media"
import { useSpring, animated } from "react-spring"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useRouter } from "next/router"

function Dashboard({ homepage, image, founders }) {
  const classes = useStyles()
  const router = useRouter()
  const floatInTitle1 = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1000 },
  })
  const floatInContent1 = useSpring({
    config: { duration: 2000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1000 },
  })
  const floatInTitle2 = useSpring({
    config: { duration: 1500 },
    to: { marginLeft: 0 },
    from: { marginLeft: -1000 },
  })
  const floatInContent2 = useSpring({
    config: { duration: 2500 },
    to: { marginLeft: 0 },
    from: { marginLeft: -1000 },
  })
  const floatInSection3 = useSpring({
    config: { duration: 2500 },
    to: { marginTop: 0 },
    from: { marginTop: 1000 },
  })
  const floatInPartnerL = useSpring({
    config: { duration: 2500 },
    to: { marginLeft: 0 },
    from: { marginLeft: -1000 },
  })
  const floatInPartnerR = useSpring({
    config: { duration: 2500 },
    to: { right: '-30vw' },
    from: { right: "-100vw" },
  })

  useEffect(()=> {
    Aos.init({})
  },[])

  return (
    <Grid container spacing={1} className={classes.hompage}>
      {/* Section 1 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.background}
        style={{
          backgroundImage: `url(${image?.background})`,
        }}
      >
        <Box className={classes.orangeBox} />
        <Box className={classes.home1}>
          <animated.div className={classes.box} style={floatInTitle1}>
            <Typography className={classes.title1}>
              {homepage?.content?.title1}
            </Typography>
          </animated.div>
          <animated.div className={classes.box} style={floatInContent1}>
            <Typography className={classes.content1}>
              {homepage?.content?.content1}
            </Typography>
          </animated.div>
        </Box>
      </Grid>
      {/* End of section 1 */}

      {/* Section 2 */}
      <Grid
        item
        container
        spacing={0}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box className={classes.home2}>
            <div
              className={classes.boxTitle2}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Typography className={classes.title2}>
                {homepage?.content?.title2}
              </Typography>
            </div>
            <div
              className={classes.box}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <Typography className={classes.content2}>
                {homepage?.content?.content2}
              </Typography>
              <Button
                className={classes.readMoreBtn}
                variant="contained"
                color="secondary"
                endIcon={<IconCustom name={"right-arrow"} color={"white"} />}
                onClick={() => router.push('/venture-building')}
              >
                Read More
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ width: "100%" }}
        >
          {/* <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="easing-in-sine"
          > */}
          <Box
            className={classes.orangeBox2}
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="2000"
            data-aos-easing="easing-in-sine"
          />
          <Box
            className={classes.image2}
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="easing-in-sine"
            data-aos-duration="2000"
          >
            {/* eslint-disable-next-line */}
            <img
              src={image?.cityView}
              style={{ width: "100%", height: "100%" }}
              alt="city-view"
            />
          </Box>
          {/* </div> */}
        </Grid>
      </Grid>
      {/* End of section 2 */}

      {/* Section 3 */}
      <Grid
        item
        container
        spacing={0}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={0} sm={4} md={4} lg={4} xl={3}>
          <Box className={classes.image3}>
            {/* eslint-disable-next-line */}
            <img
              src={image?.tuxedo ? image?.tuxedo : ""}
              alt="tuxedo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
          xl={9}
          className={classes.home3}
        >
          <div
            className={classes.box}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Typography className={classes.title3} color="secondary">
              {homepage?.content?.title3.toUpperCase()}
            </Typography>
            <Typography className={classes.content3}>
              {homepage?.content?.content3.toUpperCase()}
            </Typography>
            {/* eslint-disable-next-line */}
            <img
              src={image?.chart ? image?.chart : ""}
              alt="chart"
              className={classes.chart}
            />
          </div>
        </Grid>
      </Grid>
      {/* End of section 3 */}

      {/* Section 4 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ minHeight: "80vh", maxHeight: "100vh" }}
      >
        <Box
          className={classes.image4}
          style={{ backgroundImage: `url(${image?.landingPlane})` }}
        ></Box>
        <Box className={classes.home4}>
          <Typography className={classes.title4} color="secondary">
            INVESTABLE
          </Typography>
          <Typography className={classes.title4} style={{ color: "white" }}>
            CORPORATE VENTURE
          </Typography>
          <Box style={{ width: "80%" }}>
            <Typography className={classes.content4}>
              {homepage?.content?.content4}
            </Typography>
          </Box>
        </Box>
        {/* Disadvantage ventures */}
        <Box className={classes.disadvantage}>
          <Typography className={classes.lightText}>
            Corporates have an{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              unfair advantage
            </span>{" "}
            in building ventures
          </Typography>
          <Grid container spacing={1} style={{ marginTop: "0.5rem" }}>
            <Grid item xs={6} sm={6} md={4} lg={4}>
              <Typography className={classes.boldText}>
                {homepage?.content?.disadvantages?.valuation}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md-={8} lg={8}>
              <Typography className={classes.boldSmallText}>
                higher valuation{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "100",
                  }}
                >
                  {" "}
                  step-ups{" "}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
              <Typography className={classes.boldText}>
                {homepage?.content?.disadvantages?.profitable}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={8} lg={8}>
              <Typography className={classes.boldSmallText}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "100",
                  }}
                >
                  more{" "}
                </span>{" "}
                profitable exits
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
              <Typography className={classes.boldText}>
                {homepage?.content?.disadvantages?.bankrupties}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={8} lg={8}>
              <Typography className={classes.boldSmallText}>
                fewer bankrupties
              </Typography>
            </Grid>
            <Grid item lg={12} style={{ marginTop: "0.5rem" }}>
              <Typography className={classes.lightTextFull}>
                for corporate ventures compared to VC-backked venture
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.disadvantageShadow} />
      </Grid>
      {/* End of Section 4 */}

      {/* Section 5 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ minHeight: "20vh", paddingTop: "5rem" }}
      >
        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="500"
          className={classes.boxPartner}
        />
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="500"
          className={classes.boxPartnerLeft}
        >
          <Typography className={classes.title5}>
            {homepage?.content?.title5.toUpperCase()}
          </Typography>
          <Typography className={classes.content5}>
            {homepage?.content?.content5}
          </Typography>
        </div>
      </Grid>
      {/* End of Section 5 */}

      {/* Section 6 */}
      <Grid
        item
        container
        spacing={2}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.boxFounder}
      >
        {/* <Box className={classes.boxFounder}> */}
        {/* <Grid container spacing={2}> */}
        <Grid item xs={12} sm={10} md={10} lg={9} xl={9}>
          <Typography className={classes.title6}>
            {homepage?.content?.title6}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={10}
          md={10}
          lg={9}
          xl={9}
          spacing={2}
          className={classes.cardFounder}
        >
          {founders?.map((person) => {
            const pict = getStrapiMedia(person.picture)
            return (
              <Grid item xs={12} sm={3} md={3} lg={3} xl={3} key={person.id}>
                <Box>
                  {/* eslint-disable-next-line */}
                  <img
                    src={pict}
                    alt="pict-profile"
                    className={classes.profilePict}
                  />
                  <Typography className={classes.name}>{person.name}</Typography>
                  <Typography className={classes.role}>{person.role}</Typography>
                  <Typography className={classes.desc}>
                    {person.description}
                  </Typography>
                </Box>
                <Box className={classes.boxIcon}>
                  <>
                    {
                      person?.socialMedia?.linkedIn ? (
                        <Box style={{ marginRight: "2rem" }}>
                          <IconButton onClick={() => window.open(person?.socialMedia?.linkedIn)}>
                            <IconCustom name="linkedin" color="white" />
                          </IconButton>
                        </Box>
                      ) : <></>
                    }
                  </>
                  <>
                    {
                      person?.socialMedia?.twitter ? (
                        <Box style={{ marginRight: "2rem" }}>
                          <IconButton onClick={() => window.open(person?.socialMedia?.twitter)}>
                            <IconCustom name="twitter" color="white" />
                          </IconButton>
                        </Box>
                      ) : <></>
                    }
                  </>
                </Box>
              </Grid>
            )
          })}
        </Grid>
        <Grid
          item
          xs={9}
          sm={9}
          md={9}
          lg={9}
          xl={9}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1500"
          >
            <Button
              className={classes.teamBtn}
              variant="contained"
              color="secondary"
              endIcon={<IconCustom name={"right-arrow"} color={"white"} />}
              onClick={() => router.push('/team')}
            >
              See the full teams
            </Button>
          </div>
        </Grid>
        {/* </Grid> */}
        {/* </Box> */}
      </Grid>
      {/* End of section 6 */}
    </Grid>
  )
}

export default Dashboard