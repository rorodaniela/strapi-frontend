import { StaticGoogleMap, Marker } from "react-static-google-map"

export default function Map({ size, color, label, location }) {
  return (
    <StaticGoogleMap
      size={size}
      apiKey="AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo"
    >
      <Marker location={location} color={color} label={label} />
    </StaticGoogleMap>
  )
}
