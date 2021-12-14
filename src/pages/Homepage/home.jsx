
import "./home.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo"
import { useState } from "react";
import NinForm from "./IdTypes/nin/ninForm";
import BvnForm from "./IdTypes/bvn/bvnForm";
import NdlForm from "./IdTypes/ndl/ndlForm";
import PvcForm from "./IdTypes/pvc/pvcForm";
import NipForm from "./IdTypes/nip/nip";



const Home = () => {
    const [formType, setFormType ]= useState("NIN")
    return ( 
        <><div className="container-fluid">
            <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-4  " id="main">
                     <Logo/>
                    <h3>Knowing your <br /> customers has never been so <span>secured.</span></h3>
                    <p>To continue, enter candidate's details you want to verify</p>
                    <div className="col-md-12 form_radio">
                        <div class="form-check form-check-inline">
                        <input defaultChecked class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={()=>setFormType("NIN")} />
                        <label class="form-check-label" for="inlineRadio1">NIN</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={() => setFormType("BVN")}/>
                        <label class="form-check-label" for="inlineRadio2">BVN</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={() => setFormType("NDL")}/>
                        <label class="form-check-label" for="inlineRadio3">NDL</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" onChange={() => setFormType("PVC")}/>
                        <label class="form-check-label" for="inlineRadio4">PVC</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" onChange={() => setFormType("NIP")}/>
                        <label class="form-check-label" for="inlineRadio5">NIP</label>
                        </div>
                    </div> 
                    {formType === "NIN" && <NinForm />}
                    {formType === "BVN" && <BvnForm />}
                    {formType === "NDL" && <NdlForm />}
                    {formType === "PVC" && <PvcForm />}
                    {formType === "NIP" && <NipForm />}
                    {/* <Footer /> */}
                </div>
                <div className="col-md-2 "></div>
                <div className="col-md-5 " id="home_img">
                   <div className="phone"></div>
                   
                </div>
            </div>
            
        </div>
        
        </>
     );
}
 
export default Home;