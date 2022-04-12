
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IdVerification from './pages/IdVerification/idVerification';
import Valid from './pages/Validpage/valid';
import Invalid from './pages/Invalidpage/invalid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer/footer';
import ErrorPage from './pages/NotFound/Errorpage';
import Homepage from './pages/HomePage/homePage';
import AddressVerification from './pages/addressVerification/addressVerification';
import CertificateVerification from './pages/certificateVerification/certificateVerification';
import PersonVerification from './pages/personVerification/personVerification';
import CriminalRecord from './pages/criminalRecord/criminalRecord';
import PreviousPlace from './pages/previousPOW/previousPOW';
import ChoosePayment from './pages/payment/choosePayment';
import Signin from './pages/signin/signin';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ToastContainer position="top-center" />
        <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/idVerification" component={IdVerification} />
              <Route exact path="/address" component={AddressVerification} />
              <Route exact path="/certificate" component={CertificateVerification} />
              <Route exact path="/person" component={PersonVerification} />
              <Route exact path="/criminal" component={CriminalRecord} />
              <Route exact path="/previous-workplace" component={PreviousPlace} />
              <Route exact path="/choose-payment" component={ChoosePayment} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/valid" component={Valid} />
              <Route exact path="/invalid" component={Invalid} />
              <Route exact path="*" component={ErrorPage} />
        </Switch>
        <Footer/>
        </div>
        </BrowserRouter>
 
  );
}

export default App;
