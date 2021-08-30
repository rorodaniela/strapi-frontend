import React, { useState } from "react"
import Link from "next/link"
import useStyles from "./styles"
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Menu,
  MenuItem,
  Collapse,
  Typography,
  ListItemIcon,
} from "@material-ui/core"
import { ExpandMore, ExpandLess } from "@material-ui/icons"
import IconCustom from "../../src/icons"
import clsx from "clsx"
import { useRouter } from "next/router"

const Nav = ({ categories, logo }) => {
  const classes = useStyles()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState()
  const [childMenu, setChildMenu] = useState(false)
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMenuOpen = (e, category) => {
    // console.log("ini event : ", e );
    setAnchorEl(e.currentTarget)
    setMenu(true)
  }
  
  const handleMenuClose = (category) => {
    setMenu(false)
  }

  const multiListNav = (category) => {
    return (
      <>
        <Button
          aria-controls={`${category?.name}-menu`}
          aria-haspopup="true"
          endIcon={
            menu ? (
              <ExpandLess style={{ color: "white" }} />
            ) : (
              <ExpandMore style={{ color: "white" }} />
            )
          }
          onClick={(e) => handleMenuOpen(e, category)}
          className={clsx(classes.route, "uk-link-reset", classes.multiNav)}
          style={{ textTransform: "none" }}
        >
          {category?.name}
        </Button>
        <Menu
          id={`${category?.name}-menu`}
          anchorEl={anchorEl}
          // keepMounted
          open={Boolean(menu)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          style={{ marginTop: "3rem" }}
        >
          {category?.children?.map((child, idx) => {
            return (
              <MenuItem
                onClick={() => router.push(`/${child?.slug}`)}
                key={idx}
              >
                {child?.name}
              </MenuItem>
            )
          })}
        </Menu>
      </>
    )
  }

  const singleListNav = (category) => {
    return (
      <Link as={`/${category?.slug}`} href={`/${category?.slug}`}>
        <a
          className={clsx(classes.route, "uk-link-reset")}
          style={{ textTransform: "none" }}
        >
          {category?.name}
        </a>
      </Link>
    )
  }

  const handleMenuDrawerBtn = (category) => {
    if(category?.children?.length > 0 ) {
      setChildMenu(!childMenu)
    } else {
      router.push(`/${category.slug}`)
    }

  }

  const singleListDrawer = (category) => {
    return (
      <ListItem onClick={() => handleMenuDrawerBtn(category)} button key={category?.id}>
        <ListItemText primary={category?.name} style={{ color: "white" }} />
      </ListItem>
    )
  }

  const multipleListDrawer = (category) => {
    return (
      <>
        <ListItem
          onClick={() => handleMenuDrawerBtn(category)}
          button
          key={category?.id}
        >
          <ListItemText primary={category?.name} style={{ color: "white" }} />
          <ListItemIcon>{ childMenu ? <ExpandLess style={{color: "white"}}/> : <ExpandMore style={{color: "white"}}/>}</ListItemIcon>
        </ListItem>
        <Collapse in={childMenu} timeout="auto" unmountOnExit>
          {category?.children?.map((item, idx) => {
            return (
              <ListItem
                onClick={() => history.push(`/${item.slug}`)}
                style={{
                  paddingLeft: "3rem",
                  marginBottom: "1rem",
                  width: "90%",
                  borderRadius: "5px",
                }}
                button
                key={idx}
              >
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: "14px" }}>
                      {item.name}
                    </Typography>
                  }
                />
              </ListItem>
            )
          })}
        </Collapse>
      </>
    )
  }

  const sideDrawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {categories?.map((category) => {
          //  eslint-disable-next-line
          if (category?.children?.length > 0) {
            //  eslint-disable-next-line
            return multipleListDrawer(category)
          } else {
            //  eslint-disable-next-line
            return singleListDrawer(category)
          }
        })}
      </List>
    </div>
  )
  return (
    <div className={classes.navbar}>
      <nav className={classes.navbarContainer}>
        <div>
          {/* eslint-disable-next-line */}
          <Button onClick={() => router.push("/")}>
            {/* eslint-disable-next-line */}
            <img
              src={logo ? logo : ""}
              alt="logo"
              className={classes.navbarLogo}
            />
          </Button>
        </div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.drawerBtn}
        >
          <IconCustom name="menu" color="white" />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {sideDrawer}
        </Drawer>
        <Box>
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              if (category.name !== "Contact Us") {
                return (
                  <li key={category?.id} className={classes.route}>
                    {category?.children.length > 0
                      ? multiListNav(category)
                      : singleListNav(category)}
                    {/* <Link as={`/${category?.slug}`} href={`/${category?.slug}`}>
                      <a
                        className={clsx(classes.route, "uk-link-reset")}
                        style={{ textTransform: "none" }}
                      >
                        {category?.name}
                      </a>
                    </Link> */}
                  </li>
                )
              }
            })}
          </ul>
        </Box>
        <Box className={classes.route}>
          <div className="uk-navbar-nav">
            <Link as={`/contact-us`} href="/contact-us">
              <a className="uk-link-reset">CONTACT US</a>
            </Link>
          </div>
        </Box>
      </nav>
    </div>
  )
}

export default Nav
