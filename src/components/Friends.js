import React, { Component } from 'react'
import $ from 'jquery'; 

export default class friends extends Component {
    render() {

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
          
          var searchBar = $("#searchBar");
          var search = $('.search');
          
          searchBar.focusin(function() {
              search.addClass('active');
          });
          searchBar.focusout(function() {
              search.removeClass('active');
          });


        return (
     <div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div id="output">
          <div className="search">
            <i className="fa fa-fw fa-search" />
            <input id="searchBar" type="text" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
              matt
            </div>
            <span className="indicator online" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
          cas
            </div>
            <span className="indicator online" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
            joe
            </div>
            <span className="indicator online" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
              ryan
            </div>
            <span className="indicator" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
             susie
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
              mary
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
       jade
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
      dave
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
b               ben
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
          jenna
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
           ramon
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
            brad
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
             chad
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
     mark
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
            lewis
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="online">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
             katie
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="offline">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
            john
            </div>
            <span className="indicator" />
          </div><div className="row friend" data-toggle="tooltip" data-placement="right" title="offline">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
              edo
            </div>
            <span className="indicator" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="offline">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
              marth
            </div>
            <span className="indicator online" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="offline">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
            nick
            </div>
            <span className="indicator away" />
          </div>
          <div className="row friend" data-toggle="tooltip" data-placement="right" title="offline">
            <img src="http://lorempixel.com/500/500/people/" alt="" />
            <div className="title">
              ryan
            </div>
            <span className="indicator" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
