
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
      <div className="">
       
          <img className="pointer" alt="" onClick={this.navigate} src={"https://media3.giphy.com/media/26xBzu2ogAunL19hS/giphy.gif?cid=790b76115d249e08395a2f6c550696b4&rid=giphy.gif"} />
          <h1>gggg</h1>
      </div>
    );
  }
}
