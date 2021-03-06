
import "./idVerification.scss";
import Logo from "../../component/Logo/logo"
import { useState } from "react";
import NinForm from "./IdTypes/nin/ninForm";
import BvnForm from "./IdTypes/bvn/bvnForm";
import NdlForm from "./IdTypes/ndl/ndlForm";
import PvcForm from "./IdTypes/pvc/pvcForm";
import NipForm from "./IdTypes/nip/nip";



const Idverification = () => {
    const [formType, setFormType ]= useState("NIN")
    return ( 
        <><div className="container-fluid" id="main">
            <Logo/>
            <div className="row id-row">
                <div className="col-md-5 id-veri-content">
                    <h3>Knowing your <br /> customers has never been so <span>secured.</span></h3>
                    <p>To continue, enter candidate's details you want to verify</p>
                    <div className="col-md-12 form_radio">
                        <div className="form-check form-check-inline">
                        <input defaultChecked className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={()=>setFormType("NIN")} />
                        <label className="form-check-label" >NIN</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={() => setFormType("BVN")}/>
                        <label className="form-check-label" >BVN</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={() => setFormType("NDL")}/>
                        <label className="form-check-label" >NDL</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" onChange={() => setFormType("PVC")}/>
                        <label className="form-check-label" >PVC</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" onChange={() => setFormType("NIP")}/>
                        <label className="form-check-label" >NIP</label>
                        </div>
                    </div> 
                    {formType === "NIN" && <NinForm />}
                    {formType === "BVN" && <BvnForm />}
                    {formType === "NDL" && <NdlForm />}
                    {formType === "PVC" && <PvcForm />}
                    {formType === "NIP" && <NipForm />}
                </div>
                <div className="col-md-5" id="id_img">
                   <div className="phone"></div>
                   
                </div>
            </div>
            
        </div>
        
        </>
     );
}
 
export default Idverification;