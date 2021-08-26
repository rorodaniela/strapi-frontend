import palette from '../palette'

const MuiInputLabel = {
  root: {
    fontSize: "18px",
    fontFamily: "Roboto",
    color: palette.text.main,
    fontWeight: "500",
    margin: '0px',
    "&$focused": {
      color: palette.text.main,
      fontWeight: "600",
    },
    "&$disabled": {
      color: palette.text.main,
    },
  },
};

export default MuiInputLabel