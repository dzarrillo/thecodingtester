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
    console.log(`Type of test shit: ${typeoftest} `);

    this.setState({isLoading: true});

    switch (typeoftest) {
      case "CSS":
        exam = "api/cssexam";
        break;
      case "HTML5":
        exam = "api/htmlexam";
        break;
      case "JavaScript":
        exam = "api/jsexam";
        break;
      case "Node.js":
        exam = "api/nodeexam";
        break;
      case "Express":
        exam = "api/expressexam";
        break;
      case "React.js":
        exam = "api/reactexam";
        break;
      case "Mongo":
        exam = "api/mongoexam";
        break;
      case "MySQL":
        exam = "api/mysqlexam";
        break;
      case "GitHub":
        exam = "api/githubexam";
        break;
      default:
        exam = "Exam not available";
        break;
    }
    console.log("You are getting ", exam);
    this.getData(exam);
  }

  getData = async exam => {
    try {
      console.log("In getDadta ", exam);
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
