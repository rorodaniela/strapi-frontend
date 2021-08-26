import { Box, Typography, Grid, Button } from "@material-ui/core"
import useStyles from "./styles"
import { useSpring, animated } from "react-spring"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Content({ cvcService, image }) {
  const classes = useStyles()
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

  return (
    <Grid container spacing={2} className={classes.root}>
      {/* Section 1 */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          style={{ backgroundImage: `url(${image?.background1})` }}
          className={classes.background1}
        />
        <animated.div style={floatInLeft} className={classes.orangeBox} />
        <Box className={classes.section1}>
          <animated.div className={classes.box} style={floatInRight}>
            <Typography className={classes.title1}>
              {cvcService?.title1}
            </Typography>
            <Typography className={classes.subtitle1}>
              {cvcService?.subtitle1}
            </Typography>
          </animated.div>
          <animated.div className={classes.box} style={floatInLeft}>
            <Typography className={classes.content1}>
              {cvcService?.content1}
            </Typography>
          </animated.div>
        </Box>
      </Grid>
      {/* Section 2 */}
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section2}
      >
        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
          <animated.div className={classes.orangeBox2} style={floatInRight}>
            <Typography className={classes.title2}>
              {cvcService?.title2}
            </Typography>
            <Typography className={classes.subtitle2}>
              {cvcService?.subtitle2}
            </Typography>
            <hr style={{ backgroundColor: "white" }} />
          </animated.div>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <animated.div className={classes.box} style={floatInLeft}>
            <Typography className={classes.content2}>
              {cvcService?.content2}
            </Typography>
          </animated.div>
        </Grid>
      </Grid>
      {/* Section 3 */}
      <Grid
        item
        container
        spacing={1}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section3}
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {cvcService?.need?.need?.map((item, idx) => {
          return (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={idx}>
              <Typography className={classes.content3}>
                {item.content}
              </Typography>
              <Typography className={classes.source}>{item.source}</Typography>
            </Grid>
          )
        })}
      </Grid>
      {/* Section 4 */}
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section4}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <Typography className={classes.content4}>
            {cvcService?.content3}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <Box className={classes.orangeBox4}>
            <Typography className={classes.title4}>
              {cvcService?.title3}
            </Typography>
            <Typography className={classes.subtitle4}>
              {cvcService?.subtitle3}
            </Typography>
            <hr style={{ backgroundColor: "white" }} />
          </Box>
        </Grid>
      </Grid>
      {/* Section 5 */}
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section5}
        style={{ backgroundImage: `url(${image.background2})` }}
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Typography className={classes.title5}>
            {cvcService?.title4}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <Typography className={classes.content5}>
            {cvcService?.content4}
          </Typography>
        </Grid>
      </Grid>
      {/* Section 6 */}
      <Grid
        item
        container
        spacing={1}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section6}
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {cvcService?.need2?.need?.map((item, idx) => {
          return (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={idx}>
              <Typography className={classes.content6}>
                {item.content}
              </Typography>
              <Typography className={classes.source6}>{item.source}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default Content
