import React, { useState } from "react";
import axios from "axios";
import ButtonLoader from "../../../../component/buttonLoader/buttonLoader";
import { useHistory } from "react-router";
import "../../../../scss/form.scss";
import { toast } from "react-toastify";
import { handleSubmitEmail } from "../../../../services/usePost";

/* Setting Parameter for request */

const config = {
  headers: {
    Token: process.env.REACT_APP_TOKEN,
  },
};

/* Getting input values from input fields & setting useState   */
const NdlForm = () => {
  const [ndlValue, setNdlValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  /* setting the parameter needed from the backend */
  const userData = {
    id: ndlValue,
    isSubjectConsent: true,
    validations: {
      data: {
        lastName: lastName,
        firstName: firstName,
        dateOfBirth: dob,
      },
    },
  };
  const userEmailData ={
    "email": email,
    "id_type": "NDL",
  }

  /* -----------calling the Api------------------ */
  const verify = async (e) => {
    e.preventDefault();
    if (ndlValue.length >= 10) {
      setErrMsg(false);
      setLoading(true);
      try {
        await handleSubmitEmail(userEmailData);
        const { data } = await axios.post("/drivers-license", userData, config);
        setLoading(false);
        if (
          data.statusCode === 200 &&
          data?.data?.validations?.validationMessages.length === 0
        ) {
          history.push("/valid", {
            userData: data?.data,
            idNumber: ndlValue,
            pageType: "NdlForm",
          });
        } else if (
          data.statusCode === 200 &&
          data?.data?.validations?.validationMessages.length > 0
        ) {
          history.push("/invalid", {
            errorMessage: data?.data?.validations.validationMessages,
          });
        }
      } catch (error) {
        setLoading(false);
        toast.error(error?.response?.data?.message);
      }
    } else {
      setErrMsg(true);
    }
  };

  /*------------------- Verification Button --------------------------------- */
  function VerifyButton() {
    if (
      firstName &&
      lastName &&
      dob &&
      ndlValue &&
      ndlValue.length >= 10 &&
      isChecked
    ) {
      return (
        <button className="form-control veri_btn">
          {loading ? " verifying" : "verify"}
          {loading && <ButtonLoader />}{" "}
        </button>
      );
    } else if (loading) {
      return (
        <button className="form-control veri_btn" disabled>
          {loading && <ButtonLoader />}
          {loading ? " verifying" : "verify"}{" "}
        </button>
      );
    } else
      return (
        <button className="form-control noveri_btn" disabled>
          Verify
        </button>
      );
  }

  /*------------------------- Input Field------------------------------------- */
  return (
    <div>
      <form onSubmit={verify}>
        <div className="container-fluid form_area">
        <div className="col-md-12 col-12 text-center ">
              <input
                type="email"
                className="input_area"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />{" "}
            </div>
          <div className="row">
            <div className="col-md-6 co-12 text-center">
              <input
                type="text"
                className="input_area"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Candidate's Lastname"
              />{" "}
            </div>
            <div className="col-md-6 col-12 text-center">
              <input
                type="text"
                className="input_area"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Candidate's Firstname"
              />{" "}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-12 text-center">
              <input
                type="date"
                className="input_area"
                onChange={(e) => setDOB(e.target.value)}
              />{" "}
            </div>
            <div className="col-md-6 col-12 text-center">
              {" "}
              <input
                type="text"
                className="input_area"
                value={ndlValue}
                placeholder="Driver's License No"
                onChange={(e) => setNdlValue(e.target.value)}
              />{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <input
            id="consent-check"
            className="col-md-1 col-1"
            type="checkbox"
            value="check"
            checked={isChecked}
            onChange={handleOnChange}
          ></input>
          <label className=" col-md-11 col-11 no-select">
            By checking this box and clicking "Verify Candidate", you
            acknowledge that you have gotten consent from the data subject to
            use their data for verification purposes on our platform in
            accordance with our &nbsp;
            <a
              href="https://klincheck.com/cookie.php"
              target="blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <div className="err">
          {errMsg && (
            <p style={{ color: "crimson", fontSize: "12px", marginTop: "7px" }}>
              NDL must be 11 digits
            </p>
          )}
        </div>
        <VerifyButton />
      </form>
    </div>
  );
};

export default NdlForm;
