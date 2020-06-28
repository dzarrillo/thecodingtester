import React, { Fragment } from "react";
import "./Blog.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollTop from "../../components/scrolltoparrow/ScrollTopArrow";

const Blog = () => {
  return (
    <Fragment>
      <div className="container-page">
      <ScrollTop />
        <Row>
          <Col >
            <h1 className="blog-title">
              Don Zarrillo Jr - My Web Development Blog
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <p className="blog-article">
              LTest1onsectetur adipisicing elit. Eius
              accusantium temporibus cupiditate neque sed? Odio quas quisquam
              nisi aut porro itaque sed molestias odit omnis, sit aperiam.
              Minima necessitatibus quisquam iste nesciunt tempore aut similique
              aspernatur! Optio reiciendis cum ea, debitis totam odit et
              laboriosam! Cupiditate impedit provident optio amet nobis, harum
              debitis repudiandae iusto animi earum sit molestiae delectus
              voluptate possimus labore qui rem, iste dicta autem suscipit.
              Blanditiis, aliquam, voluptate officiis suscipit tempora
              architecto, quae dolorum nisi libero veniam ea facere cupiditate
              ad eius enim quas quod voluptatem. Consectetur provident voluptate
              corporis, quibusdam aliquid mollitia expedita iure ullam molestias
              minima tenetur nemo praesentium eos magnam itaque ut culpa quaerat
              impedit eius nulla, similique nobis, incidunt facere inventore!
              Cumque distinctio culpa molestiae aspernatur temporibus
              consectetur ex qui quod harum iure sint veritatis voluptatem,
              animi dolorum eos ipsum quam obcaecati voluptatum accusantium
              minus quidem velit. Magni mollitia, itaque fuga labore vel ex nisi
              dignissimos voluptas obcaecati officia. Numquam aspernatur maiores
              omnis beatae quod. Molestiae enim amet consequatur inventore nihil
              veniam saepe culpa explicabo beatae nostrum perferendis labore
              optio sapiente cupiditate debitis ex, laudantium recusandae
              suscipit sed natus eius
            </p>
          </Col>
          <Col md={3}>
            <h4>Recent Posts</h4>
            <ul className="blog-recent-posts">
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Blog;
