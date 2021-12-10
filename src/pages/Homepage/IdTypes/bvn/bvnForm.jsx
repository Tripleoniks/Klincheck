import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import "../../../../scss/form.scss";
import { toast } from 'react-toastify';
import ButtonLoader from '../../../../component/buttonLoader/buttonLoader';


/* Setting Parameter for request */

const config = {
    headers: {
       "Token": "74a6d2f5a88d5a864b4b93d278cefe7c",
       "Content-Type": "application/json"
       }
}

/* Getting input values from input fields & setting useState   */
const BvnForm = () => {
    const [bvnValue, setBvnValue] = useState("");
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
        "type": "ibvn", 
        "reference": bvnValue,
        "last_name": lastName,
        "first_name": firstName,
        "dob": dob,
        "subject_consent": true 
       }

/* -----------calling the Api------------------ */
       const verify = async (e) => {
        e.preventDefault()
        if (bvnValue.length ===11) {
            setErrMsg(false)
            setLoading(true)
            try {
                const {data} = await axios.post('https://api.youverify.co/v1/identities/candidates/check', userData, config)
                console.log(data)
                setLoading(false)
                if(data.status_code === 200) {
                     history.push('/valid', {userData: data?.data?.response, idNumber:bvnValue})
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
        if (firstName && lastName && dob && bvnValue && bvnValue.length ===11 && isChecked) {
            return <button className="form-control veri_btn" >{loading ? " verifying" : "verify"  }{loading && <ButtonLoader/>} </button>
        } else if (loading) {return <button className="form-control veri_btn" disabled >{loading && <ButtonLoader/>}{loading ? " verifying" : "verify"  } </button>
        } else return <button className="form-control noveri_btn" disabled >Verify</button>
    }
/*------------------------- Input Field------------------------------------- */
    return (
        <div>
        
        <form onSubmit={verify}>
        <div className="container-fluid form_area">
                     <div className="row">
                         <div className="col-md-6 co-12 text-center"><input type="text" className="input_area"  onChange={e => setFirstName(e.target.value)} placeholder="Candidate's Lastname"/> </div>
                         <div className="col-md-6 col-12 text-center"><input type="text" className="input_area"  onChange={e => setLastName(e.target.value)} placeholder="Candidate's Firstname"/>  </div>
                    </div>

                        <div className="row">
                        <div className="col-md-6 col-12 text-center"><input type="date" className="input_area"  onChange={e => setDOB(e.target.value)} /> </div>
                        <div className="col-md-6 col-12 text-center"> <input type="tel" className="input_area"  value={bvnValue} placeholder="Bank Verification No" maxLength="11" onChange={(e)=> setBvnValue(e.target.value)} /> </div>
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

            <div className="err">{errMsg && <p style={{color: "crimson", fontSize: "12px", marginTop: "7px"}}>BVN must be 11 digits</p>}</div>
            <VerifyButton />
        </form>
    </div>
    )
}

export default BvnForm
