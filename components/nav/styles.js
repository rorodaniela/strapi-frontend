import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "absolute",
    zIndex: "1",
    width: "100vw",
  },
  route: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "1vw!important",
      // display: "none",
    },
    [theme.breakpoints.only("lg")]: {
      // display: "none",
    },
    [theme.breakpoints.only("md")]: {
      // display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      // display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  multiNav: {
    color: "white",
    fontFamily: [
      "Marfa",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Open Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    fontWeight: "400",
    [theme.breakpoints.up("xl")]: {
      marginTop: "0.7rem",
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "1.4rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "1.4rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "1.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.4rem",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerBtn: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      right: 10,
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      right: 10,
    },
  },
  drawerPaper: {
    width: 260,
    backgroundColor: "rgba(41,41,41, 0.9)",
    color: "white"
  },
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("sm")]: {
      paddingLeft: "6rem",
      paddingRight: "2rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      paddingInline: "3.5rem",
      paddingTop: "1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-around",
      paddingLeft: "2rem",
    },
  },
  navbarLogo: {
    // width: "130px",
    [theme.breakpoints.up("xl")]: {
      marginTop: "1rem",
      width: "7vw",

      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("lg")]: {
      // width: "200px",
      // height: "200px",
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
  navbarNav: {
    fontFamily:
      'Marfa, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    color: "white",
  },
}))
export default useStyles
