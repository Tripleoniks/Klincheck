
import {toast} from "react-toastify";
import axios from "axios";


export const handleSumbitForm = async ( url, userData) => {
  if(!userData) return;
    try {
      const { data } = await axios.post(
        url,
        userData
      );
      console.log(data);
      if (data.message === "Item was created.") {
        toast.success("Request Successful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Request Failed");
    }

}
