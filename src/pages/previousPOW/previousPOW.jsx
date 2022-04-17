import Logo from "../../component/Logo/logo";
import "./previousPOW.scss";
import CustomButton from "../../component/customButton/customButton";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonLoader from "../../component/buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../services/usePost";
import { toast } from "react-toastify";


const PreviousPlace = () => {
  const [email, setEmail] = useState("");
  const [staffName, setStaffName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const userData = {
    "customer_id": email,
    "staff_name": staffName,
    "company_name": companyName,
    "company_address": companyAddress,
    "position": position,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleSumbitForm("http://aledoyhost.com/klinsheet_api/api_previous_employer/items/create.php", userData)
    setLoading(false);
    toast.success("Successfully Submitted");
    history.push("/");
  };

  return (
    <div className="container-fluid" id="previous-home">
      <Logo />
      <div className="row previous-row">
        <div className="left col-md-6">
          <h3>Previous place of work</h3>
          <form onSubmit={handleSubmit}>
          <div class="form-group">
         <label>Your Email</label>
         <input type="text" class="form-control" onChange={e => setEmail(e.target.value) } required/>
         </div>
            <div className="form-group">
              <label>Staff Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setStaffName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Company's name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Company's Address</label>
              <input
                type="tel"
                className="form-control"
                required
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="tel"
                className="form-control"
                required
                onChange={(e) => setPosition(e.target.value)}
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

export default PreviousPlace;
