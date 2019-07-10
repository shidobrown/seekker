
import React, { Component } from 'react'
import { Color } from "cesium";
import { Viewer, Entity } from "resium";
import Navbar3 from './utility/Navbar3';
export default class World extends Component {
    render() {
        return (
            <div className="background-world">
        
            <div className="container-fluid-test">
                  <div class="w3-container">
  <h1><Navbar3/></h1>
</div>  </div>
             <Viewer />
            </div>
        )
    }
}





