import "./invalid.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo";
import invalidLogo from "../../images/invalid_bckimg.png";
import invalidImage from "../../images/invalid_img..png";
import { InlineShareButtons } from "sharethis-reactjs";


const Invalid = (props) => {
  const errorMessage = props.location.state.errorMessage;

  return (
    <>
      <div className="col-md-12 valid-logo">
        <Logo />
      </div>

      <div className="contain invalid">
        <div className="row valid mx-auto ">
          <div className="col-md-4">
            <div className="card card-box crd">
                <img src={invalidImage} alt="invalid-img" srcset="" className="img-fluid" style={{"width": "100%", "height" : "100%"}}  />
                </div>
          </div>
          <div className="col-md-4 details">
            <h6 className="inv">Candidates Data NOT Verified</h6>
            <div className="deets">
              <p>{errorMessage}</p>
            </div>

            <InlineShareButtons
              config={{
                alignment: "center",
                color: "social",
                enabled: true,
                networks: ["whatsapp", "sharethis", "email"],
                radius: 50,
              }}
            />
          </div>

          <div className="col-md-3 backimg">
            <img src={invalidLogo} alt="" srcset="" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Invalid;
