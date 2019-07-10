
import React, { Component } from "react";

export default class Navbar extends Component {

  navigate = e => {
    e.target.style.transform = "scale(5, 10)";
    e.target.style.transition = "transform 0.5s"
    setTimeout(() => {
      window.location.href = 'Menu';
    }, 200)
    
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-ocean">
          <img className="pointer" alt="" onClick={this.navigate} src={"https://66.media.tumblr.com/c0269fe4da420f2670d86c5972a04341/tumblr_mogpl1mQDn1sqxhneo1_500.gif"} />
        </nav>
          
      </div>
    );
  }
}
