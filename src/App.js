import React from "react";
import "./App.css";
import "./Profile.css"; 
import "./Feed.css"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import World from "./components/World";
import Library from "./components/Library";
import Navbar from "./components/utility/Navbar";
import Footer from "./components/utility/Footer";
import Profile from "./components/Register";
import Menu from "./components/spring/Menu";
import Feed from "./components/Feed";




function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/World" component={World} />
        <Route exact path="/Library" component={Library} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/" component={Menu} />
        <Route exact path="/Register" component={Profile} />
        <Route exact path="/Feed" component={Feed} />
      </Switch>
     
    </Router>
  );
}

export default App;
