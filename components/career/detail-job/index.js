import { Box, Typography, Grid, Button, TextField } from "@material-ui/core"
import useStyles from "./styles"
import { useSpring, animated } from "react-spring"
import { useEffect, useState} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
// import {useRouter} from "next/router"
import { applicantPost } from "../../../redux/actions/applicant.actions"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"

const desc = [
  {subtitle: "subtitle1", content: "longDesc1"},
  {subtitle: "subtitle2", content: "longDesc2"},
  {subtitle: "subtitle3", content: "longDesc3"},
  {subtitle: "subtitle4", content: "longDesc4"},
  {subtitle: "subtitle5", content: "longDesc5"},
  {subtitle: "subtitle6", content: "longDesc6"},
]

function Content({ image, office, jobOpportunities, careerDetail }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  // const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null
  })

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

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({ ...form, [name]: value })
  }

  const submitForm = () => {
    let fileData = new FormData()
    fileData.append("cv", form.cv)

    const data = {
      // name: form.name,
      // phone: form.phone,
      // email: form.email,
      fileData,
    }

    dispatch(applicantPost(data))
  }

  const handleOnchangeFile = (e) => {
    // console.log("ini target : ", e.target.files[0])
    const value = e.target.files[0]
    setForm({...form, cv: value})
    Swal(
      "Sent Successfully!",
      "We will contact you soon",
      "success"
    )
    
  }

  // const goDetail = (office, job) => {
  //   router.push(`/career/${job.id}/country/${office.id}`)
  // }

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
            <Typography className={classes.title1}>
              {jobOpportunities?.shortName?.length > 0
                ? jobOpportunities?.shortName
                : jobOpportunities?.longName}
            </Typography>
          </animated.div>
          <animated.div className={classes.box} style={floatInLeft}>
            <Typography className={classes.content1}>
              Location : {office?.country}
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
        <Grid item spacing={2} xs={12} sm={12} md={12} lg={12} xl={12}>
          <animated.div className={classes.box} style={floatInRight}>
            <Typography className={classes.title2}>
              {careerDetail?.title2}
            </Typography>
          </animated.div>
        </Grid>
        {desc.map((item, idx) => {
          return (
            <Grid
              item
              spacing={2}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={classes.cardDetail}
              key={idx}
            >
              <animated.div className={classes.box} style={floatInLeft}>
                <Typography className={classes.subtitle2}>
                  {careerDetail?.[item.subtitle]}
                </Typography>
                <Typography className={classes.content2}>
                  {jobOpportunities?.[item.content]}
                </Typography>
              </animated.div>
            </Grid>
          )
        })}
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
        className={classes.section3}
      >
        <Box className={classes.orangeBox3}>
          <Typography className={classes.title3}>
            {careerDetail?.title3}
          </Typography>
          <Typography className={classes.content3}>
            {careerDetail?.content3}
          </Typography>
          <Button variant="contained" className={classes.assessmentBtn}>
            Click here
          </Button>
        </Box>
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
        style={{
          backgroundImage: `url(${image?.background2})`,
          backgroundSize: "cover",
        }}
      >
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
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Typography className={classes.title4}>
              {careerDetail?.title4}
            </Typography>
          </Grid>
          {/* Form */}
          <Grid
            item
            container
            spacing={0}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                required
                onChange={(e) => handleOnChange(e)}
                fullWidth
                variant="outlined"
                placeholder="Name"
                name="name"
                value={form.name}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                required
                onChange={(e) => handleOnChange(e)}
                fullWidth
                variant="outlined"
                placeholder="Email"
                name="email"
                value={form.email}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                required
                onChange={(e) => handleOnChange(e)}
                fullWidth
                variant="outlined"
                placeholder="Phone"
                name="phone"
                value={form.phone}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.content4}>
              Please attach your cover letter & CV
            </Typography>
            {/* eslint-disable-next-line */}
            <form>
              {/* eslint-disable-next-line */}
              <input
                type="file"
                onChange={(e) => handleOnchangeFile(e)}
                style={{ color: "white" }}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button
              onClick={submitForm}
              variant="contained"
              className={classes.submitBtn}
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
