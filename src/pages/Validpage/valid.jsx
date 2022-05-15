import "./valid.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo";
import man from "../../images/man.png";
import { InlineShareButtons } from "sharethis-reactjs";

const Valid = (props) => {
    const data = props.location.state.userData;
    const id = props.location.state.idNumber
    const {firstName, lastName, dateOfBirth, image} = data;
    // // const picture = data.photo
    // const photo =  `data:image/jpg;base64,${picture}`
    const pageType = props.location.state.pageType;


  return (
    <>
      <div className="col-md-12 valid-logo">
        <Logo />
      </div>
      <div className="contain valid-container">
        {/* <div className="row"></div> */}
        <div className="row valid">
          <div className="col-md-4 ">
            <div className="card card-box">
              <div className="card-body">
                {pageType=== "PvcForm"? <img src= { man } alt="DP" className="img-fluid" id="man"  style={{ width:"100%", height:"100%"}}/> :   <img src= { image } alt="DP" className="img-fluid" id="man"  style={{ width:"100%", height:"100%"}}/> } 
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 details">
            <h6>Candidate's Data Verified</h6>
            <div className="deet">
              <p>  <span> Candidate's Lastname:</span> <br /> {lastName} </p>
                            <p>  <span> Candidate's Firsttname:</span> <br /> {firstName} </p>
                            <p>  <span> Candidate's Date Of Birth:</span> <br /> {dateOfBirth} </p>
                            <p>  <span> Identification Number:</span> <br /> {id} </p>
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

          <div className="col-md-3 bckimg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Valid;
