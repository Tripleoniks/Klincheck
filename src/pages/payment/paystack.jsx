import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Payment = ({ userEmail, requestType, amount }) => {
  const history = useHistory();

  const config = {
    referenceDate: new Date().getTime().toString(),
    email: userEmail,
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
// get user unique id from local storage
  
  


  const postPayementReference = async (reference) => {
    const paymentReference = {
      customer_id: userEmail,
      request_type: requestType,
      request_id: reference.reference,
      payment_method: "paystack",
      payment_status: reference.message,
      amount: amount,
      date_transaction: new Date().toLocaleDateString(),
    };
    try {
      await axios.post(
        "http://aledoyhost.com/klinsheet_api/api_payments/items/create.php",
        paymentReference
      );
    } catch (error) {
      console.log(error);
    }
  };
  // update user data after successful payment
  const updateUserData = async () => {
    const  userId = await localStorage.getItem("user");
    console.log(userId);
    const update = {
      "unique_id": userId,
      "payment_method": "paystack",
      "payment_status": "success",
      "amount": amount,
    };
    if (requestType === "guarantor") {
      await axios
        .patch(
          "http://aledoyhost.com/klinsheet_api/api_guarantor_ref/items/update_data.php",
          update
        )
        .then((res) => {
        });
    } else if (requestType === "reference") {
      await axios
        .patch(
          "http://aledoyhost.com/klinsheet_api/api_guarantor_ref/items/update_data.php",
          update
        )
        .then((res) => {
        });
    } else if (requestType === "Academic Verification") {
      await axios
        .patch(
          "http://aledoyhost.com/klinsheet_api/api_academic_veri/items/update_data.php",
          update
        )
        .then((res) => {
        });
    } else if (requestType === "criminalRecord") {
      await axios
        .patch(
          "http://aledoyhost.com/klinsheet_api/api_criminal_record/items/update_data.php",
          update
        )
        .then((res) => {
        });
    } else return null;
  //  clear local storage
  await localStorage.clear();
  };

  const onSuccess = async (reference) => {
    await postPayementReference(reference);
    await updateUserData();
    toast.success("Payment Successfully Received");
    history.push("/");
    console.log(requestType);
    localStorage.removeItem("user");
  };

  const onClose = () => {
    toast.error("transaction not completed", {
      position: toast.POSITION.TOP_CENTER,
    });
    history.push("/");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    className: "custom-button",
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
  };

  return (
    <div className="payment">
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Payment;
