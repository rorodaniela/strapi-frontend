import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(41,41,41)",
    height: "100%",
    // paddingBottom: "10rem",
  },
  box: {
    width: "100%",
  },
  background: {
    position: "relative",
    backgroundSize: "cover",
    [theme.breakpoints.up("xl")]: {
      top: "-10.5vh",
      left: "-4rem",
      height: "60vh",
      width: "25.5vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-13vh",
      left: "3rem",
      height: "110vh",
      width: "33.5vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "-15vh",
      left: "0rem",
      height: "110vh",
      width: "21rem",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-10rem",
      left: "0.5rem",
      height: "110vh",
      width: "16rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-7.5rem",
      left: "-2rem",
      height: "48rem",
      width: "44rem",
    },
  },
  contentSection1: {
    [theme.breakpoints.up("xl")]: {
      marginInline: "12.5vw",
      marginTop: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginInline: "1vw",
      // marginTop: "2rem",
    },
    [theme.breakpoints.only("md")]: {
      marginInline: "5vw",
      width: "100%",
      // marginTop: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginInline: "5vw",
      marginTop: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginInline: "5vw",
      marginTop: "2rem",
      width: "90vw",
    },
  },
  contentSection2: {
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      marginInline: "12.5vw",
      top: "-45vh",
    },
    [theme.breakpoints.only("lg")]: {
      marginInline: "2vw",
      top: "-85vh",
    },
    [theme.breakpoints.only("md")]: {
      marginInline: "5vw",
      // width: "100%",
      top: "-78vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginInline: "5vw",
      top: "-90vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6vw",
      marginRight: "4vw",
      top: "-118vh",
    },
  },
  contentSection3: {
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "12.5vw",
      marginRight: "4vw",
      top: "-30vh",
    },
    [theme.breakpoints.only("lg")]: {
      marginInline: "2vw",
      top: "-67vh",
    },
    [theme.breakpoints.only("md")]: {
      marginInline: "5vw",
      top: "-53vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginInline: "5vw",
      top: "-68vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6vw",
      marginRight: "4vw",
      top: "-98vh",
    },
  },
  contentSection4: {
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "12.5vw",
      marginRight: "4vw",
      top: "-20vh",
    },
    [theme.breakpoints.only("lg")]: {
      marginInline: "2vw",
      top: "-45vh",
    },
    [theme.breakpoints.only("md")]: {
      marginInline: "5vw",
      top: "-40vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginInline: "5vw",
      top: "-50vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6vw",
      marginRight: "4vw",
      top: "-88vh",
    },
  },
  contentSection5: {
    backgroundColor: "rgb(121,17,0)",
    // display: 'flex',
    // justifyContent: 'center',
    [theme.breakpoints.up("xl")]: {
      height: "22rem",
      bottom: "0",
    },
    [theme.breakpoints.only("lg")]: {
      height: "22rem",
      bottom: "0",
    },
    [theme.breakpoints.only("md")]: {
      height: "22rem",
      bottom: "0",
    },
    [theme.breakpoints.only("sm")]: {
      height: "22rem",
      bottom: "0",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25rem",
      bottom: "0",
    },
  },
  orangeBox1: {
    position: "relative",
    backgroundColor: "rgba(100,28,17, 0.8)",
    [theme.breakpoints.up("xl")]: {
      width: "64rem",
      height: "17rem",
      top: "7vh",
      zIndex: "1",
    },
    [theme.breakpoints.only("lg")]: {
      width: "48.5rem",
      height: "18rem",
      left: "-3rem",
      top: "15vh",
      zIndex: "1",
    },
    [theme.breakpoints.only("md")]: {
      width: "50vw",
      height: "17rem",
      left: "-4rem",
      top: "15vh",
      zIndex: "1",
    },
    [theme.breakpoints.only("sm")]: {
      width: "50vw",
      height: "17rem",
      left: "-3rem",
      top: "9vh",
      zIndex: "1",
    },
    [theme.breakpoints.down("xs")]: {
      width: "67vw",
      height: "17rem",
      left: "-4rem",
      top: "7vh",
      zIndex: "1",
    },
  },
  titleBox: {
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.up("xl")]: {
      top: "-68vh",
      right: "-12.5vw",
      width: "30vw",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-123vh",
      right: "-15vw",
      width: "48.5vw",
    },
    [theme.breakpoints.only("md")]: {
      top: "-123vh",
      right: "-10vw",
      width: "63vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-132vh",
      right: "-10vw",
      width: "80vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-144.5vh",
      right: "-6.5vw",
      width: "90vw",
    },
  },
  title1: {
    color: "white",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.08rem",
      width: "76.5%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.08rem",
      width: "76.5%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.08rem",
      width: "76.5%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "68px",
      fontWeight: "700",
      lineHeight: "4.5rem",
      letterSpacing: "0.08rem",
      width: "76.5%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "3rem",
      letterSpacing: "0.08rem",
      width: "76.5%",
    },
  },
  subtitle1: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      marginTop: "0.5rem",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "1.5rem",
      letterSpacing: "0.05rem",
      width: "50%",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "0.5rem",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "1.5rem",
      letterSpacing: "0.05rem",
      width: "59.5%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "0.5rem",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "1.5rem",
      letterSpacing: "0.05rem",
      width: "62%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "2rem",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "1.5rem",
      letterSpacing: "0.05rem",
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.5rem",
      letterSpacing: "0.05rem",
      width: "85%",
    },
  },
  title2: {
    fontFamily: ["Montserrat", "Inter var"],
    color: "white",
    [theme.breakpoints.up("xl")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "10%",
      // marginBottom: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "10%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "5%",
      marginBottom: "1rem",
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "10%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      fontWeight: "700",
      marginLeft: "10%",
      marginBottom: "1rem",
    },
  },
  titleGlobal: {
    fontFamily: ["Montserrat", "Inter var"],
    color: "white",
    [theme.breakpoints.up("xl")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "20%",
      marginBottom: "3rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "10%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "29px",
      fontWeight: "700",
      // marginLeft: "10%",
      marginBottom: "1rem",
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "29px",
      fontWeight: "700",
      marginLeft: "10%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      fontWeight: "700",
      marginLeft: "10%",
      marginBottom: "1rem",
    },
  },
  founderSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      top: "-60vh",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-108vh",
    },
    [theme.breakpoints.only("md")]: {
      top: "-98vh",
      left: "-1vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-110vh",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-135vh",
    },
  },
  founderContainer1: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgb(120,16,0)",
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      padding: "2% 20%",
      display: "flex",
    },
    [theme.breakpoints.only("lg")]: {
      padding: "2% 9.5%",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "2%",
      paddingBottom: "2%",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: "4%",
      paddingBottom: "4%",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2%",
      paddingBottom: "2%",
      display: "flex",
      flexDirection: "column",
    },
  },
  founderContainer: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgb(120,16,0)",
    borderRadius: "10px",
    [theme.breakpoints.up("xl")]: {
      padding: "2% 20%",
      display: "flex",
    },
    [theme.breakpoints.only("lg")]: {
      padding: "2% 10%",
      display: "flex",
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: "2%",
      paddingBottom: "2%",
      paddingInline: "5%",
      display: "flex",
    },
    [theme.breakpoints.only("sm")]: {
      ppaddingTop: "2%",
      paddingBottom: "2%",
      paddingInline: "5%",
      display: "flex",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2% 2%",
      display: "flex",
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
      fontSize: "19px",
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
    whiteSpace: "pre-line",
    fontFamily: ["Poppins", "sans-serif"],
    [theme.breakpoints.up("xl")]: {
      fontSize: "13px",
      fontWeight: "100",
      marginTop: "1rem",
      width: "100%",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "12px",
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
  boxIcon: {
    // position: 'relative',
    // bottom: '-2rem',
    display: "flex",
    // marginTop: "3rem",
  },
  cardFounder: {
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "285px",
      height: "511px",
    },
    [theme.breakpoints.only("lg")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "285px",
      height: "450px",
    },
    [theme.breakpoints.only("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "238px",
      height: "430px",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "175px",
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "380px",
      height: "480px",
      marginBottom: "3rem",
    },
  },
  card: {
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "285px",
      height: "511px",
    },
    [theme.breakpoints.only("lg")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "285px",
      height: "511px",
    },
    [theme.breakpoints.only("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "238px",
      height: "511px",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "155px",
      height: "550px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "285px",
      height: "550px",
    },
  },
  cardAdvisories: {
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "380px",
    },
    [theme.breakpoints.only("lg")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "380px",
    },
    [theme.breakpoints.only("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "460px",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "380px",
    },
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingInline: "1rem",
      width: "380px",
    },
  },
  quote: {
    color: "rgb(200,0,26)",
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
    fontFamily: ["Montserrat", "Inter var"],
    color: "#ECBBBB",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      fontWeight: "700",
      marginBottom: "1rem",
      marginInline: "25%",
      width: "1300px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "25px",
      fontWeight: "700",
      marginBottom: "1rem",
      marginInline: "15%",
      width: "1500px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "25px",
      fontWeight: "700",
      marginBottom: "1rem",
      marginInline: "16%",
      width: "1400px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "25px",
      fontWeight: "700",
      marginBottom: "1rem",
      marginInline: "25%",
      width: "1300px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      fontWeight: "700",
      marginBottom: "1rem",
      marginInline: "13%",
      width: "1300px",
    },
  },
  quotesBy: {
    color: "white",
    fontFamily: ["Montserrat", "sans-serif"],
    whiteSpace: "pre-line",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "14px",
      fontWeight: "400",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "14px",
      fontWeight: "400",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "14px",
      fontWeight: "400",
      width: "80%",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
      fontWeight: "400",
      padding: "1.5rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: "400",
      padding: "1.5rem 2rem",
    },
  },
}))
export default useStyles
