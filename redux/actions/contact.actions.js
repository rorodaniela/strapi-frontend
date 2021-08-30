import baseUrl from "../../lib/config"
import Swal from "sweetalert2"

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
       if (
         data.statusCode === 400 ||
         data.statusCode === 401 ||
         data.statusCode === 403 ||
         data.statusCode === 500
       ) {
         Swal.fire(
           "Failed!",
           "There was an error trying to submit form. Please try again.",
           "error"
         )
         throw new Error(data)
       } else {
         dispatch({
           type: "CONTACT_POST",
         })
         Swal.fire("Sent Successfully!", "We will contact you soon", "success")
       }

    } catch (error) {
      console.log(error);
    }
  }
}
