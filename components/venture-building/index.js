import { Box, Typography, Grid, Button, TextField } from "@material-ui/core"
import useStyles from "./styles"
import { useSpring, animated } from "react-spring"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Content({ ventureBuilding, image }) {
  const classes = useStyles()

  const floatInLeftToRight = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: -1000 },
  })

  const floatInRightToLeft = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: 1000 },
  })

  const floatInBottomToTop = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: 1000 },
  })

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <Grid container spacing={2} className={classes.root}>
      {/* Section 1 */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          style={{ backgroundImage: `url(${image?.background})` }}
          className={classes.background}
        />
        <Box className={classes.orangeBox} />
        <Box className={classes.section1}>
          <animated.div className={classes.box} style={floatInLeftToRight}>
            <Typography className={classes.title1}>
              {ventureBuilding?.name}
            </Typography>
          </animated.div>
          <animated.div className={classes.box} style={floatInBottomToTop}>
            <Typography className={classes.content1}>
              {ventureBuilding?.content}
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
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {/* eslint-disable-next-line */}
          <img src={image?.diagram} alt="diagram" className={classes.diagram} />
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
        {ventureBuilding?.need?.need?.map((item, idx) => {
          return (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={idx}>
              <Typography className={classes.content3}>{item}</Typography>
            </Grid>
          )
        })}
      </Grid>
      {/* Section 4 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section4}
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
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
          <Typography className={classes.quotesText}>
            {ventureBuilding?.quotes}
          </Typography>
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
            {ventureBuilding?.quotesFounder}
          </Typography>
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
          <Button
            className={classes.btnContact}
            variant="contained"
            color="secondary"
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
