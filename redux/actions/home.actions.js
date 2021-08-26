import baseUrl from "../../lib/config"

export const initFetchHome = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${baseUrl}/contact-us`
      )
      const data = await response.json()
      dispatch({
        type: "GET_HOMEPAGE",
        data: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
