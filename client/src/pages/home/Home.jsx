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
import ScrollTop from "../../components/scrolltoparrow/ScrollTopArrow";


const AllTests = [
  { name: "HTML5", urlImg: HtmlImg, description: "Interview questions" },
  { name: "CSS", urlImg: CssImg, description: "Interview questions" },
  { name: "JavaScript", urlImg: JsImg, description: "Interview questions" },
  { name: "Node.js", urlImg: NodeImg, description: "Interview questions" },
  { name: "Express", urlImg: ExpressImg, description: "Interview questions" },
  { name: "React.js", urlImg: ReactImg, description: "Interview questions" },
  { name: "Mongo", urlImg: MongoImg, description: "Interview questions" },
  { name: "MySQL", urlImg: MySqlImg, description: "Interview questions" },
  { name: "GitHub", urlImg: GitHubImg, description: "Interview questions" }
];

const Home = () => {
  

  return (
    <div style={{ paddingTop: "50px" }}>
      <div className={HomeStyle.vHeader}>
        <div className={HomeStyle.fullscreenVideoWrap}>
          <video
            // src="./public/video/Sketching.mp4"
            src="/video/Sketching.mp4"
            width="400"
            autoPlay={true}
            loop={true}
            muted={true}
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className={HomeStyle.headerOverlay}></div>
        <div className={HomeStyle.headerContent}>
          <h1 className={HomeStyle.title}>
            A Resource for New Developers 
          </h1>
          <h5>Before software can be reusable it first has to be usable</h5>
          <h6>- Ralph Johnson</h6>
          <div style={{ marginTop: "50px" }}>
            <a className={HomeStyle.questionLink} href="#sectionTest">
              Interview Questions
            </a>
          </div>
        </div>
      </div>

      <ScrollTop />

      <Row xs={12} md={4} className="justify-content-center">
        {!AllTests ? (
          <h2>No data to display</h2>
        ) : (
          AllTests.map((test) => {
            return (
              <div id="sectionTest">
                <Card
                  key={test.name}
                  name={test.name}
                  description={test.description}
                  urlimg={test.urlImg}
                  test={test}
                ></Card>
              </div>
            );
          })
        )}
      </Row>
    </div>
  );
};

export default Home;
