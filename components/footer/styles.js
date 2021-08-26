import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    background: "black",
    height: "15vh",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    [theme.breakpoints.up("xl")]: {
      marginTop: "1rem",
      width: "7vw",
      marginRight: "2rem",
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("lg")]: {
      marginRight: "2rem",
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("md")]: {
      marginRight: "2rem",
      // marginTop: "5vh",
      // width: "200px",
      // height: "200px",
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: "2rem",
      // width: "300px",
      // height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "2rem",
      // width: "300px",
      // height: "250px",
    },
  },
  navbarNav: {
    fontFamily:
      'Marfa, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    color: "white",
  },
  boxMedsos: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      marginTop: "1rem",
      width: "7vw",
      marginRight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    },
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
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    [theme.breakpoints.up("xl")]: {
      width: "2vw",
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
      margin: 0,
      // display: "none",
    },
  },
}))

export default useStyles