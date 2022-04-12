import { useState } from "react";
import Logo from "../../component/Logo/logo";
import "./criminalRecord.scss";
import CustomButton from "../../component/customButton/customButton";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ButtonLoader from "../../component/buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../useFetch";

const CriminalRecord = () => {
  const [name, setName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [phoneNo, setPhoneNo] = useState(" ");
  const [loading, setLoading] = useState(false);

  const userData = {
    name: name,
    address: address,
    Phone: phoneNo,
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = handleSumbitForm(
        "http://aledoyhost.com/klinsheet_api/api_criminal_record/items/create.php",
        userData
      );
      console.log(response);
    };


  return (
    <div className="container-fluid" id="criminal-home">
      <Logo />
      <div className="row criminal-row">
        <div className="left col-md-6">
          <h3>
            Confirm a person's <br /> criminal check
          </h3>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                class="form-control"
                required
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <CustomButton>{ loading ? "Please Wait" : "Next"}{loading && <ButtonLoader/>}</CustomButton>
          </form>
        </div>
        <div className="right col-md-5"></div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default CriminalRecord;
