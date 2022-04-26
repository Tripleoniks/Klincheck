import "./valid.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo";
import man from "../../images/man.png"




const Valid = (props) => {
    
    const data = props.location.state.userData;
    const id = props.location.state.idNumber
    const {firstName, lastName, dateOfBirth, image} = data;
    // // const picture = data.photo
    // const photo =  `data:image/jpg;base64,${picture}`
    const pageType = props.location.state.pageType;
    
  
    
  
    return ( 
        <>
        <div className="col-md-12"><Logo /></div>
        <div className="contain valid-container">
            {/* <ComponentToPrint ref={componentRef} /> */}
            <div className="row">
                
            </div>
            <div className="row valid mx-auto ">
                <div className="col-md-4 ">
                <div className="card card-box" >
                    <div className="card-body">
                        {pageType=== "PvcForm"? <img src= { man } alt="DP" className="img-fluid" id="man"  style={{ width:"300px", height:"300px"}}/> :   <img src= { image } alt="DP" className="img-fluid" id="man"  style={{ width:"300px", height:"300px"}}/> } 
                    </div>
                    </div>
                </div>
                <div className="col-md-4 details"> 
                    <h6>Candidate's Data Verified</h6>
                    <div className="deet">
                            <p>  <span> Candidate's Lastname:</span> <br /> {lastName} </p>
                            <p>  <span> Candidate's Fastname:</span> <br />{firstName}</p>
                            <p>  <span> Candidate's Date Of Birth:</span> <br />{dateOfBirth} </p>
                            <p>  <span> Identification Number:</span> <br />{id} </p>
                     </div>

                     <div className="share">
                         <form action="#" >
                         <div className="sharethis-inline-share-buttons"></div>
                         </form>
                     </div>
                    
                </div>
                
                <div className="col-md-3 bckimg">
                   
                </div>
            </div>
        </div>
        <Footer /></>
     );
}
 
export default Valid;


