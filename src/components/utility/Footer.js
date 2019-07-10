import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
   
<footer className="page-footer font-small special-color-dark pt-4">

  
  <div className="container">

  
    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <Link className="btn-floating btn-fb mx-1">
          <i className="fab fa-facebook-f"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-tw mx-1">
          <i className="fab fa-twitter"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-gplus mx-1">
          <i className="fab fa-google-plus-g"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-li mx-1">
          <i className="fab fa-linkedin-in"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-dribbble mx-1">
          <i className="fab fa-dribbble"> </i>
        </Link>
      </li>
    </ul>
  

  </div>


 
  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <Link href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</Link>
  </div>


</footer>

          
      </div>
    );
  }
}
