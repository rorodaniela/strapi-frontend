import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  root: {
    background: "rgb(41,41,41)",
    height: "100%",
    paddingBottom: "0vh",
  },
  background1: {
    position: "relative",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.up("xl")]: {
      top: "0rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "0rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "0rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "0rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "0rem",
      height: "100vh",
      width: "100vw",
    },
  },
  orangeBox: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(120,20,4,0.6)",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "9%",
      // height: "183.5vh",
      height: "100vh",
      width: "15rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "10%",
      height: "101vh",
      width: "17rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "9.5%",
      height: "100vh",
      width: "17rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: "10%",
      height: "100vh",
      width: "20vw",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "10%",
      height: "50vh",
      width: "20vw",
    },
  },
  section1: {
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      top: "20%",
      marginInline: "11.5%",
      width: "79vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "32%",
      marginInline: "15%",
      width: "72vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "31%",
      marginInline: "15%",
      width: "72vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "35%",
      marginInline: "15%",
      width: "72vw",
    },
    [theme.breakpoints.up("xl")]: {
      top: "20%",
      marginInline: "12.5%",
      width: "100%",
    },
  },
  title1: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4rem",
      letterSpacing: "0.08rem",
      width: "60%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.1rem",
      width: "87%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
  },
  content1: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "20px",
      width: "68%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "20px",
      width: "95%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "20px",
      width: "95%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "20px",
      width: "95%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "16px",
      width: "95%",
      marginBottom: "2rem",
    },
  },
  title2: {
    color: "white",
    textAlign: "center",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "48px",
      fontWeight: "800",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "48px",
      fontWeight: "800",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "48px",
      fontWeight: "800",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "48px",
      fontWeight: "800",
      width: "95%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "32px",
      fontWeight: "700",
      width: "100%",
      marginBottom: "2rem",
      lineHeight: "2rem"
    },
  },
  section2: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "5vh",
      marginInline: "25%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "10vh",
      marginInline: "17%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "9vh",
      marginInline: "15%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10vh",
      marginInline: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
  },
  gridJob: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [theme.breakpoints.up("xl")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "4rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  shortDesc: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "18px",
      fontWeight: "400",
      width: "95%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "18px",
      fontWeight: "400",
      width: "95%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
    },
  },
  jobName: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "27px",
      fontWeight: "800",
      width: "94%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "27px",
      fontWeight: "800",
      width: "100%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "27px",
      fontWeight: "800",
      width: "100%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "27px",
      fontWeight: "800",
      width: "100%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "27px",
      fontWeight: "800",
      width: "100%",
      marginBottom: "1rem",
      lineHeight: "2rem"
    },
  },
  fyi: {
    color: "rgb(234,37,5)",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
      marginTop: "3rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "18px",
      marginTop: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "18px",
      marginTop: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "18px",
      marginTop: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      marginTop: "3rem",
    },
  },
  section3: {
    backgroundSize: "cover",
    [theme.breakpoints.up("xl")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
    },
  },
  content3: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
    },
  },
  orangeBox3: {
    position: "relative",
    background: "rgb(121,17,0)",
    [theme.breakpoints.up("xl")]: {
      top: "5rem",
      right: "-30vw",
      width: "70vw",
      height: "10rem",
    },
    [theme.breakpoints.only("lg")]: {
      top: "4rem",
      right: "-30vw",
      width: "70vw",
      height: "10rem",
    },
    [theme.breakpoints.only("md")]: {
      top: "3rem",
      right: "-30vw",
      width: "70vw",
      height: "10rem",
    },
    [theme.breakpoints.only("sm")]: {
      top: "3rem",
      right: "-30vw",
      width: "70vw",
      height: "10rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "2.5rem",
      right: "-30vw",
      width: "70vw",
      height: "6rem",
    },
  },
  contentBox3: {
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.up("xl")]: {
      top: "-2rem",
      left: "-50vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-3.5rem",
      left: "-61.5vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "-4rem",
      left: "-47.5vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-5rem",
      left: "4vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-2rem",
      left: "-27vw",
    },
  },
  title3: {
    color: "white",
    textAlign: "right",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      // marginTop: "1.3rem",
      fontSize: "48px",
      fontWeight: "600",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      // marginTop: "1rem",
      fontSize: "45px",
      fontWeight: "700",
      width: "100%",
      marginBottom: "2rem",
      letterSpacing: "0rem",
    },
    [theme.breakpoints.only("md")]: {
      // marginTop: "1rem",
      fontSize: "45px",
      fontWeight: "700",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "left",
      // marginTop: "1rem",
      fontSize: "45px",
      fontWeight: "700",
      width: "50%",
      marginBottom: "2rem",
      lineHeight: "3rem"
    },
    [theme.breakpoints.down("xs")]: {
      // marginTop: "1rem",
      fontSize: "32px",
      fontWeight: "700",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  gridJobAvailable: {
    [theme.breakpoints.up("xl")]: {
      paddingInline: "29%",
      paddingTop: "4rem",
    },
    [theme.breakpoints.only("lg")]: {
      paddingInline: "12%",
      paddingTop: "4rem",
    },
    [theme.breakpoints.only("md")]: {
      paddingInline: "10%",
      paddingTop: "4rem",
    },
    [theme.breakpoints.only("sm")]: {
      paddingInline: "5%",
      paddingTop: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingInline: "5%",
      paddingTop: "4rem",
    },
  },
  gridCountry: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "4rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginBottom: "5rem",
    },
    [theme.breakpoints.only("md")]: {
      marginBottom: "5rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginBottom: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5rem",
    },
  },
  cardJob: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("xl")]: {
      marginTop: "-1rem",
    },
  },
  country: {
    color: "white",
    textAlign: "left",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      // marginTop: "1.3rem",
      fontSize: "18px",
      fontWeight: "400",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      // marginTop: "1rem",
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      // marginTop: "1rem",
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      // marginTop: "1rem",
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      // marginTop: "1rem",
      fontSize: "18px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  jobAvailable: {
    color: "white",
    textAlign: "left",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "26px",
      fontWeight: "600",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "26px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "26px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "26px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
      fontWeight: "600",
      width: "80%",
      marginBottom: "0.5rem",
      lineHeight: "2rem"
    },
  },
  learnMoreBtn: {
    textTransform: "none",
    backgroundColor: "rgb(121,17,0)",
    borderRadius: "0px",
    color: "white",
    [theme.breakpoints.up("xl")]: {
      maxHeight: "3vh",
      minHeight: "3vh",
      maxWidth: "5vw",
      minWidth: "5vw",
      fontSize: "14px",
    },
    [theme.breakpoints.only("lg")]: {
      maxHeight: "5vh",
      minHeight: "5vh",
      maxWidth: "8vw",
      minWidth: "8vw",
      fontSize: "12px",
    },
    [theme.breakpoints.only("md")]: {
      maxHeight: "5vh",
      minHeight: "5vh",
      maxWidth: "10vw",
      minWidth: "10vw",
      fontSize: "12px",
    },
    [theme.breakpoints.only("sm")]: {
      maxHeight: "5vh",
      minHeight: "5vh",
      maxWidth: "14vw",
      minWidth: "14vw",
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "5vh",
      minHeight: "5vh",
      maxWidth: "23vw",
      minWidth: "23vw",
      fontSize: "12px",
    },
  },
}))
export default useStyles
