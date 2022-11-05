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
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeContext from './contextapi/ThemeContext';
import { persistor, store } from './redux/Store';
import PublicRoute from './Route/PubliceRoute';
import PrivateRoute from './Route/PrivateRoute';


function App() {
  return (
    <>
     <SnackbarProvider maxSnack={3}>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <ThemeContext>
      <Header />
      
      <Switch>
        <PublicRoute path={"/"} exact component={Home}/>
        <PublicRoute path={"/fruits"} exact component={Fruits}/>
        <PrivateRoute path={"/services"} exact component={Services}/>
        <PrivateRoute path={"/contact"} exact component={Contact}/>
        <PublicRoute path={"/login_signup"} exact resticted="true" component={Login_signup}/>
        <Route path={"/refexample"} exact component={Refexample}/>
      </Switch>

      <Footer />
      </ThemeContext>
      </PersistGate>
      </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
