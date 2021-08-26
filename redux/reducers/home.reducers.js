const initialState = {
  homepage: null
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOMEPAGE":
      return { ...state, homepage: action.data }
    default:
      return { ...state }
  }
}

export default contactReducer
