import React, { Component } from 'react'
// $('.menu').on('click', function() {

//     $('.portfolio-items').addclassName('animated zoomOutDown');
//     setTimeout(function() {
//       $('.portfolio-items').removeclassName('zoomOutDown').addclassName('fadeInLeft');
//     }, 1000)
//   });
export default class Profile1 extends Component {
    render() {
        return (
            <div>
              <div className="container">
                <div className="browser">
                  <div className="ropes">
                    <div className="rope">
                      <div className="rope-holder">
                      </div>
                      <div className="main-rope">
                        <div className="hole"></div>
                      </div>
                    </div>
                    <div className="rope">
                      <div className="rope-holder">
                      </div>
                      <div className="main-rope">
                        <div className="hole"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hamburger-set">
                    <div className="hamburger"> </div>
                    <div className="hamburger"> </div>
                    <div className="hamburger"> </div>
                  </div>
                  <div className="card-info">
                    <div className="dribble-title">pager</div>
                    <div className="author-info">
                      <div className="author-name">
                        Jaylen Phipps
                      </div>
                      <div className="author-title">
                        FRONT-END DEVELOPER
                      </div>
                    </div>
                    <div className="card-end"> </div>
                  </div>
                  <div className="portfolio">
                    <div className="menu-filter">
                      <div className="menu">SHOTS</div>
                      <div className="menu">DESIGNERS</div>
                      <div className="menu">TEAMS</div>
                    </div>
                    <div className="portfolio-items">
                      <div className="item"><i className="fa fa-2x fa-link"></i>
                      </div>
                      <div className="item"><i className="fa fa-2x fa-link"></i>
                      </div>
                      <div className="item"><i className="fa fa-2x fa-link"></i>
                      </div>
                      <div className="item"><i className="fa fa-2x fa-link"></i>
                      </div>
                      <div className="item"><i className="fa fa-2x fa-link"></i>
                      </div>
                      <div className="item"><i className="fa fa-2x fa-link"></i>
                      </div>
                    </div>
                  </div>
                  <div className="hover-me">Hover and click on the menu items</div>
                  <div className="too-low">Height is too low, please resize your window</div>
                  <div className="circle-set">
                    <div className="circle circle-pink"> </div>
                    <div className="circle circle-orange"> </div>
                    <div className="circle circle-green"> </div>
                  </div>
                  <div className="tooltip right">
                    <div className="tooltip-inner"></div>
                  </div>
                </div>
                <br />  
                
              </div>
            </div>
        )
    }
}

