import React, { Component } from 'react'









$('.menu').on('click', function() {

    $('.portfolio-items').addClass('animated zoomOutDown');
    setTimeout(function() {
      $('.portfolio-items').removeClass('zoomOutDown').addClass('fadeInLeft');
    }, 1000)
  });
export default class Profile1 extends Component {
    render() {
        return (
            <div>
                <div class="container"/>
  <div class="browser">
    <div class="ropes">
      <div class="rope">
        <div class="rope-holder">

        </div>
        <div class="main-rope">
          <div class="hole"></div>
        </div>
      </div>

      <div class="rope">
        <div class="rope-holder">

        </div>
        <div class="main-rope">
          <div class="hole"></div>
        </div>
      </div>
    </div>
    <div class="hamburger-set">
      <div class="hamburger"> </div>
      <div class="hamburger"> </div>
      <div class="hamburger"> </div>
    </div>

    <div class="card-info">
      <div class="dribble-title">DRIBBBLE</div>
      <div class="author-info">
        <div class="author-name">
          BRUCE WAYNE
        </div>
        <div class="author-title">
          FRONT-END DEVELOPER
        </div>
      </div>
      <div class="card-end"> </div>
    </div>
    <div class="portfolio">

      <div class="menu-filter">
        <div class="menu">SHOTS</div>
        <div class="menu">DESIGNERS</div>
        <div class="menu">TEAMS</div>
        
      </div>
      <div class="portfolio-items">
        <div class="item"><i class="fa fa-2x fa-link"></i>
        </div>
        <div class="item"><i class="fa fa-2x fa-link"></i>
        </div>
        <div class="item"><i class="fa fa-2x fa-link"></i>
        </div>
        <div class="item"><i class="fa fa-2x fa-link"></i>
        </div>
        <div class="item"><i class="fa fa-2x fa-link"></i>
        </div>
        <div class="item"><i class="fa fa-2x fa-link"></i>
        </div>
      </div>

    </div>
    <div class="hover-me">Hover and click on the menu items</div>
    <div class="too-low">Height is too low, please resize your window</div>
    <div class="circle-set">
      <div class="circle circle-pink"> </div>
      <div class="circle circle-orange"> </div>
      <div class="circle circle-green"> </div>
    </div>
    <div class="tooltip right">
      <div class="tooltip-inner"></div>
    </div>
  </div>
  <br>
  
            </div>
        )
    }
}

