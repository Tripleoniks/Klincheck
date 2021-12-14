
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Homepage/home';
import Valid from './pages/Validpage/valid';
import Invalid from './pages/Invalidpage/invalid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from 'http-errors';
import Footer from './component/Footer/footer';
import ErrorPage from './pages/NotFound/Errorpage';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ToastContainer position="top-center" />
        <Switch>
              <Route exact path="/" component={Home} />
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
