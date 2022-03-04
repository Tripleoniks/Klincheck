import "./addressVerification.scss"
import map from "../../images/map.png"
import Logo from "../../component/Logo/logo";
import AddressForm from "../../component/addressForm/addressForm";
import CustomButton from "../../component/customButton/customButton";


const AddressVerification = () => {


    return ( 
            <div className="container-fluid" id="add-home">
              <Logo/>
             
                <div className="row address-row">
                    <div className="left col-md-6">
                    <h3>Verify an Address</h3>
                   <AddressForm/>
                    </div>
                    <div className="right col-md-6"></div>
                </div>
              </div>
     );
}
 
export default AddressVerification;