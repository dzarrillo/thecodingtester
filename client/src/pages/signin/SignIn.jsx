import React, { Component, Fragment } from "react";
import "./SignIn.css";
import "react-bootstrap";

class SignIn extends Component {
  
  handleOnClickSignIn(){
    // e.preventDefault();
    console.log("OnClick signin!!");
  }

  render() {
    return (
      <Fragment>
        <div className="signin-container">
          <form className="form-container" action="/action_page.php">
            <h1 className="form-title">Sign-In</h1>
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Username"
                name="usrnm"
              />
            </div>

            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="psw"
              />
            </div>
            <div className="input-container">
              <button type="button" className="btn-signin" onClick={this.handleOnClickSignIn}>
                Sign in
              </button>
            </div>
            <div className="input-container">
              <a href="/auth/google" className="google btn-signin">
                <i className="fa fa-google fa-fw"></i> Sign in with Google
              </a>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignIn;
