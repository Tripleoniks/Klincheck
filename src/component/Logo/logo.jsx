import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../images/logo.png";
import "./logo.scss"

const Logo = () => {
    return ( 
        <Link to="/"> <div id="logo"> <img src={logo} className="img-fluid" alt="logo" /> </div></Link>
       
     );
}
 
export default Logo;