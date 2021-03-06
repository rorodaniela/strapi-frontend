import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  hompage: {
    background: "rgb(41,41,41)",
    height: "100%",
  },
  background: {
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  orangeBox: {
    top: 0,
    backgroundColor: "rgba(120,17,4,0.8)",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "9%",
      height: "99vh",
      width: "15rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "10%",
      height: "99vh",
      width: "17rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "9.5%",
      height: "99.5vh",
      width: "17rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: "10%",
      height: "99.5vh",
      width: "20vw",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "10%",
      height: "99.5vh",
      width: "20vw",
    },
  },
  line: {
    display: "flex",
    justifyContent: "center",
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
      top: "5.5%",
      left: "14.5vw",
      width: "55vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "7%",
      left: "14.5vw",
      width: "60vw",
    },
    [theme.breakpoints.up("xl")]: {
      top: "3.5%",
      left: "14vw",
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
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.1rem",
      width: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "2.5rem",
      letterSpacing: "0.1rem",
      width: "100%",
    },
  },
  content1: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "1.3rem",
      fontSize: "18px",
      width: "55%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      fontSize: "18px",
      width: "60%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      fontSize: "18px",
      width: "80%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      fontSize: "16px",
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      fontSize: "16px",
      width: "90%",
    },
  },
  home2: {
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      paddingTop: "10vh",
      paddingLeft: "15vw",
      width: "47vw",
      lineHeight: "0.1",
    },
    [theme.breakpoints.only("lg")]: {
      paddingTop: "10vh",
      paddingLeft: "15vw",
      width: "47vw",
      lineHeight: "0.1",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "14vh",
      paddingLeft: "15vw",
      width: "45vw",
      lineHeight: "0.1",
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: "20vh",
      paddingLeft: "14vw",
      width: "45vw",
      lineHeight: "0.1",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "9.5vh",
      paddingLeft: "8vw",
      width: "78%",
      lineHeight: "0.1",
    },
  },
  orangeBox2: {
    position: "relative",
    backgroundColor: "rgba(162,31,7,0.4)",
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
    [theme.breakpoints.only("lg")]: {
      top: 5,
      right: "-85%",
      zIndex: 1,
      width: "5rem",
      height: "40vh",
    },
    [theme.breakpoints.only("md")]: {
      top: 5,
      right: "-65%",
      zIndex: 1,
      width: "5rem",
      height: "40vh",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image2: {
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      height: "70vh",
      top: "12%",
      right: "-50%",
      width: "25vw",
      height: "55vh",
    },
    [theme.breakpoints.only("lg")]: {
      height: "85vh",
      top: "-25%",
      right: "-20%",
      width: "40vw",
    },
    [theme.breakpoints.only("md")]: {
      height: "75vh",
      top: "-23%",
      right: "-10%",
      width: "45vw",
    },
    [theme.breakpoints.only("sm")]: {
      height: "65vh",
      top: "20%",
      right: "-16%",
      width: "42vw",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  boxTitle2: {
    width: "35%",
    [theme.breakpoints.up("xl")]: {
      width: "35%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "50%",
    },
  },
  title2: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "7vh",
      letterSpacing: "0.1rem",
      width: "70%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
      width: "70%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      fontWeight: "900",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
      width: "80%",
    },
  },
  content2: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "0.5rem",
      width: "82%",
      fontSize: "18px",
      fontWeight: "50",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1rem",
      width: "90%",
      fontSize: "18px",
      fontWeight: "50",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
      width: "82%",
      fontSize: "18px",
      fontWeight: "50",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1rem",
      width: "95%",
      fontSize: "16px",
      fontWeight: "50",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
      width: "100%",
      fontSize: "16px",
      fontWeight: "50",
    },
  },
  readMoreBtn: {
    textTransform: "none",
    backgroundColor: "rgb(121,17,0)",
    [theme.breakpoints.up("xl")]: {
      marginTop: "2.5rem",
      marginBottom: "5rem",
      maxWidth: "10vw",
      maxHeight: "7vh",
      minWidth: "10vw",
      minHeight: "7vh",
      borderRadius: "10px",
      fontSize: "0.8vw",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "2rem",
      marginBottom: "5rem",
      maxWidth: "12vw",
      maxHeight: "7vh",
      minWidth: "12vw",
      minHeight: "7vh",
      borderRadius: "10px",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "2rem",
      marginBottom: "8rem",
      maxWidth: "15vw",
      maxHeight: "8.5vh",
      minWidth: "15vw",
      minHeight: "8.5vh",
      borderRadius: "10px",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "2rem",
      marginBottom: "8rem",
      maxWidth: "17vw",
      maxHeight: "8.5vh",
      minWidth: "17vw",
      minHeight: "8.5vh",
      borderRadius: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5vw",
      marginTop: "2rem",
      marginBottom: "8rem",
      maxWidth: "37vw",
      maxHeight: "6vh",
      minWidth: "37vw",
      minHeight: "6vh",
      borderRadius: "10px",
    },
  },
  image3: {
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      top: "0",
      left: 0,
      width: "25vw",
      height: "100vh",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-25%",
      left: 0,
      width: "25vw",
      height: "95vh",
    },
    [theme.breakpoints.only("md")]: {
      top: "-25%",
      left: 0,
      width: "25vw",
      height: "95vh",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-5%",
      left: 0,
      width: "30vw",
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  home3: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "25vh",
      paddingLeft: "5vw",
    },
    [theme.breakpoints.only("lg")]: {
      position: "relative",
      top: "-16vh",
      left: "-4vw",
      // marginInline: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      position: "relative",
      top: "-16vh",
      left: "-4vw",
      // marginInline: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      position: "relative",
      top: "5vh",
      left: "0vw",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-3vh",
      left: "5vw",
    },
  },
  title3: {
    fontFamily: ["Poppins", "sans-serif"],
    color: "rgb(200,0,26)",
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
      width: "90%",
    },
  },
  content3: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
  },
  chart: {
    [theme.breakpoints.up("xl")]: {
      width: "45vw",
      height: "53vh",
    },
    [theme.breakpoints.only("lg")]: {
      width: "53vw",
      height: "65vh",
    },
    [theme.breakpoints.only("md")]: {
      width: "60vw",
      height: "65vh",
    },
    [theme.breakpoints.only("sm")]: {
      width: "63vw",
      height: "58vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      width: "90vw",
      height: "55vh",
    },
  },
  image4: {
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    [theme.breakpoints.up("xl")]: {
      top: "10vh",
      right: "-20%",
      width: "80vw",
      height: "90vh",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-15vh",
      right: "-20%",
      width: "80vw",
      height: "135vh",
    },
    [theme.breakpoints.only("md")]: {
      right: "-20%",
      width: "80vw",
      height: "140vh",
    },
    [theme.breakpoints.only("sm")]: {
      right: "-20%",
      width: "80vw",
      height: "160vh",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-25vh",
      width: "100%",
      height: "215vh",
    },
  },
  home4: {
    position: "relative",
    lineHeight: "0.1",
    zIndex: 1,
    [theme.breakpoints.up("xl")]: {
      top: "-60%",
      marginLeft: "45vw",
      width: "80%",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-120%",
      marginLeft: "43vw",
      width: "80%",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "42.5vw",
      marginRight: "1rem",
      width: "65%",
      top: "-118%",
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: "1rem",
      marginLeft: "42vw",
      width: "65%",
      top: "-148%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      top: "-235%",
      paddingLeft: "2.8rem",
    },
  },
  title4: {
    fontFamily: ["Poppins", "sans-serif"],
    color: "rgb(200,0,26)",
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      fontWeight: "900",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "34px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
      // width: '0%',
      marginRight: "0.5rem",
      margin: 0,
    },
  },
  content4: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      marginTop: "0.5rem",
      fontSize: "14px",
      fontWeight: "50",
      width: "70%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "0.5rem",
      fontSize: "14px",
      fontWeight: "50",
      width: "75%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "0.5rem",
      fontSize: "14px",
      fontWeight: "50",
      width: "92%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "0.5rem",
      fontSize: "14px",
      fontWeight: "50",
      width: "92%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
      fontSize: "14px",
      fontWeight: "50",
      width: "100%",
    },
  },
  disadvantage: {
    position: "relative",
    zIndex: 1,
    background: "rgb(200,0,26)",
    [theme.breakpoints.up("xl")]: {
      top: "-105vh",
      left: "10vw",
      width: "25vw",
      height: "53vh",
      padding: "2rem 2.5rem",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-210vh",
      left: "10vw",
      width: "25vw",
      height: "57vh",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("md")]: {
      top: "-220vh",
      left: "6vw",
      width: "30vw",
      height: "64vh",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-260vh",
      left: "8vw",
      width: "25vw",
      height: "67.5vh",
      padding: "1rem 1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "45vh",
      top: "-228.5vh",
      padding: "1rem",
    },
  },
  disadvantageShadow: {
    position: "relative",
    background: "#transparent",
    border: "1px solid rgb(200,0,26)",
    [theme.breakpoints.up("xl")]: {
      top: "-153vh",
      left: "12vw",
      width: "25vw",
      height: "53vh",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-263vh",
      left: "12vw",
      width: "25vw",
      height: "57vh",
    },
    [theme.breakpoints.only("md")]: {
      top: "-280vh",
      left: "8vw",
      width: "30vw",
      height: "64vh",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-324vh",
      left: "10vw",
      width: "25vw",
      height: "66.5vh",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  lightText: {
    color: "white",
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
      fontWeight: "200",
      lineHeight: "2rem",
      width: "62%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "200",
      lineHeight: "25px",
      width: "62%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "200",
      lineHeight: "1.5rem",
      width: "80%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
      fontWeight: "200",
      lineHeight: "1.5rem",
      width: "80%",
      // marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "200",
      lineHeight: "1rem",
      width: "60%",
    },
  },
  lightTextFull: {
    color: "white",
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
      fontWeight: "100",
      lineHeight: "1.5rem",
      width: "100%",
      marginTop: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
      fontWeight: "100",
      lineHeight: "20px",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16px",
      fontWeight: "100",
      lineHeight: "1rem",
      width: "100%",
      marginTop: "1.7rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
      fontWeight: "100",
      lineHeight: "1rem",
      width: "100%",
      // marginTop: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      fontWeight: "100",
      lineHeight: "1rem",
      width: "100%",
    },
  },
  boldText: {
    color: "white",
    [theme.breakpoints.up("xl")]: {
      fontSize: "28px",
      fontWeight: "900",
      lineHeight: "3rem",
      marginTop: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "24px",
      fontWeight: "900",
      lineHeight: "25px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "24px",
      fontWeight: "900",
      lineHeight: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "24px",
      fontWeight: "900",
      lineHeight: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      fontWeight: "900",
      lineHeight: "1.5rem",
      // marginLeft: '10vw'
    },
  },
  boldSmallText: {
    color: "white",
    [theme.breakpoints.up("xl")]: {
      position: "relative",
      paddingTop: "3rem",
      fontSize: "26px",
      fontWeight: "900",
      lineHeight: "25px",
      width: "80%",
      left: "-3vw",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "18px",
      fontWeight: "900",
      lineHeight: "25px",
      width: "80%",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "0.5rem",
      fontSize: "16px",
      fontWeight: "900",
      lineHeight: "25px",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: "0.4rem",
      fontSize: "14px",
      fontWeight: "900",
      lineHeight: "25px",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      left: "-30vw",
      // paddingTop: "0.5rem",
      fontSize: "18px",
      fontWeight: "900",
      lineHeight: "1rem",
      width: "100%",
    },
  },
  boxPartner: {
    position: "relative",
    background: "rgb(121,17,0)",
    [theme.breakpoints.up("xl")]: {
      marginTop: "15vh",
      right: "-30vw",
      width: "70vw",
      height: "20vh",
    },
    [theme.breakpoints.only("lg")]: {
      top: "30vh",
      right: "-30vw",
      width: "70",
      height: "26vh",
    },
    [theme.breakpoints.only("md")]: {
      top: "40vh",
      right: "-30vw",
      width: "70",
      height: "26vh",
    },
    [theme.breakpoints.only("sm")]: {
      top: "63vh",
      right: "-30vw",
      width: "70",
      height: "26vh",
    },
    [theme.breakpoints.down("xs")]: {
      left: "0",
      top: "150vh",
      width: "100vw",
      height: "25vh",
    },
  },
  boxPartnerLeft: {
    [theme.breakpoints.up("xl")]: {
      position: "relative",
      top: "-17vh",
      left: "8vw",
      height: "20vh",
      padding: "2.5rem",
    },
    [theme.breakpoints.only("lg")]: {
      position: "relative",
      top: "5vh",
      left: "7.3vw",
      height: "20vh",
      padding: "2.5rem",
    },
    [theme.breakpoints.only("md")]: {
      position: "relative",
      top: "15vh",
      left: "7.2vw",
      height: "20vh",
      padding: "2.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      position: "relative",
      top: "40vh",
      left: "5.5vw",
      height: "20vh",
      padding: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "275%",
      width: "100%",
      height: "20vh",
      padding: "1.5rem",
    },
  },
  title5: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "45px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "45px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "45px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "34px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "34px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "1.5px",
    },
  },
  content5: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "0.5rem",
      fontSize: "23px",
      fontWeight: "50",
    },
    [theme.breakpoints.only("lg")]: {
      // marginTop: "0.05rem",
      fontSize: "23px",
      fontWeight: "50",
    },
    [theme.breakpoints.only("md")]: {
      // marginTop: "0.5rem",
      fontSize: "23px",
      fontWeight: "50",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
      fontWeight: "50",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
      fontSize: "14px",
      fontWeight: "50",
    },
  },
  title6: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "29px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.05rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "29px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.05rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "29px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.05rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "27px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.05rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "27px",
      fontWeight: "700",
      lineHeight: "1.15",
      letterSpacing: "0.01rem",
    },
  },
  boxFounder: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      position: "relative",
      top: "-7vh",
      minHeight: "55vh",
      maxHeight: "100vh",
      marginInline: "3.5rem",
      marginBottom: "5rem",
    },
    [theme.breakpoints.only("lg")]: {
      position: "relative",
      top: "25vh",
      minHeight: "55vh",
      maxHeight: "100vh",
      marginInline: "4rem",
      marginBottom: "25rem",
    },
    [theme.breakpoints.only("md")]: {
      position: "relative",
      top: "35vh",
      minHeight: "70vh",
      marginInline: "4rem",
      marginBottom: "20rem",
    },
    [theme.breakpoints.only("sm")]: {
      position: "relative",
      top: "50vh",
      minHeight: "70vh",
      marginInline: "4rem",
      marginBottom: "25rem",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "150vh",
      marginBottom: "15rem",
      marginTop: "60rem",
      marginInline: "5%",
      width: "100%",
    },
  },
  name: {
    color: "white",
    marginTop: "1rem",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      fontWeight: "700",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "20px",
      fontWeight: "700",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "20px",
      fontWeight: "700",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "15px",
      fontWeight: "700",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "700",
      marginTop: "1rem",
      width: "100%",
    },
  },
  role: {
    color: "grey",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "16.2px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16.2px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "16.2px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "15px",
      fontWeight: "500",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      fontWeight: "500",
      width: "100%",
    },
    // marginTop: "0.5rem",
  },
  desc: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "13px",
      fontWeight: "100",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "13px",
      fontWeight: "100",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "13px",
      fontWeight: "100",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "13px",
      fontWeight: "100",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      fontWeight: "100",
      marginTop: "1rem",
      width: "100%",
    },
  },
  cardFounder: {
    [theme.breakpoints.up("xl")]: {
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "0.5vh",
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "0.5vh",
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "0.5vh",
      // width: "300px",
      // height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "300px",
      // height: "250px",
    },
  },
  card: {
    [theme.breakpoints.up("xl")]: {
      // height: "603px",
      // widht: "400px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "0.5vh",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "0.5vh",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "0.5vh",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  profilePict: {
    [theme.breakpoints.up("xl")]: {
      // width: "420px",
      // height: "340px",
    },
    [theme.breakpoints.only("lg")]: {
      // width: "420px",
      // height: "340px",
    },
    [theme.breakpoints.only("md")]: {
      // marginTop: "5vh",
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("sm")]: {
      // width: "300px",
      // height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "300px",
      // height: "250px",
    },
  },
  boxIcon: {
    display: "flex",
    // marginTop: "3rem",
  },
  // card: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   height: '500px'
  // },
  teamBtn: {
    textTransform: "none",
    backgroundColor: "rgb(121,17,0)",
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      marginTop: "7vh",
      maxHeight: "7vh",
      minHeight: "7vh",
      maxWidth: "13vw",
      minWidth: "13vw",
      fontSize: "0.8vw",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "7vh",
      maxWidth: "15vw",
      minWidth: "15vw",
      maxHeight: "8vh",
      minHeight: "8vh",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "7vh",
      maxHeight: "9vh",
      minHeight: "9vh",
      maxWidth: "20vw",
      minWidth: "20vw",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "7vh",
      maxHeight: "9vh",
      minHeight: "9vh",
      maxWidth: "25vw",
      minWidth: "25vw",
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
