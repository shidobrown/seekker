import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Profile extends Component {

  
  render() {
    return (
  
      <div className="background-fluid">
        <div class="container">
          <div class="d-flex justify-content-center h-100">
            <div class="card">
              <div class="card-header">
                <h3>Sign In</h3>
                <div class="d-flex justify-content-end social_icon">
                  <span>
                    <i class="fab fa-facebook-square" />
                  </span>
                  <span>
                    <i class="fab fa-google-plus-square" />
                  </span>
                  <span>
                    <i class="fab fa-twitter-square" />
                  </span>
                </div> 
                
                
              </div>
              <div class="card-body">
                <form>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-key" />
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div class="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Login"
                      class="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-center links">
                  Don't have an account?<Link to="Register">Sign Up</Link> 
                </div>
                <div class="d-flex justify-content-center">
                  <Link to="/">Forgot your password?</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
