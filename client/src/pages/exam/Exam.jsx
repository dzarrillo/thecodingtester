import React, { Component, Fragment } from "react";
import Spinner from "../../components/loadingspinner/LoadingSoinner";
import "./Exam.css";
import axios from "axios";

class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // let exam = this.setState( { exams: await axios.get("http://localhost:5001/api/cssexam") } )
    const { typeoftest } = this.props.location.state;
    let exam = "";
    console.log(`Type of test: ${typeoftest} `);

    this.setState({isLoading: true});

    switch (typeoftest) {
      case "CSS":
        exam = "api/cssexam";
        break;
      case "HTML5":
        exam = "api/htmlexam";
        break;
      case "JAVASCRIPT":
        exam = "api/javascript";
        break;
      case "NODE.JS":
        exam = "api/node";
        break;
      case "EXPRESS":
        exam = "api/express";
        break;
      case "REACT.JS":
        exam = "api/react";
        break;
      case "MONGO":
        exam = "api/mongo";
        break;
      case "MYSQL":
        exam = "api/mysql";
        break;
      case "GITHUB":
        exam = "api/github";
        break;
      default:
        exam = "Exam not available";
        break;
    }

    this.getData(exam);
  }

  getData = async exam => {
    try {
      const questions = await axios.get(exam);
      this.setState({ exams: questions.data });
    } catch (error) {
      console.log(`axios failed to get data: ${error}`);
    } finally {
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container-page">
          <h1>Exams</h1>
          
          {!this.state.exams.length ? (
            <h1>No data to display</h1>
          ) : (
            this.state.exams.map(exam => {
              return <p key={exam.question}> {exam.question} </p>;
            })
          )}
          {this.state.isLoading ? <Spinner></Spinner> : ""}
        </div>
      </Fragment>
    );
  }
}

export default Exam;
