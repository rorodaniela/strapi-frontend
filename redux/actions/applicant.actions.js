import baseUrl from "../../lib/config"
import Swal from "sweetalert2"

export const applicantPost = (payload) => {
  console.log("ini payload applicant post : ", payload);
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/applicants`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: payload,
      })
      const data = await response.json()
      console.log("ini response", data);
      if (data.statusCode === 400 ||data.statusCode === 401 || data.statusCode === 403 || data.statusCode === 500) {
        Swal.fire("Failed!", "There was an error trying to submit form. Please try again.", "error")
        throw new Error(data)
      } else {
        dispatch({
          type: "APPLICANT_POST",
        })
        Swal.fire(
          "Sent Successfully!",
          "Thank you for sending us your message",
          "success"
        )
      }
    } catch (error) {
      console.log(error);
    }
  }
}
