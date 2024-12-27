import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import WebFont from "webfontloader";
import React, { useEffect } from 'react';
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/layout/Home/Home.js"
import Loader from './component/layout/Loader/Loader.js';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search";
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store.js";
import { loadUser } from './actions/userAction.js';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
function App() {

  const {isAuthenticated,user} = useSelector(state=>state.user);

  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","chilanka"],
      },
    });
    store.dispatch(loadUser());
  },[]);
  
  return (
    <Router>
      <Header/>

      {isAuthenticated && <UserOptions user={user}/>}
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products}/>
      <Route path="/products/:keyword" component={Products}/>
      <Route exact path="/search" component={Search}/>

      <ProtectedRoute exact path="/account" component={Profile}/>

      <ProtectedRoute exact path="/me/update" component={UpdateProfile}/>

      <ProtectedRoute exact path="/password/update" component={UpdatePassword}/>

      <Route exact path="/password/forgot" component={ForgotPassword}/>

      <Router exact path="/password/reset/:token" component={ResetPassword}/>

      <Route exact path="/login" component={LoginSignUp}/>
      <Footer/>
    </Router>
  );
}

export default App;
