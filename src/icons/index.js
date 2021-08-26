import { Menu, ArrowForward, LinkedIn, YouTube, Instagram, Twitter, Facebook } from '@material-ui/icons' 

export default function IconCustom(props) {
  switch (props.name) {
    case "menu":
      return <Menu style={{ color: props.color, fontSize: props.size }} />
    case "right-arrow":
      return <ArrowForward style={{ color: props.color, fontSize: props.size }} />
    case "linkedin":
      return <LinkedIn style={{ color: props.color, fontSize: props.size }} />
    case "youtube":
      return <YouTube style={{ color: props.color, fontSize: props.size }} />
    case "twitter":
      return <Twitter style={{ color: props.color, fontSize: props.size }} />
    case "facebook":
      return <Facebook style={{ color: props.color, fontSize: props.size }} />
    case "instagram":
      return <Instagram style={{ color: props.color, fontSize: props.size }} />
    default:
      return <></>
  }
}
