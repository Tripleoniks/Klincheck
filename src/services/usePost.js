
import {toast} from "react-toastify";
import axios from "axios";


export const handleSumbitForm = async ( url, userData) => {
  if(!userData) return;
    try {
      const data  = await axios.post(
        url,
        userData, 
      );
      console.log(data);
      if (data.status === 201) {
        toast.success("Request Successful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Request Failed");

    }

};

