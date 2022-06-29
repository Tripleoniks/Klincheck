import CustomButton from "../../component/customButton/customButton";
import { useHistory } from "react-router-dom";
import Logo from "../../component/Logo/logo";
import "./certificateVerification.scss";
import { useState, useEffect } from "react";
import ButtonLoader from "../../component/buttonLoader/buttonLoader";
import { handleSumbitForm } from "../../services/usePost";
import axios from "axios";

const CertificateVerification = () => {
  const [email, setEmail] = useState("");
  const [certificate, setCertificate] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");
  const userData = {
    customer_id: email,
    image_path: certificate,
    payment_status: "pending",
  };
  const getPrice = async () => {
    const price = await axios.get(
      "https://aledoyhost.com/klinsheet_api/api_price/items/read.php"
    );
    setPrice(price?.data?.items[0]);
  };
  const { academic_price } = price;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const datay = new FormData();
    datay.append("file", certificate);
    datay.append("upload_preset", "rem1xpra");
    datay.append("cloud_name", "klinsheet");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/klinsheet/image/upload",
        datay
      );
      userData.image_path = res.data.secure_url;
      try {
         await handleSumbitForm(
          "http://aledoyhost.com/klinsheet_api/api_academic_veri/items/create.php",
          userData
        );
        setLoading(false);
        history.push("/choose-payment", {
          email: userData.customer_id,
          amount: academic_price,
          requestType: "Academic Verification",
        });
      } catch (err) {
        setLoading(false);
        history.push("/");
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPrice();
  }, []);

  return (
    <div className="container-fluid" id="certi-home">
      <Logo />
      <div className="row certi-row">
        <div className="left col-md-6">
          <div className="back-btn">
            <button onClick={() => history.goBack()}>
              {/* <i className="fa-solid fa-arrow-left-long"></i> */}
              back
            </button>
          </div>
          <h3>Verify academic certificate</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <p>
                <i className="fa-solid fa-upload"></i>Upload copy of the
                certificate you want verify
              </p>
              <input
                id="certi-input"
                type="file"
                className="form-control"
                capture="user"
                accept="image/*"
                onChange={(e) => setCertificate(e.target.files[0])}
                required
              />
            </div>{" "}
            <br /> <br />
            <CustomButton>
              {loading ? "Please Wait" : "Next"}
              {loading && <ButtonLoader />}
            </CustomButton>
          </form>
        </div>
        <div className="right col-md-6"></div>
      </div>
    </div>
  );
};

export default CertificateVerification;
