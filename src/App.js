import React from "react";
import  "react-redux";
import "./App.css";
import "./Profile.css"; 

import "./Friends.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import World from "./components/World";

import Footer from "./components/utility/Footer";

import Profile from "./components/Profile";
import Menu from "./components/spring/Menu";
import Feed from "./components/Feed";

import Register from "./components/Register";
import Friends from "./components/Friends";







function App() {
  return (
    <Router>
     
      
        <Menu/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/World" component={World} />
         
        <Route exact path="/Friends" component={Friends} />
        <Route exact path="/Profile" component={Profile} />
   
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Feed" component={Feed} />
    
      
      </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
