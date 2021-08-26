import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  root: {
    background: "rgb(41,41,41)",
    height: "100%",
    paddingBottom: "15vh",
  },
  background: {
    position: "relative",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.up("xl")]: {
      top: "7rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "4rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "5rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "5rem",
      height: "100vh",
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "5rem",
      height: "145vh",
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
      height: "158vh",
      width: "15rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "10%",
      height: "113vh",
      width: "17rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "9.5%",
      height: "112.5vh",
      width: "17rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: "10%",
      height: "109vh",
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
      top: "7%",
      marginInline: "11.5%",
      width: "77vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "7%",
      marginInline: "14%",
      width: "72vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "6%",
      marginInline: "14%",
      width: "72vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "8%",
      marginInline: "14%",
      width: "72vw",
    },
    [theme.breakpoints.up("xl")]: {
      top: "25%",
      marginInline: "20%",
      width: "60vw",
    },
  },
  title1: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "4rem",
      letterSpacing: "0.08rem",
      width: "60%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.1rem",
      width: "87%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.1rem",
      width: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
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
      fontSize: "17px",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "17px",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "17px",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "17px",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "16px",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  btnSend: {
    backgroundColor: "rgb(121,17,0)",
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      marginTop: "5vh",
      maxHeight: "5vh",
      minHeight: "5vh",
      maxWidth: "20vw",
      minWidth: "20vw",
      fontSize: "16px",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "7vh",
      maxWidth: "35vw",
      minWidth: "35vw",
      maxHeight: "7vh",
      minHeight: "7vh",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "7vh",
      maxHeight: "7vh",
      minHeight: "7vh",
      maxWidth: "35vw",
      minWidth: "35vw",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "7vh",
      maxHeight: "7vh",
      minHeight: "7vh",
      maxWidth: "45vw",
      minWidth: "45vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4vw",
      marginTop: "7vh",
      maxHeight: "9vh",
      minHeight: "9vh",
      maxWidth: "77vw",
      minWidth: "77vw",
    },
  },
  boxForm: {
    [theme.breakpoints.down("xs")]: {
      width: "77vw",
    },
    [theme.breakpoints.only("sm")]: {
      width: "72vw",
    },
    [theme.breakpoints.only("md")]: {
      width: "72vw",
    },
    [theme.breakpoints.only("lg")]: {
      width: "72vw",
    },
    [theme.breakpoints.up("xl")]: {
      width: "60vw",
    },
  },
  gridForm: {
    [theme.breakpoints.up("xl")]: {
      width: "94%",
    },
    [theme.breakpoints.only("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  subtitle: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "29px",
      fontWeight: "600",
      width: "94%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "29px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "29px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "29px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "29px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "2rem",
    },
  },
  section2: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
  },
  gridOffices: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  address: {
    color: "white",
    whiteSpace: "pre-line",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "1rem"
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "1rem"
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "1rem"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "1rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
      marginBottom: "1rem"
    },
  },
  officeName: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "20px",
      fontWeight: "600",
      width: "94%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "600",
      width: "100%",
      marginBottom: "1rem",
    },
  },
  countryFlag: {
    [theme.breakpoints.up("xl")]: {
      width: "200px",
    },
    [theme.breakpoints.only("lg")]: {
      width: "200px",
    },
    [theme.breakpoints.only("md")]: {
      width: "200px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "200px",
    },
  },
  section3: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10vh",
      marginInline: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
      marginInline: "10%",
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
  iconBox: {
    backgroundColor: "white",
    fontSize: "500px",
  },
}))
export default useStyles
