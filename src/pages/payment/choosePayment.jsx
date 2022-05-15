import Logo from "../../component/Logo/logo";
import "./choosePayment.scss";
import paystack from "../../images/paystack.png";
import Payment from "./paystack";


const ChoosePayment = (props) => {
  const data = props?.location?.state?.email;
  const requestType = props?.location?.state?.requestType;
  const amount = props?.location?.state?.amount;
  
  return (
    <div className="container-fluid" id="payment-home">
      <Logo />
      <div className="row payment-row">
        <div className="left col-md-6">
          <h3>Choose payment method below</h3>
            <div className="select-div">
              <p id="transfer-select"> Paystack </p>
            </div>
              <div>
                <img src={paystack} alt="paystack_logo" />
              </div>
              <Payment userEmail={data} requestType={requestType} amount={amount} />
        </div>

        <div className="right col-md-6" id="choose-payment-right"></div>
      </div>
    </div>
  );
};

export default ChoosePayment;
