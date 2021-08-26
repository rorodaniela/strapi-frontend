const initialState = {}

const applicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPLICANT_POST":
      return { ...state }
    default:
      return { ...state }
  }
}

export default applicantReducer
