import logo from "../../images/logo.png";
import "./logo.scss"

const Logo = () => {
    return ( 
        <div id="logo"> <img src={logo} className="img-fluid" alt="logo" /> </div>
     );
}
 
export default Logo;