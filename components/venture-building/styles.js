import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  root: {
    background: "rgb(48,48,48)",
    height: "100%",
    paddingBottom: "15rem",
  },
  background: {
    position: "relative",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    [theme.breakpoints.up("xl")]: {
      top: "7rem",
      right: "-20vw",
      height: "80vh",
      width: "80vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "4rem",
      right: "-20vw",
      height: "130vh",
      width: "80vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "5rem",
      right: "-20vw",
      height: "140vh",
      width: "80vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "5rem",
      right: "-20vw",
      height: "170vh",
      width: "80vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "5rem",
      right: "-20vw",
      height: "245vh",
      width: "80vw",
    },
  },
  orangeBox: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(120,20,4,0.6)",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "9%",
      // height: "183.5vh",
      height: "150vh",
      width: "15rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "10%",
      height: "120vh",
      width: "17rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "9.5%",
      height: "125vh",
      width: "17rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: "10%",
      height: "118vh",
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
      top: "3.5%",
      marginInline: "11.5%",
      width: "77vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "7%",
      marginInline: "15%",
      width: "80vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "10%",
      marginInline: "14%",
      width: "80vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "10%",
      marginInline: "14%",
      width: "80vw",
    },
    [theme.breakpoints.up("xl")]: {
      top: "9%",
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
      letterSpacing: "0.08rem",
      width: "80%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.1rem",
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
      letterSpacing: "0.1rem",
      width: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      fontWeight: "800",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "90%",
    },
  },
  content1: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    // backgroundColor: "rgba(105,105,105,0.7)",
    [theme.breakpoints.up("xl")]: {
      marginTop: "5rem",
      marginLeft: "5rem",
      fontSize: "14px",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "4rem",
      marginLeft: "1rem",
      fontSize: "14px",
      width: "99%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "4rem",
      marginLeft: "1rem",
      fontSize: "14px",
      width: "96%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "4rem",
      fontSize: "14px",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "4rem",
      fontSize: "14px",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  section2: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "15vh",
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
      marginInline: "10%",
    },
  },
  diagram: {
    [theme.breakpoints.up("xl")]: {
      width: "1600",
      height: "727",
    },
    [theme.breakpoints.only("lg")]: {
      width: "1600",
      height: "727",
    },
    [theme.breakpoints.only("md")]: {
      width: "1600",
      height: "727",
    },
    [theme.breakpoints.only("sm")]: {
      width: "1600",
      height: "727",
    },
    [theme.breakpoints.down("xs")]: {
      width: "1600",
      height: "727",
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
      height: "95vh",
      marginTop: "5rem",

      // marginTop: "-130%",
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
      margin: "6rem 3rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "78%",
      margin: "5rem 2rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "85%",
      margin: "5rem 2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "90%",
      margin: "5rem 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "400",
      width: "85%",
      margin: "4rem 2rem",
    },
  },
  section4: {
    [theme.breakpoints.up("xl")]: {
      height: "22rem",
      bottom: "0",
    },
    [theme.breakpoints.only("lg")]: {
      height: "22rem",
      bottom: "0",
      marginTop: "5rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "22rem",
      bottom: "0",
      marginTop: "5rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "22rem",
      bottom: "0",
      marginTop: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25rem",
      bottom: "0",
      marginTop: "5rem",
    },
  },
  quote: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "100px",
      fontWeight: "800",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "68px",
      fontWeight: "800",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "68px",
      fontWeight: "800",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "68px",
      fontWeight: "800",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "68px",
      fontWeight: "800",
    },
  },
  quotesText: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "78%",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "75%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "80%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "400",
      width: "85%",
    },
  },
  quotesBy: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "600",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "600",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "600",
      width: "80%",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "600",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: "600",
      padding: "1.5rem 2rem",
    },
  },
  btnContact: {
    textTransform: "none",
    backgroundColor: "rgb(121,17,0)",
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      marginTop: "5vh",
      maxHeight: "5vh",
      minHeight: "5vh",
      maxWidth: "10vw",
      minWidth: "10vw",
      fontSize: "16px",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "7vh",
      maxWidth: "20vw",
      minWidth: "20vw",
      maxHeight: "8vh",
      minHeight: "8vh",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "7vh",
      maxHeight: "7vh",
      minHeight: "7vh",
      maxWidth: "25vw",
      minWidth: "25vw",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "7vh",
      maxHeight: "7vh",
      minHeight: "7vh",
      maxWidth: "30vw",
      minWidth: "30vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4vw",
      marginTop: "7vh",
      maxHeight: "9vh",
      minHeight: "9vh",
      maxWidth: "60vw",
      minWidth: "60vw",
    },
  },
}))
export default useStyles
