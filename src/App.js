import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/layout/Home/Home.js"
import Loader from './component/layout/Loader/Loader.js';

function App() {

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","chilanka"],
      }
    });
  },[]);
  
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Home} />
      <Footer/>
    </Router>
  );
}

export default App;
