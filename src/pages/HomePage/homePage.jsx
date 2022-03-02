import "./homePage.scss"
import { Link } from "react-router-dom";
import Logo from "../../component/Logo/logo";
import Idverification from "../IdVerification/idVerification";



const Homepage = () => {
    return ( 
            <><div className="container-fluid">
                <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-6" id="home-main">
                         <Logo/>
                         <div className="head-text">
                         <h3>What can we <br /> Help you with?</h3>
                         </div>

                        <ul>
                            <li> <Link to="/idVerification"><i class="fa-solid fa-right-long"></i>  ID Verification <span className="free-text">Free</span> </Link></li>
                            <li> <Link to="/idVerification"><i class="fa-solid fa-right-long"></i>  Verify an Address <span className="free-text">Free</span> </Link></li>
                            <li> <Link to="/idVerification"><i class="fa-solid fa-right-long"></i>  Verify Academic Certificate </Link></li>
                            <li> <Link to="/idVerification"><i class="fa-solid fa-right-long"></i>  Verify a Person - <span id="Guarantor">Guarantor, Ref, etc</span></Link></li>
                            <li> <Link to="/idVerification"><i class="fa-solid fa-right-long"></i>  Confirm a Person's Criminal Record  </Link></li>
                            <li> <Link to="/idVerification"><i class="fa-solid fa-right-long"></i>  Previous Place of Work <span className="free-text">Free</span> </Link></li>  
                        </ul>
                    </div>
                    <div className="col-md-5" id="home_img">
                       <div className="phone"></div>
                    </div>
                </div>
            </div>
            </>
     );
}
 
export default Homepage;