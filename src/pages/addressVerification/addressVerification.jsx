import "./addressVerification.scss";
import Logo from "../../component/Logo/logo";
import AddressForm from "../../component/addressForm/addressForm";
import { useHistory } from "react-router-dom";

const AddressVerification = () => {
  const history = useHistory();
  return (
    <div className="container-fluid" id="add-home">
      <Logo />

      <div className="row address-row">
        <div className="left col-md-6">
        <div className="back-btn">
          <button onClick={() => history.goBack()}>
            {/* <i className="fa-solid fa-arrow-left-long"></i> */}
            back
          </button>
        </div>
          <h3>Verify an Address</h3>
          <AddressForm />
        </div>
        <div className="right col-md-6"></div>
      </div>
    </div>
  );
};

export default AddressVerification;
