import { useState } from "react";
import CustomButton from "../../component/customButton/customButton";
import Logo from "../../component/Logo/logo";
import "./choosePayment.scss";
import Modal from "react-modal";
import paystack from "../../images/paystack.png";
import Payment from "./paystack";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ChoosePayment = (props) => {
  const data = props?.location?.state?.email;
  const requestType = props?.location?.state?.requestType;
  const amount = props?.location?.state?.amount;
  const [payment, setPayment] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transfer, setTransfer] = useState("");
  const [accountDetails, setAccountDetails] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const TransferDetails = {
    customer_id: data,
    request_type: requestType,
    request_id: "",
    payment_method: "transfer",
    payment_status: "pending",
    amount: transfer,
    date_transaction: new Date().toLocaleDateString(),
  };

  const handleClick = () => {
    setModalIsOpen(true);
  };


  const getAccountDetails = async () => {
    const response = await axios.get(
      "http://aledoyhost.com/klinsheet_api/api_accountdetail/items/read.php"
    );
    await setAccountDetails(response?.data?.items[0]);
  };
  const { account_name, acount_details, bank } = accountDetails;



  const handleTransferReference = (e) => {
    e.preventDefault();
    try {
     axios.post(
        "http://aledoyhost.com/klinsheet_api/api_payments/items/create.php",
        TransferDetails
      );
      toast.success("Payment Successful lodged");
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAccountDetails();
  }, []);

  return (
    <div className="container-fluid" id="payment-home">
      <Logo />
      <div className="row payment-row">
        <div className="left col-md-6">
          <h3>Choose payment method below</h3>
          <form onSubmit={handleSubmit}>
            <div className="select-div">
              <select
                id="transfer-select"
                required
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="paystack">Paystack</option>
                <option value="transfer">Bank Transfer</option>
              </select>
            </div>
            {payment === "transfer" ? (
              <div>
                <p>
                  Kindly make your transfer to <br />
                  the account details below:
                </p>
                <p>
                  Bank Name: {bank} <br />
                  Account Name: {account_name}
                  <br />
                  Account Number: {acount_details} <br />
                </p>
              </div>
            ) : (
              <div>
                <img src={paystack} alt="paystack_logo" />
              </div>
            )}
            {payment === "transfer" ? (
              <CustomButton onClick={handleClick}>
                Click here to input amount sent
              </CustomButton>
            ) : (
              <Payment userEmail={data} requestType={requestType} amount={amount} />
            )}
          </form>
        </div>

        <div className="right col-md-6" id="choose-payment-right"></div>
      </div>
      <Modal isOpen={modalIsOpen} id="modal-box" ariaHideApp={false}>
        <button className="close-modal" onClick={() => setModalIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <form onSubmit={handleTransferReference}>
          <div className="modal-form">
            <label>Amount Transferred</label>
            <input
              id="payment-certi-input"
              type="tel"
              className="form-control"
              onChange={(e) => setTransfer(e.target.value)}
              required
            />
          </div>
          <CustomButton>Submit</CustomButton>
        </form>
      </Modal>
    </div>
  );
};

export default ChoosePayment;
