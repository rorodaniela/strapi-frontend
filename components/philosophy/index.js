import { Box, Button, Typography, Grid } from "@material-ui/core"
import useStyles from "./styles"

function Content({ philosophy, image }) {
  console.log("ini image : ", image);
  const classes = useStyles()

  return (
    <Grid container spacing={0} className={classes.root}>
      {/* Section 1 */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div
          style={{ backgroundImage: `url(${image?.background1})` }}
          className={classes.background}
        />
        <Box className={classes.orangeBox} />
        <Box className={classes.home1}>
          <Typography className={classes.title1}>
            {philosophy?.title}
          </Typography>
          <Typography className={classes.subtitle1}>
            {`"${philosophy?.subtitle}"`}
          </Typography>
          <Typography className={classes.content1}>
            {philosophy?.content1}
          </Typography>
        </Box>
      </Grid>
      {/* Section 2 */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridSection2}>
        <div
          style={{ backgroundImage: `url(${image?.background2})` }}
          className={classes.background2}
        >
          <Box className={classes.orangeBox2}/>
          <Box className={classes.section2}>
            <Typography className={classes.title2}>{philosophy?.title2?.toUpperCase()}</Typography>
            <Typography className={classes.subtitle2}>{philosophy?.subtitle2}</Typography>
            <Typography className={classes.footer2}><i>{philosophy?.footer2}</i></Typography>
          </Box>
          <Box className={classes.orangeBox3}>
            <Typography className={classes.content2}>{philosophy?.content2}</Typography>
          </Box>
        </div>
        <Box className={classes.orangeBox3xs}>
          <Typography className={classes.content2}>{philosophy?.content2}</Typography>
        </Box>
      </Grid>
      {/* Section 3 */}
      <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} className={classes.section3}>
        {
          philosophy?.need?.need?.map( (item, idx)=> {
            return (
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={idx}>
                <Typography className={classes.content3}>{item}</Typography>
              </Grid>
            )
          })
        }
      </Grid>
      {/* Section 4 */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.section4}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Typography className={classes.quote}>“</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Typography className={classes.content4}>{philosophy?.quotes}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Typography className={classes.quotesBy}>{philosophy?.quotesFounder}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Button 
            className={classes.btnContact}
            variant="contained"
            color="secondary"
          >Contact Us</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
