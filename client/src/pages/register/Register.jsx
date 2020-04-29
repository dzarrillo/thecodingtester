import React, { Component, Fragment } from "react";
import "./Register.css";
import "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      password2: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
      userStatus: null,
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
    this.props.history.push("/signin");
  }
  handleShow = () => this.setState({ show: true }); 

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        //errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "password2":
        errors.password2 =
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

  handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      // post data
      try {
        const response = await axios.post("/api/register", {
          name: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
        });
        console.log(`returned data: ${response.data}`);
        this.setState({ userStatus: response.data});
        this.handleShow();
        if (response.status === 200) {
          // I need to change this to browserhistory push
          // window.location = "/signin";
          //this.props.history.push("/signin");
        }
      } catch (error) {
        console.log(`Axios post failed: ${error.response.data}`);
        // this.setState .....
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
            <h1 className="form-title">Register</h1>
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
              {errors.fullName.length > 0 && (
                <span className="error error-msg" style={{ color: "red" }}>
                  {errors.fullName}
                </span>
              )}
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
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error error-msg">{errors.password2}</span>
              )}
            </div>

            <div className="input-container">
              <button
                type="button"
                className="btn-signin"
                onClick={this.handleSubmit}
              >
                Register
              </button>
            </div>
          </form>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register Information</Modal.Title>
            </Modal.Header>

            <Modal.Body  >
              <p>{this.state.userStatus}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default Register;
