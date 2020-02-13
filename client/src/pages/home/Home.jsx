import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import HtmlImg from "../../assets/images/html5.png";
import CssImg from "../../assets/images/css3.png";
import JsImg from "../../assets/images/javascript.png";
import NodeImg from "../../assets/images/nodejs.png";
import ExpressImg from "../../assets/images/express.png";
import ReactImg from "../../assets/images/react.png";
import MongoImg from "../../assets/images/mongodb.png";
import MySqlImg from "../../assets/images/mysql.png";
import GitHubImg from "../../assets/images/github_black.png";
import Row from "react-bootstrap/Row";

const AllTests = [
  {name: "HTML5", urlImg: HtmlImg, description: "HTML5 questions to know for interview."},
  {name: "CSS", urlImg: CssImg, description: "Css3 questions to know for interview."},
  {name: "JavaScript", urlImg: JsImg, description: "Javascript questions to know for interview."},
  {name: "Node.js", urlImg: NodeImg, description: "Node.js questions to know for interview."},
  {name: "Express", urlImg: ExpressImg, description: "Express questions to know for interview."},
  {name: "React.js", urlImg: ReactImg, description: "React.js questions to know for interview."},
  {name: "Mongo", urlImg: MongoImg, description: "Mongo questions to know for interview."},
  {name: "MySQL", urlImg: MySqlImg, description: "MySQL questions to know for interview."},
  {name: "GitHub", urlImg: GitHubImg, description: "Github questions to know for interview."}
];

const Home = () => {
  return (
    <div className="container-page">
      <Row xs={12} md={4} className="justify-content-center">
      { !AllTests ? ( <h2>No data to display</h2> ) : ( 
         AllTests.map(test => {
          return(<Card key={test.name} name={test.name} description={test.description} urlimg={test.urlImg} test={test}></Card>);
        })
      )}
      </Row>
    </div>
  );
};

export default Home;
