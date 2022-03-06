import { useState } from "react";
import CustomButton from "../../component/customButton/customButton";
import Logo from "../../component/Logo/logo";
import "./choosePayment.scss";
import Modal from "react-modal"


const ChoosePayment = () => {

    const [payment, setPayment] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(payment === "transfer"){
        //     console.log("transfer")
        // }
    }
    const handleClick = () => {
        setModalIsOpen(true) 
    }

    return ( 
        <div className="container-fluid" id="payment-home">
            <Logo/>
            <div className="row payment-row">
                <div className="left col-md-6">
                    <h3>Choose payment method below</h3>
                    <form onSubmit={handleSubmit}>
                    <div className="select-div">
                    <select  id="transfer-select" required onChange={(e)=> setPayment(e.target.value)}>
                    <option value="paystack">Paystack</option>
                    <option value="transfer">Bank Transfer</option>
                    </select>
                    </div>
                    {payment === "transfer" ? 
                    <div>
                        <p>Kindly make your transfer to <br />
                            the account details below:</p>
                            <p>Bank Name: GTB <br />
                            Account Name: Dewunmi John <br />
                            Account Number: 0987654321 <br />
                            </p>
                            
                    </div> :
                    null}
                    {payment === "transfer" ? <CustomButton onClick={handleClick}>Click here to Send payment receipt</CustomButton> : <CustomButton>Pay</CustomButton>}
                    </form>

                </div>
                
                <div className="right col-md-6" id="choose-payment-right">

                </div>
            </div>
            <Modal  isOpen={modalIsOpen} id="modal-box">
            <button className="close-modal" onClick={() => setModalIsOpen(false)}><i class="fa-solid fa-xmark"></i></button>
            <form onSubmit={handleSubmit}>
                    <div className="payment-input-box">
                    <p><i class="fa-solid fa-upload"></i>Upload transfer receipt</p>
                    <input type="file" name="" id="payment-certi-input"  accept=".jpg, .jpeg, .pdf, .png" required/>
                    </div> <br /> <br />
                    <CustomButton>Upload</CustomButton>
                    </form>
            </Modal>
        </div>
     );
}
 
export default ChoosePayment;