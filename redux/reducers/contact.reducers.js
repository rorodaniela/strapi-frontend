const initialState = {}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_POST":
      return { ...state, message: 'success' }
    default:
      return { ...state }
  }
}

export default contactReducer
