import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Comp_Icon from "../../assets/images/dzartek_logo.jpg";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {
    menuActive: false
  };

  handleMenuClick = () => {
    this.setState({
      menuActive: (this.menuActive = !this.menuActive)
    });
  };

  renderContent() {
    console.log(`navbar render ${JSON.stringify(this.props.auth)}`);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-li">
            <NavLink className="li-navlink" to="/signin">
              Sign In
            </NavLink>
          </li>
        );
      default:
        // return "already logged in";
        return (
          <Fragment>
            <li className="nav-li">
              <NavLink className="li-navlink" to="/resources">
                Resources
              </NavLink>
            </li>
            <li className="nav-li">
              <a className="li-navlink" href="/api/logout">
                Sign out
              </a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <header className="header-container">
        <h2 className="logo">
          <img className="h2-image" src={Comp_Icon} alt="Logo" />
        </h2>

        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle "
          onClick={this.handleMenuClick}
        />
        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink className="li-navlink" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink className="li-navlink" to="/blog">
                Blog
              </NavLink>
            </li>
            {this.renderContent()}
          </ul>
        </nav>

        <label
          htmlFor="nav-toggle"
          className={
            "nav-toggle-label " + (this.state.menuActive ? "active" : "")
          }
        >
          <span></span>
        </label>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);
