
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
    publicKey: "pk_test_59e6e667d3990cda6c6a6849eb0c8c303cc333fd",
  };

  const onSuccess = async (reference) => {
    await postPayementReference(reference)
    history.push("/");
  };

  const onClose = () => {
    toast.error("transaction not completed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const postPayementReference = async  (reference) => {
    const paymentReference ={
        customer_id: userEmail,
        request_type: requestType,
        request_id: reference.reference,
        payment_method: "paystack",
        payment_status: reference.message,
        amount: amount,
        date_transaction: new Date().toLocaleDateString(),
    }
    try{
        await axios.post("http://aledoyhost.com/klinsheet_api/api_payments/items/create.php", paymentReference);
        toast.success("Payment Successful lodged")
        
    } catch(error){
        console.log(error)
    }
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


