import "./valid.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo";
import { useReactToPrint } from "react-to-print";
import man from "../../images/man.png"
import PvcForm from "../Homepage/IdTypes/pvc/pvcForm";
import NinForm from "../Homepage/IdTypes/nin/ninForm";
import shareButton from "../../component/shareButton/shareButton";
import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';


const Valid = (props) => {
    
    const data = props.location.state.userData;
    const id = props.location.state.idNumber
    const {first_name, last_name, dob} = data;
    const picture = data.photo
    const photo =  `data:image/jpg;base64,${picture}`
    const pageType = props.location.state.pageType;
    
  
    
  
    return ( 
        <><div className="container-fluid">
            {/* <ComponentToPrint ref={componentRef} /> */}
            <div className="row">
                <div className="col-md-12"><Logo /></div>
            </div>
            <div className="row valid mx-auto ">
                <div className="col-md-4 ">
                <div className="card card-box" >
                    <div className="card-body">
                        {pageType=== "PvcForm"? <img src= { man } alt="DP" className="img-fluid" id="man"  style={{ width:"300px", height:"300px"}}/> :   <img src= {pageType === "NinForm"? photo : picture } alt="DP" className="img-fluid" id="man"  style={{ width:"300px", height:"300px"}}/> } 
                    </div>
                    </div>
                </div>
                <div className="col-md-4 details"> 
                    <h6>Candidate's Data Verified</h6>
                    <div className="deet">
                            <p>  <span> Candidate's Lastname:</span> <br /> {last_name} </p>
                            <p>  <span> Candidate's Fastname:</span> <br />{first_name}</p>
                            <p>  <span> Candidate's Date Of Birth:</span> <br />{dob} </p>
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


