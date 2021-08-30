import { Box, Button, IconButton } from "@material-ui/core"
import Link from "next/link"
import IconCustom from "../../src/icons"
import useStyles from "./styles"
import { useRouter } from "next/router"
const mediaSocial = [
  // {
  //   name: "youtube",
  //   link: "",
  // },
  // {
  //   name: "twitter",
  //   link: "",
  // },
  // {
  //   name: "facebook",
  //   link: "",
  // },
  // {
  //   name: "instagram",
  //   link: "",
  // },
]

export default  function Footer({categories, logo}) {
  const classes = useStyles()
  const router = useRouter()
  return (
    <Box container className={classes.root}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Button onClick={() => router.push(`/`)}>
            {/* eslint-disable-next-line */}
            <img src={logo ? logo : ''} alt="logo" className={classes.logo} />
          </Button>
        </Box>
        <ul className="uk-navbar-nav">
          {categories.map((category) => {
            return (
              <Box className={classes.route} key={category.id}>
                <li key={category.id} style={{ marginInline: "1rem" }}>
                  <Link as={`/${category.slug}`} href={`/${category.slug}`}>
                    <a
                      className="uk-link-reset"
                      style={{ textTransform: "none" }}
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              </Box>
            )
          })}
        </ul>
      </Box>
      <Box className={classes.boxMedsos}>
        {mediaSocial?.map((item, idx) => {
          return (
            <IconButton key={idx} className={classes.icon}>
              <IconCustom name={item?.name} color="white" />
            </IconButton>
          )
        })}
      </Box>
    </Box>
  )
}