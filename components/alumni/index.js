import { Box, Typography, Grid,IconButton } from "@material-ui/core"
import useStyles from "./styles"
import { getStrapiMedia } from "../../lib/media";
import IconCustom from "../../src/icons";
import { useSpring, animated } from "react-spring"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Content({ alumniPage, image, alumni }) {
  const classes = useStyles()
  const floatInFromLeft = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1000 },
  })

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <Grid container className={classes.root}>
      {/* Section 1 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.contentSection1}
      >
        <animated.div className={classes.orangeBox1} style={floatInFromLeft} />
        <Box
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="easing-in-sine"
          data-aos-duration="1000"
          className={classes.background}
          style={{ backgroundImage: `url(${image?.background})` }}
        />
        <animated.div className={classes.titleBox} style={floatInFromLeft}>
          <Typography className={classes.title1}>
            {alumniPage?.title1}
          </Typography>
          <Typography className={classes.subtitle1}>
            {alumniPage?.content}
          </Typography>
        </animated.div>
        <Grid
          item
          container
          spacing={0}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.founderSection}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="easing-in-sine"
            data-aos-duration="1000"
          >
            <Typography className={classes.title2}>{alumniPage?.subtitle1}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.founderContainer1}
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="easing-in-sine"
            data-aos-duration="1000"
          >
            {alumni?.map((person, idx) => {
              const pict = getStrapiMedia(person.profpict)
              return (
                <Box
                  key={idx}
                  className={classes.cardFounder}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Box>
                    {/* eslint-disable-next-line */}
                    <img src={pict} alt="pict-profile" />
                    <Typography className={classes.name}>
                      {person.name}
                    </Typography>
                    <Typography className={classes.role}>
                      {person.role}
                    </Typography>
                    <Typography className={classes.desc}>
                      {person.desc}
                    </Typography>
                  </Box>
                  <Box className={classes.boxIcon}>
                    <>
                      {person?.sosmed?.linkedIn ? (
                        <Box style={{ marginRight: "2rem" }}>
                          <IconButton onClick={() => window.open(person?.sosmed?.linkedIn)}>
                            <IconCustom name="linkedin" color="red" />
                          </IconButton>
                        </Box>
                      ) : (
                        <></>
                      )}
                    </>
                    <>
                      {person?.sosmed?.twitter ? (
                        <Box style={{ marginRight: "2rem" }}>
                          <IconButton onClick={() => window.open(person?.sosmed?.twitter)}>
                            <IconCustom name="twitter" color="red" />
                          </IconButton>
                        </Box>
                      ) : (
                        <></>
                      )}
                    </>
                  </Box>
                </Box>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* Section 2 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.contentSection2}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography className={classes.quote}>“</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography className={classes.quotesText}>{alumniPage?.quotes}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography className={classes.quotesBy}>
            {alumniPage?.qoutesFounder}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
