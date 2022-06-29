
import {toast} from "react-toastify";
import axios from "axios";


export const handleSumbitForm = async ( url, userData) => {
  if(!userData) return;
    try {
      const data  = await axios.post(
        url,
        userData, 
      );
      if (data.status === 201) {
        toast.success("Request Successful");
        localStorage.setItem("user", (data.data[0]));
      }
    } catch (error) {
      toast.error("Request Failed");
    }
};

export  const handleSubmitEmail = async (userEmailData) => {
  if(!userEmailData) return;
    try {
      const data  = await axios.post(
        "https://aledoyhost.com/klinsheet_api/api_klin_id/items/create.php",
        userEmailData, 
      );
    } catch (error) {

    }

}


