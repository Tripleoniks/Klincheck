import "./invalid.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo";
import invalidLogo from "../../images/invalid_bckimg.png";
import invalidImage from "../../images/invalid_img..png";

const Invalid = (props) => {
  const errorMessage = props.location.state.errorMessage;

  return (
    <>
      <Logo />

      <div className="contain invalid">
        <div className="row valid mx-auto ">
          <div className="col-md-4">
            <div className="card card-box crd">
                <img src={invalidImage} alt="" srcset="" className="img-fluid"  />
                </div>
          </div>
          <div className="col-md-4 details">
            <h6 className="inv">Candidates Data NOT Verified</h6>
            <div className="deet">
              <p>{errorMessage}</p>
            </div>

            <div className="share_">
              <form action="#">
                <div className="sharethis-inline-share-buttons"></div>
              </form>
            </div>
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
