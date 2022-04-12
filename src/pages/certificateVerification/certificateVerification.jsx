import CustomButton from "../../component/customButton/customButton";
import { useHistory } from "react-router-dom";
import Logo from "../../component/Logo/logo";
import "./certificateVerification.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ButtonLoader from "../../component/buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../useFetch";


const CertificateVerification = () => {
  const [certificate, setCertificate] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const userData = {
    image_path: certificate,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = handleSumbitForm(
      "http://aledoyhost.com/klinsheet_api/api_academic_veri/items/create.php",
      userData
    );
    console.log(response);
  };
  return (
    <div className="container-fluid" id="certi-home">
      <Logo />
      <div className="row certi-row">
        <div className="left col-md-6">
          <h3>Verify academic certificate</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <p>
                <i className="fa-solid fa-upload"></i>Upload copy of the certificate
                you want verify
              </p>
              <input
                type="file"
                name=""
                id="certi-input"
                accept="image/*"
                required
                onChange={(e) => setCertificate(e.target.value)}
              />
            </div>{" "}
            <br /> <br />
            <CustomButton>{ loading ? "Please Wait" : "Next"}{loading && <ButtonLoader/>}</CustomButton>
          </form>
        </div>
        <div className="right col-md-6"></div>
      </div>
    </div>
  );
};

export default CertificateVerification;
