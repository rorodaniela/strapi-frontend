import baseUrl from "../../lib/config"
export const contactPost = (payload) => {
  console.log("ini payload form contact: ", payload);
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/contacts`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      dispatch({
        type: "CONTACT_POST"
      })
    } catch (error) {
      console.log(error);
    }
  }
}
