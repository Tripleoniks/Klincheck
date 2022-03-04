import CustomButton from "../../component/customButton/customButton";
import Logo from "../../component/Logo/logo";
import "./certificateVerification.scss"

const CertificateVerification = () => {
    return ( 
        <div className="container-fluid" id="certi-home">
            <Logo/>
            <div className="row certi-row">
                <div className="left col-md-6">
                    <h3>Verify academic certificate</h3>
                    <form action="">
                    <div className="input-box">
                    <p><i class="fa-solid fa-upload"></i>Upload copy of the certificate you want verify</p>
                    <input type="file" name="" id="certi-input"  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" required/>
                    </div> <br /> <br />
                    <CustomButton>Next</CustomButton>
                    </form>
                   
                </div>
                <div className="right col-md-6">

                </div>
            </div>
        </div>
     );
}
 
export default CertificateVerification;