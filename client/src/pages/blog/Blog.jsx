import React, { Fragment } from "react";
import "./Blog.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Blog = () => {
  return (
    <Fragment>
      <div className="container-page">
        {/* <Row > */}
          <h1 className="blog-title text-center">
            Don Zarrillo Jr - My Web Development Blog
          </h1>
        {/* </Row> */}
      </div>
    </Fragment>
  );
};

export default Blog;
