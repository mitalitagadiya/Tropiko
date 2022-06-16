import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Fruits from './Container/Fruits/Fruits';
import Services from './Container/Services/Services';
import Contact from './Container/Contact/Contact';
import Login_signup from './Container/Login_signup/Login_signup';
import Refexample from './Container/Refexample/Refexample';


function App() {
  return (
    <>
      <Header />
      
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/fruits"} exact component={Fruits}/>
        <Route path={"/services"} exact component={Services}/>
        <Route path={"/contact"} exact component={Contact}/>
        <Route path={"/login_signup"} exact component={Login_signup}/>
        <Route path={"/refexample"} exact component={Refexample}/>

      </Switch>

      <Footer />
    </>
  );
}

export default App;
