import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  root: {
    background: "rgb(48,48,48)",
    height: "100%",
    // paddingBottom: "15rem",
  },
  background1: {
    position: "relative",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.up("xl")]: {
      top: "7rem",
      height: "58vh",
      width: "100vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "4rem",
      height: "130vh",
      width: "100vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "5rem",
      height: "105vh",
      width: "100vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "5rem",
      height: "105vh",
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "5rem",
      height: "105vh",
      width: "100vw",
    },
  },
  orangeBox: {
    position: "absolute",
    backgroundColor: "rgba(120,20,4,0.6)",
    [theme.breakpoints.down("xs")]: {
      right: 0,
      top: "6rem",
      height: "13rem",
      width: "50vw",
    },
    [theme.breakpoints.only("sm")]: {
      right: 0,
      top: "10rem",
      height: "13rem",
      width: "56vw",
    },
    [theme.breakpoints.only("md")]: {
      right: 0,
      top: "10rem",
      height: "15rem",
      width: "54vw",
    },
    [theme.breakpoints.only("lg")]: {
      right: 0,
      top: "15rem",
      height: "15rem",
      top: "10rem",
      width: "55vw",
    },
    [theme.breakpoints.up("xl")]: {
      right: 0,
      top: "15rem",
      top: "17vh",
      height: "15rem",
      width: "50vw",
    },
  },
  section1: {
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      top: "3.5%",
      marginInline: "5%",
      width: "90vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "6%",
      marginInline: "10%",
      width: "80vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "14rem",
      marginInline: "11%",
      width: "80vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "15rem",
      marginInline: "11%",
      width: "80vw",
    },
    [theme.breakpoints.up("xl")]: {
      top: "17rem",
      marginInline: "22%",
      width: "60vw",
    },
  },
  title1: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4rem",
      letterSpacing: "0.01rem",
      width: "80%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.0rem",
      width: "90%",
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
      lineHeight: "5rem",
      letterSpacing: "0.0rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
      fontWeight: "800",
      lineHeight: "2.5rem",
      letterSpacing: "0.0rem",
      width: "100%",
    },
  },
  subtitle1: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    // backgroundColor: "rgba(105,105,105,0.7)",
    [theme.breakpoints.up("xl")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "600",
      letterSpacing: "0rem",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "500",
      width: "99%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "500",
      width: "96%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "500",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "16px",
      fontWeight: "500",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  content1: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    // backgroundColor: "rgba(105,105,105,0.7)",
    [theme.breakpoints.up("xl")]: {
      marginTop: "5rem",
      marginLeft: "13rem",
      fontSize: "16px",
      width: "89%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "4rem",
      marginLeft: "1rem",
      fontSize: "16px",
      width: "99%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "4rem",
      marginLeft: "-3rem",
      fontSize: "16px",
      width: "96%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "4rem",
      fontSize: "16px",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "4rem",
      fontSize: "13px",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  section2: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "17vh",
      marginInline: "20%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "27vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "20vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "15vh",
      marginInline: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "15vh",
      marginInline: "5%",
    },
  },
  orangeBox2: {
    backgroundColor: "rgb(107,21,8)",
    [theme.breakpoints.up("xl")]: {
      width: "87%",
      padding: "1rem 2rem",
    },
    [theme.breakpoints.only("lg")]: {
      width: "85%",
      padding: "1rem 2rem",
    },
    [theme.breakpoints.only("md")]: {
      width: "87%",
      padding: "2rem 1rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: "87%",
      padding: "1rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      padding: "1rem 2rem",
      position: "relative",
      left: "-5%",
    },
  },
  title2: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.01rem",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "90%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0rem",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      fontWeight: "800",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
  },
  subtitle2: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "2rem",
      fontSize: "38px",
      fontWeight: "400",
      width: "84%",
      marginBottom: "2rem",
      lineHeight: "2.5rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "2rem",
      fontSize: "38px",
      fontWeight: "400",
      width: "70%",
      marginBottom: "2rem",
      lineHeight: "2.5rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "400",
      width: "96%",
      marginBottom: "2rem",
      lineHeight: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
      lineHeight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "500",
      width: "48%",
      marginBottom: "2rem",
      lineHeight: "2rem",
    },
  },
  content2: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      width: "99%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      width: "96%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      width: "90%",
      margintop: "2rem",
      marginInline: "1.5%",
    },
  },
  section3: {
    backgroundColor: "rgb(156,31,11)",
    [theme.breakpoints.up("xl")]: {
      height: "25vh",
      marginTop: "7rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "40vh",
      marginTop: "10rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "45vh",
      marginTop: "5rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "50vh",
      marginTop: "5rem",
    },

    [theme.breakpoints.down("xs")]: {
      height: "80vh",
      marginTop: "5rem",
    },
  },
  content3: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "87.5%",
      marginTop: "6rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "78%",
      marginTop: "5rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "85%",
      marginTop: "5rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "90%",
      marginTop: "5rem",
      marginInline: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "400",
      width: "85%",
      marginTop: "2.5rem",
      marginInline: "2rem",
    },
  },
  source: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "87.5%",
      marginTop: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "78%",
      marginTop: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "85%",
      marginTop: "1rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "90%",
      marginTop: "1rem",
      marginInline: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "85%",
      marginTop: "1rem",
      marginInline: "2rem",
    },
  },
  section4: {
    [theme.breakpoints.up("xl")]: {
      height: "22rem",
      bottom: "0",
      marginInline: "20%",
      marginTop: "7rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "22rem",
      bottom: "0",
      marginInline: "10%",
      marginTop: "5rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "22rem",
      bottom: "0",
      marginInline: "10%",
      marginTop: "5rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "22rem",
      bottom: "0",
      marginInline: "10%",
      marginTop: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "59rem",
      bottom: "0",
      marginInline: "10%",
      marginTop: "5rem",
    },
  },
  orangeBox4: {
    backgroundColor: "rgb(107,21,8)",
    [theme.breakpoints.up("xl")]: {
      width: "87%",
      padding: "1rem 2rem",
      marginLeft: "3rem",
    },
    [theme.breakpoints.only("lg")]: {
      width: "87%",
      padding: "1rem 2rem",
      marginLeft: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      width: "87%",
      padding: "1rem 2rem",
      marginLeft: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: "87%",
      padding: "1rem 2rem",
      marginLeft: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      padding: "1rem 2rem",
      marginTop: "2rem",
      position: "relative",
      left: "-10%",
    },
  },
  title4: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "4rem",
      letterSpacing: "0.01rem",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "90%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.0rem",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
      fontWeight: "700",
      lineHeight: "2rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
      fontWeight: "800",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
  },
  subtitle4: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "2rem",
      fontSize: "38px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
      lineHeight: "2.5rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "2rem",
      fontSize: "38px",
      fontWeight: "400",
      width: "99%",
      marginBottom: "2rem",
      lineHeight: "2.5rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "2rem",
      fontSize: "30px",
      fontWeight: "400",
      width: "96%",
      marginBottom: "2rem",
      lineHeight: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "2rem",
      fontSize: "22px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "2rem",
      lineHeight: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "22",
      fontWeight: "500",
      width: "100%",
      marginBottom: "2rem",
      lineHeight: "2rem",
    },
  },
  content4: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      width: "99%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      width: "96%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      width: "84%",
    },
  },
  section5: {
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("xl")]: {
      height: "35rem",
      marginTop: "7rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "80vh",
      marginTop: "15rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "80vh",
      marginTop: "25rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "100vh",
      marginTop: "35rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40rem",
      // marginTop: "5rem",
    },
  },
  title5: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "4rem",
      letterSpacing: "0.01rem",
      width: "100%",
      marginTop: "5rem",
      marginLeft: "65%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "38px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.01rem",
      width: "50%",
      marginTop: "5rem",
      marginLeft: "40%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "37px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.0rem",
      width: "100%",
      marginTop: "5rem",
      marginLeft: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "37px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "85%",
      marginTop: "5rem",
      marginLeft: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      fontWeight: "800",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "50%",
      marginTop: "5rem",
      marginLeft: "5%",
    },
  },
  content5: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      width: "100%",
      marginTop: "6rem",
      marginLeft: "15%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      width: "83%",
      marginTop: "5.5rem",
      marginLeft: "11%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      width: "80%",
      marginTop: "6rem",
      marginLeft: "15%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      width: "75%",
      marginTop: "6rem",
      marginLeft: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      width: "80%",
      marginTop: "1.5rem",
      marginInline: "10%",
    },
  },
  section6: {
    backgroundColor: "rgb(156,31,11)",
    [theme.breakpoints.up("xl")]: {
      height: "25vh",
    },
    [theme.breakpoints.only("lg")]: {
      height: "48vh",
    },
    [theme.breakpoints.only("md")]: {
      height: "45vh",
    },
    [theme.breakpoints.only("sm")]: {
      height: "55vh",
    },

    [theme.breakpoints.down("xs")]: {
      height: "100vh",
    },
  },
  content6: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "87.5%",
      marginTop: "6rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "78%",
      marginTop: "5rem",
      marginInline: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "85%",
      marginTop: "2rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "90%",
      marginTop: "3rem",
      marginInline: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "400",
      width: "85%",
      marginTop: "3rem",
      marginInline: "2rem",
    },
  },
  source6: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "87.5%",
      marginTop: "1rem",
      marginInline: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "78%",
      marginTop: "1rem",
      marginInline: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "100%",
      marginTop: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "90%",
      marginTop: "1rem",
      marginInline: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      fontWeight: "500",
      width: "85%",
      marginTop: "1rem",
      marginInline: "2rem",
    },
  },
}))
export default useStyles
