import Logo from "../../component/Logo/logo";
import "./previousPOW.scss"
import CustomButton from "../../component/customButton/customButton";


const PreviousPlace = () => {
    return ( 
        <div className="container-fluid" id="previous-home">
            <Logo/>
            <div className="row previous-row">
                <div className="left col-md-6">
                    <h3>Previous place of work</h3>
                    <form >
                    <div class="form-group">
                    <label>Staff Name</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>Company's name</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>Company's Address</label>
                    <input type="tel" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>Position</label>
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
 
export default PreviousPlace;