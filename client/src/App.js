import React, { Fragment, Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
// import LandingPage from "./pages/landingpage/LandingPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import SignIn from "./pages/signin/SignIn";
import About from "./pages/about/About";
import Exam from "./pages/exam/Exam";
import Blog from "./pages/blog/Blog";
import Help from "./pages/help/Help";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/layout/Layout";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import * as actions from "./redux/user/actions/userAction";

class App extends Component {
  componentDidMount() {
    // Get current user if already logged in.
    this.props.fetchUser();
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <Router>
          {/* <NavBar /> */}
            <Row>
              <NavBar />
              <Switch>
                {/* <Route exact path="/" component={LandingPage} /> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/about" component={About} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/exam" component={Exam} />

                <Route
                  exact
                  path="/resources"
                  render={() =>                     
                    this.props.auth ? <Resources /> : <Redirect to="/signin" />
                  }
                />
              </Switch>
              <Footer />
            </Row>
          </Router>
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(App);
