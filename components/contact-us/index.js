import { Box, Typography, Grid, Button, TextField, IconButton } from "@material-ui/core"
import useStyles from "./styles"
import IconCustom from "../../src/icons";
import { useSpring, animated } from "react-spring"
import { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { getStrapiMedia } from "../../lib/media"
import { useDispatch } from "react-redux"
import { contactPost } from "../../redux/actions/contact.actions"
import Swal from "sweetalert2"
// import Map from "../Map"

function Content({ contactUs, image, office }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
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
    setForm({...form, [name]: value})
    
  }

  const submitForm = () => {
    dispatch(contactPost(form))
    Swal.fire("Sent Successfully!", "Thank you for sending us your message", "success")
  }

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
          <animated.div className={classes.box} style={floatInRight}>
            <Typography className={classes.title1}>
              {contactUs?.title}
            </Typography>
          </animated.div>
          <animated.div className={classes.box} style={floatInRight}>
            <Typography className={classes.content1}>
              {contactUs?.content1}
            </Typography>
          </animated.div>
          <animated.div style={floatInLeft} className={classes.boxForm}>
            <Grid container spacing={2} className={classes.gridForm}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  required
                  onChange={(e) => handleOnChange(e)}
                  fullWidth
                  variant="outlined"
                  placeholder="Company Name"
                  name="company"
                  value={form.company}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  required
                  onChange={(e) => handleOnChange(e)}
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={5}
                  placeholder="Message"
                  name="message"
                  value={form.name}
                />
              </Grid>
            </Grid>
          </animated.div>
          <animated.div className={classes.box} style={floatInLeft}>
            <Button
              className={classes.btnSend}
              variant="contained"
              color="secondary"
              onClick={submitForm}
            >
              SEND
            </Button>
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
          data-aos-duration="1000"
        >
          <Typography className={classes.subtitle}>
            {contactUs?.title2}
          </Typography>
        </Grid>
        {office?.map((office) => {
          const countryFlag = getStrapiMedia(office?.logo)
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              className={classes.gridOffices}
              key={office.id}
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              {/* eslint-disable-next-line */}
              <img
                src={countryFlag}
                className={classes.countryFlag}
                alt="country-flag"
              />
              <Typography className={classes.officeName}>
                {office?.name}
              </Typography>
              <Typography className={classes.address} size={"600x600"}>
                {office?.address}
              </Typography>
              {/* eslint-disable-next-line */}
              <iframe
                src={office?.embedMap}
                width="250"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              {/* <Map location={""} color="red" label={office?.name} /> */}
            </Grid>
          )
        })}
      </Grid>
      {/* Section 3 */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.section3}
      >
        <Grid
          item
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <Typography className={classes.subtitle}>
            {contactUs?.title3}
          </Typography>
        </Grid>
        <Grid
          item
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <Typography className={classes.content3}>
            {contactUs?.content3}
          </Typography>
        </Grid>
        <Grid
          item
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          {/* <Box className={classes.iconBox}> */}
          <IconButton href={contactUs?.sosmed?.linkedIn}>
            <IconCustom
              name="linkedin"
              color="#2963A4"
              size={"40px"}
              className={classes.iconBox}
            />
          </IconButton>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
