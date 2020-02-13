import React, { Fragment } from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpnner = () => {
  return (
    <Fragment>
      <Spinner animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Fragment>
  );
};

export default LoadingSpnner;
