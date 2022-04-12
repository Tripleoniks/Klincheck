import CustomButton from "../../component/customButton/customButton";
import Logo from "../../component/Logo/logo";
import "./personVerification.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ButtonLoader from "../../component/buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../useFetch";

const PersonVerification = () => {
  const [personType, setPersonType] = useState("guarantor");
  const [employeeName, setEmployeeName] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const userData = {
    request_type: personType,
    employee_name: employeeName,
    guarantor_name: name,
    occupation: occupation,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = handleSumbitForm(
      "http://aledoyhost.com/klinsheet_api/api_guarantor_ref/items/create.php",
      userData
    );
    console.log(response);
  };
  return (
    <div className="container-fluid" id="person-home">
      <Logo />
      <div className="row person-row">
        <div className="left col-md-6">
          <h3>Verify a person</h3>

          <form onSubmit={handleSubmit}>
            <select
              id="person-select"
              required
              onChange={(e) => setPersonType(e.target.value)}
            >
              <option value="guarantor">Guarantor</option>
              <option value="reference">Reference</option>
            </select>
            <div className="form-group">
              <label>Employee's Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                {personType === "guarantor" ? "Guarantor's" : "Reference"} Name
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <CustomButton>
              {" "}
              {loading ? "Please Wait" : "Next"}
              {loading && <ButtonLoader />}{" "}
            </CustomButton>
          </form>
        </div>
        <div className="right col-md-5"></div>
      </div>
    </div>
  );
};

export default PersonVerification;
