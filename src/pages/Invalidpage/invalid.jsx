import "./invalid.scss";
import Footer from "../../component/Footer/footer";
import Logo from "../../component/Logo/logo";
import ShareButtons from "../../component/shareButton/shareButton";


const Invalid = () => {
    return ( 
        <><div className="container-fluid">
        <div className="row">
            <div className="col-md-12"><Logo /></div>
        </div>
        <div className="row valid mx-auto ">
            <div className="col-md-4 ">
            <div className="card card-box bxx" >

                </div>
            </div>
            <div className="col-md-4 details"> 
                <h6 className='inv'>Candidates Data NOT Verified</h6>
                <div className="deet">
                    <p>Data not found</p>
                 </div>

                 <div className="share_">
                     <form action="#">
                        
                     <div className="sharethis-inline-share-buttons"></div>
                     </form>
                 </div>
                
            </div>
            
            <div className="col-md-3 backimg">
               
            </div>
        </div>
    </div>
    <Footer /></>
     );
}
 
export default Invalid;