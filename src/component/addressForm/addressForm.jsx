import { useState } from "react";
import { example } from "../../services/postAddressData";
import CustomButton from "../customButton/customButton";
import "./addressForm.scss"

const AddressForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [landmark, setLandmark] = useState("");
    const [passport, setPassport] = useState("")
    const [loading, setLoading] = useState(false);
 
   
    const data = {
        "employees_Name": name,
        "employess_address" : address,
        "city": city,
        "state": state,
        "landmark": landmark,
        "passport": passport
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (name && address && city && state && landmark && passport) {
             example(data);
        }
    }
    

    return ( 
        
        <>
        <form onSubmit={handleSubmit} method="post" >
        <div class="form-group">
         <label>Employee's Name</label>
         <input type="text" class="form-control" onChange={e => setName(e.target.value) } required/>
         </div>
         <div class="form-group">
         <label>Employee's Address</label>
         <input type="text" class="form-control" onChange={e => setAddress(e.target.value)} required />
         </div>
         <div className="row add-row">
         <div class="form-group col-md-5">
         <label>City</label>
         <input type="text" class="form-control" onChange={e => setCity(e.target.value)} required />
         </div>
         <div class="form-group col-md-5">
         <label>State</label>
         <input type="text" class="form-control" onChange={e => setState(e.target.value)} required />
         </div>
         </div>
         <div className="row add-row">
         <div class="form-group col-md-5">
         <label>Nearest Bus Stop/Landmark</label>
         <input type="text" class="form-control" onChange={e => setLandmark(e.target.value)} required />
         </div>
         <div class="form-group col-md-5">
         <label>Upload Passport Photograph</label>
         <input type="file" class="form-control" capture="user" accept="image/*" onChange={e => setPassport(e.target.value)} required />
         </div>
         </div>
         <CustomButton>Next</CustomButton>
         
        </form></>
 
     );
}
 
export default AddressForm;