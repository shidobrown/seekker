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
import Profile from "./components/Profile";
import Menu from "./components/spring/Menu";
import Feed from "./components/Feed";
import Menumini from "./components/spring/Menumini";
import Register from "./components/Register";




function App() {
  return (
    <Router>
     
      
      <Navbar/>
    
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/World" component={World} />
  
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/" component={Menu} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Feed" component={Feed} />
        <Route exact path="/Menumni" component={Menumini} />

      </Switch>

    </Router>
  );
}

export default App;
