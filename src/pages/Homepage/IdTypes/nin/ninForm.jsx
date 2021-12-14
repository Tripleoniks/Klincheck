import React, {useState} from 'react';
import axios from 'axios';
import ButtonLoader from '../../../../component/buttonLoader/buttonLoader';
import { useHistory } from 'react-router';
import "../../../../scss/form.scss"
import { toast } from 'react-toastify';


/* Setting Parameter for request */
const config = {
    headers: {
       "Token": "74a6d2f5a88d5a864b4b93d278cefe7c",
       "Content-Type": "application/json"
       }
}


/* Getting input values from input fields & setting useState   */
const NinForm = () => {
    const [ninValue, setNinValue] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDOB] = useState("");
    const [errMsg, setErrMsg] = useState(false);
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
    
    
    
/* setting the parameter needed from the backend */
    const userData = { 
        "report_type": "identity", 
        "type": "nin", 
        "reference": ninValue,
        "last_name": lastName,
        "first_name": firstName,
        "dob": dob,
        "subject_consent": true 
       }

 /* -----------calling the Api------------------ */

       const verify = async (e) => {
        e.preventDefault()
        if (ninValue.length ===11) {
            setErrMsg(false)
            setLoading(true)
            try {
                const {data} = await axios.post('https://api.youverify.co/v1/identities/candidates/check', userData, config)
                console.log(data)
                setLoading(false)
                if(data.status_code === 200) {
                     history.push('/valid', {userData: data?.data?.response, idNumber:ninValue, pageType:"NinForm"})
                } 
            } catch (error) {
                if (error?.response?.data?.status_code === 404){
                    history.push('/invalid')
                }
                console.log(error)
                setLoading(false)
                toast.error(error?.response?.data?.message)
            }
           } else {
                setErrMsg(true)
           }
            }
 /*------------------- Verification Button --------------------------------- */ 
       function VerifyButton() {
        if (firstName && lastName && dob && ninValue && ninValue.length ===11 && isChecked) {
            return <button className="form-control veri_btn" >{loading ? " verifying" : "verify"  }{loading && <ButtonLoader/>} </button>
        } else if (loading) {return <button className="form-control veri_btn" disabled >{loading && <ButtonLoader/>}{loading ? " verifying" : "verify"  } </button>
        } else return <button className="form-control noveri_btn" disabled >Verify</button>
       }
/*------------------------- Input Field------------------------------------- */
    return (
        <div id="form1" className="container-fluid"> 
             <form onSubmit={verify}>
                  <div className="container-fluid form_area">
                     <div className="row form_row">
                         <div className="col-md-6 co-12 text-center"><input type="text" className="input_area" onChange={e => setLastName(e.target.value)} placeholder="Candidate's Lastname"/> </div>
                      
                         <div className="col-md-6 col-12 text-center rgt"><input type="text" className="input_area" onChange={e => setFirstName(e.target.value)} placeholder="Candidate's Firstname"/> </div>
                    </div>
                        
                        <div className="row">
                        <div className="col-md-6 col-12 text-center "><input type="date" className="input_area" onChange={e => setDOB(e.target.value)} /> </div>
                        
                        <div className="col-md-6 col-12 text-center rgt"> <input type="tel" className="input_area" value={ninValue} placeholder="National Identification No" maxLength="11" onChange={(e)=> setNinValue(e.target.value)} /> </div>
                         </div>
                         </div>
                         <div className="row">
                         <input id="consent-check" className="col-md-1 col-1" type="checkbox" value="check" checked={isChecked} onChange={handleOnChange}></input>
                         <label for="consent-check" className=" col-md-11 col-11 no-select">
                                By checking this box and clicking "Verify Candidate", you acknowledge
                                that you have gotten consent from the data subject to use their data
                                for verification purposes on our platform in accordance with our &nbsp;
                                <a href="https://klincheck.com/cookie.php" target="_blank">Privacy Policy</a></label>
                        </div>
                         
                <div className="">{errMsg && <p style={{color: "crimson", fontSize: "12px", marginTop: "7px"}}>NIN must be 11 digits</p>}</div>
                <VerifyButton className="text-center "/>
            </form>
            
        </div>
    )
}


export default NinForm
