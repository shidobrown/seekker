import React from "react";
import "./App.css";
import "./Profile.css"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import World from "./components/World";
import Library from "./components/Library";
import Navbar from "./components/utility/Navbar";
import Footer from "./components/utility/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/World" component={World} />
        <Route exact path="/Library" component={Library} />
        <Route exact path="/Profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
