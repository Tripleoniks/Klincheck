import "./homePage.scss"
import { Link } from "react-router-dom";
import Logo from "../../component/Logo/logo";
import { useEffect, useState } from "react";
import axios from "axios";




const Homepage = () => {
    const [price, setPrice] = useState("");

    const getPrice = async () => {
        const price = await axios.get(
          "http://aledoyhost.com/klinsheet_api/api_price/items/read.php"
        );
        setPrice(price?.data?.items[0]);
      };
     const {criminal_price, academic_price, guarantor_price } = price;

     useEffect(() => {
        getPrice();
      }, []);
    return ( 
        
            <>
            <div className="container-fluid" id="home-main">
            <Logo/>
                <div className="row home-row">
                    {/* <div className="col-md-1"></div> */}
                    <div className="col-md-5" >
                        
                         <div className="head-text">
                         <h3>What can we <br /> Help you with?</h3> 
                         </div>

                        <ul>
                            <li> <Link to="/idVerification"><i className="fa-solid fa-right-long"></i>  ID Verification <span className="free-text">Free</span> </Link></li>
                            <li> <Link to="/address"><i className="fa-solid fa-right-long"></i>  Verify an Address <span className="free-text">Free</span> </Link></li>
                            <li> <Link to="/certificate"><i className="fa-solid fa-right-long"></i>  Verify Academic Certificate <span className="free-text">₦ {academic_price}</span> </Link></li>
                            <li> <Link to="/person"><i className="fa-solid fa-right-long"></i>  Verify a Person - <span id="Guarantor">Guarantor, Ref, etc</span> <span className="free-text">₦ {guarantor_price}</span></Link></li>
                            <li> <Link to="/criminal"><i className="fa-solid fa-right-long"></i>  Confirm a Person's Criminal Record  <span className="free-text">₦ {criminal_price}</span>  </Link></li>
                            <li> <Link to="/previous-workplace"><i className="fa-solid fa-right-long"></i>  Previous Place of Work <span className="free-text">Free</span> </Link></li>  
                        </ul>
                    </div>
                    <div className="col-md-7" id="home_img">
                       <div className="phone"></div>
                    </div>
                </div>
            </div>
            </>
     );
}
 
export default Homepage;