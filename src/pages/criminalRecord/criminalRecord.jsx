import { useState } from "react";
import Logo from "../../component/Logo/logo";
import "./criminalRecord.scss";
import CustomButton from "../../component/customButton/customButton";
import { useHistory } from "react-router-dom";
import ButtonLoader from "../../component/buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../services/usePost";
import axios from "axios";
import { useEffect } from "react";

const CriminalRecord = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [phoneNo, setPhoneNo] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");

  const userData = {
    customer_id: email,
    name: name,
    address: address,
    Phone: phoneNo,
  };

  const history = useHistory();

  const getPrice = async () => {
    const price = await axios.get(
      "http://aledoyhost.com/klinsheet_api/api_price/items/read.php"
    );
    setPrice(price?.data?.items[0]);
  };
 const {criminal_price} = price;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    handleSumbitForm(
      "http://aledoyhost.com/klinsheet_api/api_criminal_record/items/create.php",
      userData
    );
    setLoading(false);
    history.push("/choose-payment", {
      email: userData.customer_id,
      amount: criminal_price,
      requestType: "criminalRecord",
    });
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <div className="container-fluid" id="criminal-home">
      <Logo />
      <div className="row criminal-row">
        <div className="left col-md-6">
          <h3>
            Confirm a person's <br /> criminal check
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                required
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <CustomButton>
              {loading ? "Please Wait" : "Next"}
              {loading && <ButtonLoader />}
            </CustomButton>
            
          </form>
        </div>
        <div className="right col-md-5"></div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default CriminalRecord;
