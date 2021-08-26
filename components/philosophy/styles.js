import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(41,41,41)",
    height: "100%",
    paddingBottom: "10rem",
  },
  background: {
    position: "relative",
    backgroundSize: "cover",
    [theme.breakpoints.up("xl")]: {
      top: "7rem",
      height: "85vh",
      width: "80vw",
      right: "-20vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "5rem",
      height: "135vh",
      width: "80vw",
      right: "-20vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "5rem",
      height: "130vh",
      width: "85vw",
      right: "-17vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "5rem",
      // height: '100vh',
      width: "80vw",
      height: "190vh",
      right: "-20vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "5rem",
      // height: '100vh',
      width: "85vw",
      height: "196vh",
      backgroundSize: "fill",
      // height: "170vh",
      right: "-15vw",
    },
  },
  orangeBox: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(120,17,4,0.6)",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "9%",
      // height: "183.5vh",
      height: "208.5vh",
      width: "15rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "10%",
      height: "183.5vh",
      width: "17rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "9.5%",
      height: "114.5vh",
      width: "17rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: "10%",
      height: "137vh",
      width: "20vw",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "10%",
      height: "85vh",
      width: "20vw",
    },
  },
  home1: {
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      top: "4.5%",
      left: "11vw",
      width: "80vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "6.5%",
      left: "15vw",
      width: "65vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "7%",
      left: "14.5vw",
      width: "55vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "12%",
      left: "14.5vw",
      width: "60vw",
    },
    [theme.breakpoints.up("xl")]: {
      top: "10%",
      left: "14vw",
      width: "60vw",
    },
  },
  title1: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "70px",
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
      lineHeight: "4.5rem",
      letterSpacing: "0.1rem",
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
  },
  subtitle1: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    // whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "22px",
      fontWeight: "900",
      width: "55%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "400",
      width: "75%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "400",
      width: "80%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "16px",
      fontWeight: "400",
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "3rem",
      fontSize: "16px",
      fontWeight: "400",
      width: "100%",
    },
  },
  content1: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      marginTop: "10rem",
      fontSize: "14px",
      width: "87%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "5rem",
      fontSize: "14px",
      width: "120%",
      lineHeight: "1.54em",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "2rem",
      fontSize: "12px",
      width: "124%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "5rem",
      fontSize: "14px",
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "14px",
      width: "100%",
    },
  },
  background2: {
    backgroundSize: "cover",
    display: "flex",
    [theme.breakpoints.up("xl")]: {
      marginTop: "15rem",
      width: "80vw",
      height: "80vh",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "5rem",
      width: "100vw",
      height: "120vh",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10rem",
      width: "100vw",
      height: "100vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10rem",
      width: "100vw",
      height: "125vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10rem",
      width: "100vw",
      height: "170vh",
    },
  },
  orangeBox2: {
    position: "relative",
    right: 0,
    backgroundColor: "rgba(120,31,17,1)",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
      marginTop: "10%",
      width: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "70%",
      marginTop: "10%",
      width: "1.5rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "80%",
      marginTop: "7%",
      width: "1.5rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "70%",
      marginTop: "8%",
      width: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: '6%',
      height: "71%",
      width: "2.5rem",
    },
  },
  gridSection2: {
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      justifyContent: "center"
    },

  },
  section2: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "14%",
      marginLeft: "8%",
      marginRight: "2%",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "13%",
      marginLeft: "10%",
      marginRight: "3%",
      width: "33%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10%",
      marginLeft: "8%",
      marginRight: "3%",
      width: "34%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "7%",
      marginLeft: "10%",
      marginRight: "2%",
      width: "34%",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "7%",
      marginLeft: "13%",
      marginRight: "2%",
      width: "32%",
    }
  },
  title2: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.01rem",
      width: "60%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.01rem",
      width: "95%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "2rem",
      letterSpacing: "0.01rem",
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "2rem",
      letterSpacing: "0.01rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "2rem",
      letterSpacing: "0.01rem",
      width: "100%",
    },
  },
  subtitle2: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    // whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      marginTop: "2rem",
      fontSize: "16px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "2.5rem",
      fontSize: "16px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "2rem",
      fontSize: "16px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "16px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "3rem",
      fontSize: "12px",
      fontWeight: "500",
      width: "100%",
    },
  },
  footer2: {
    color: "white",
    fontFamily: ["Inter", "-apple-system"],
    // whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      marginTop: "22rem",
      fontSize: "14px",
      fontWeight: "300",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "20rem",
      fontSize: "14px",
      fontWeight: "300",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10rem",
      fontSize: "14px",
      fontWeight: "300",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "6rem",
      fontSize: "14px",
      fontWeight: "300",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "14rem",
      fontSize: "12px",
      fontWeight: "300",
      width: "100%",
    },
  },
  orangeBox3xs: {
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "rgba(156,31,11,0.8)",
      position: "relative",
      top: "-30%",
      width: '100%',
      height: "34",
      marginTop: "40%",
      padding: '1rem 1rem',
    },
  },
  orangeBox3: {
    backgroundColor: "rgba(156,31,11,0.8)",
    [theme.breakpoints.up("xl")]: {
      width: '45%',
      height: "55%",
      marginTop: "15%",
      padding: '2rem 2rem',
    },
    [theme.breakpoints.only("lg")]: {
      width: '40%',
      padding: '1.5rem 2rem',
      height: "65%",
      marginTop: "15%"
    },
    [theme.breakpoints.only("md")]: {
      width: '48%',
      height: "70%",
      marginTop: "13%",
      padding: '1.5rem 2rem',

    },
    [theme.breakpoints.only("sm")]: {
      width: '48%',
      minHeight: "63%",
      maxHeight: "75%",
      marginTop: "13%",
      padding: '1.5rem 1.5rem',
    },
    [theme.breakpoints.down("xs")]: {
      display: 'none',
      // width: '48%',
      // height: "70%",
      // marginTop: "13%",
      // padding: '1.5rem 2rem',
    },

  },
  content2: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "14px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "12px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "12px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: "500",
      width: "100%",
    },
  },
  section3: {
    backgroundColor: "rgb(156,31,11)",
    [theme.breakpoints.up("xl")]: {
      padding: '6rem 8rem',
      height: "25vh",
      marginTop: '7rem'
    },
    [theme.breakpoints.only("lg")]: {
      padding: '6rem 2rem',
      height: "40vh",
      // marginTop: '7rem'
    },
    [theme.breakpoints.only("md")]: {
      padding: '5rem 3rem',
      height: "45vh",
      // marginTop: '7rem'
    },
    [theme.breakpoints.only("sm")]: {
      padding: '5rem 2rem',
      height: "50vh",
      // marginTop: '7rem'
    },

    [theme.breakpoints.down("xs")]: {
      padding: '7rem 2rem',
      height: "95vh",
      marginTop: "-130%"
      // marginTop: '7rem'
    },
  },
  content3: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: 'center',
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "87.5%",
      padding: '1.5rem 2rem'
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
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "400",
      width: "100%",
    },
  },
  section4: {
    [theme.breakpoints.up("xl")]: {
      padding: '2rem 2rem'
    },
    [theme.breakpoints.only("lg")]: {
      padding: '2rem 2rem'
    },
    [theme.breakpoints.only("md")]: {
      padding: '5rem 2rem'
    },
    [theme.breakpoints.only("sm")]: {
      padding: '2rem 2rem'
    },
    [theme.breakpoints.down("xs")]: {
      padding: '2rem 2rem'
    },
  },
  content4: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: 'center',
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "400",
      width: "78%",
      padding: '1.5rem 2rem'
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
      width: "97%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "400",
      width: "100%",
    },
  },
  quote: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: 'center',
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
  quotesBy: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: 'center',
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      fontWeight: "600",
      padding: '1.5rem 2rem'
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "600",
      padding: '1.5rem 2rem'
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "600",
      width: "80%",
      padding: '1.5rem 2rem'
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "16px",
      fontWeight: "600",
      padding: '1.5rem 2rem'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: "600",
      padding: '1.5rem 2rem'
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
  }
}))
export default useStyles
