import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar3 from "./Navbar3";


export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="wrapper">
          <header>
            <h1></h1>
            <ul class="nav">

            </ul>
            <h2></h2>
          </header>
          <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  </form>
            <Navbar3 />
          <main>
            <section>
              <p>A nice article or something.</p>
            </section>
            <section>
              <p>Perhaps a fancy image here.</p>
            </section>
            <section>
              <p>More awesome content.</p>
            </section>
          </main>
          <footer>A footer that will always stay down.</footer>
        </div>
        
      </div>
    );
  }
}
