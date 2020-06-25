import React from "react";
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
import HomeStyle from "./Home.module.css";

const AllTests = [
  { name: "HTML5", urlImg: HtmlImg, description: "Interview questions" },
  { name: "CSS", urlImg: CssImg, description: "Interview questions" },
  { name: "JavaScript", urlImg: JsImg, description: "Interview questions" },
  { name: "Node.js", urlImg: NodeImg, description: "Interview questions" },
  { name: "Express", urlImg: ExpressImg, description: "Interview questions" },
  { name: "React.js", urlImg: ReactImg, description: "Interview questions" },
  { name: "Mongo", urlImg: MongoImg, description: "Interview questions" },
  { name: "MySQL", urlImg: MySqlImg, description: "Interview questions" },
  { name: "GitHub", urlImg: GitHubImg, description: "Interview questions" },
];

const Home = () => {
  return (
    <div >
      <div className={HomeStyle.titleContainer}>
        <h1 className={HomeStyle.title}>A Resource for Developers by Developers</h1>
      </div>

      
      <Row xs={12} md={4} className="justify-content-center">
        {!AllTests ? (
          <h2>No data to display</h2>
        ) : (
          AllTests.map((test) => {
            return (
              <Card
                key={test.name}
                name={test.name}
                description={test.description}
                urlimg={test.urlImg}
                test={test}
              ></Card>
            );
          })
        )}
      </Row>
    </div>
  );
};

export default Home;
