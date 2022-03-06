import Logo from "../../component/Logo/logo";
import "./criminalRecord.scss"
import CustomButton from "../../component/customButton/customButton";
import { useHistory } from "react-router-dom";


const CriminalRecord = () => {

    const history = useHistory();

const handleSubmit = (e) =>{
    e.preventDefault();
    history.push("/choose-payment")
    
}

    return ( 
        <div className="container-fluid" id="criminal-home">
            <Logo/>
            <div className="row criminal-row">
                <div className="left col-md-6">
                    <h3>Confirm a person's <br /> criminal check</h3>
                    <form onSubmit={handleSubmit}>
                    <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" required/>
                    </div>
                    <CustomButton>Next</CustomButton>
                    </form>

                </div>
                <div className="right col-md-5">

                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
     );
}
 
export default CriminalRecord;