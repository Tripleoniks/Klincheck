import CustomButton from "../../component/customButton/customButton";
import Logo from "../../component/Logo/logo";
import "./personVerification.scss";
import { useState } from "react";



const PersonVerification = () => {
    const [personType, setPersonType ]= useState("guarantor")
    return ( 
            <div className="container-fluid" id="person-home">
                <Logo/>
                <div className="row person-row">
                    <div className="left col-md-6">
                    <h3>Verify a person</h3>

                    <form >
                    <select  id="person-select" required onChange={(e)=> setPersonType(e.target.value) }>
                    <option value="guarantor">Guarantor</option>
                    <option value="reference">Reference</option>
                    </select>
                    <div class="form-group">
                    <label>Employee's Name</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>{personType === "guarantor" ? "Guarantor's" : "Reference"} Name</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <div class="form-group">
                    <label>Occupation</label>
                    <input type="text" class="form-control" required/>
                    </div>
                    <CustomButton>Next</CustomButton>
                    </form>
                    </div>
                    <div className="right col-md-5">

                    </div>
                </div>
            </div>
     );
}
 
export default PersonVerification;