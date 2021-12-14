import "./Errorpage.scss";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return ( 
      <div className="not-found">
      <h1>Oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3>
      <p>The page you are looking for might be removed or temporarily unavailable</p>
      <Link to='/'>GO TO HOMEPAGE</Link>
  </div>
     );
}
 
export default ErrorPage;