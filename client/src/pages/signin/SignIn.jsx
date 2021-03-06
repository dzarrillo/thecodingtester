import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.css";
import "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../redux/user/actions/userAction";

// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fullName: null,
      email: null,
      password: null,
      errors: {
        // fullName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      // case "fullName":
      //   errors.fullName =
      //     value.length < 5 ? "Full Name must be 5 characters long!" : "";
      //   break;
      case "email":
        //errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
      this.setState({ errors, [name]: value });
    });
  };

  handleSubmit = async event => {
    //event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      // post data
      try {
        
        const response = await axios.post("/api/sign_in", {
          // name: this.state.fullName,
          email: this.state.email,
          password: this.state.password
        });
        console.log(`SignInn ${response.status}`)
        if(response.status === 200) {
          await this.props.fetchUser();
          // Does not refresh navbar with logout menuitem
          this.props.history.push("/resources"); 
          //window.location = "/home";
          
         }
      } catch (error) {
        console.log(`Axios post failed: ${error}`);

        let errors = this.state.errors;
        errors.email = "Email or password not valid!";
        this.setState({ errors, email: "" }, () => {
          
          this.setState({ errors, email: "" });
        });
                
      }
    } else {
      console.error("Invalid Form");
    }
  };
  
  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <div className="signin-container">
          <form className="form-container" action="/action_page.php">
            <h1 className="form-title">Sign-In</h1>

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
              {errors.email.length > 0 && (
                <span className="error error-msg">{errors.email}</span>
              )}
              )}
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
              {errors.password.length > 0 && (
                <span className="error error-msg">{errors.password}</span>
              )}
            </div>

            <div className="input-container">
              <button
                type="button"
                className="btn-signin"
                onClick={this.handleSubmit}
              >
                Sign in
              </button>
            </div>
            <div className="input-container">
              <a href="/register">If new user register here</a>
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
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, actions)(SignIn);
