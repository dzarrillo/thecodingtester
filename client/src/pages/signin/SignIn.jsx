import React, { Component, Fragment } from "react";
import "./SignIn.css";
import "react-bootstrap";

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  }

  handleOnClickSignIn() {
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
                placeholder="Full Name"
                name="fullName"
                onChange={this.handleChange} 
                noValidate
              />
            </div>

            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="email"
                onChange={this.handleChange} 
                noValidate
              />
            </div>

            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange} 
                noValidate
              />
            </div>
            <div className="input-container">
              <button
                type="button"
                className="btn-signin"
                onClick={this.handleOnClickSignIn}
              >
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
