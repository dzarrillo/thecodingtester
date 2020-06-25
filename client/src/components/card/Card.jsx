import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = props => {
  return (
    <div className="card-container">
      <div className="card-home" style={{ codetext: "JS" }}>
        <div className="imgbx">
          <img src={props.urlimg} alt="HTML" />
        </div>
        <div className="content">
          <div>
            <h6>{props.name}</h6>
            <p style={{fontSize: "0.7em" }}>{props.description}</p>
            {/* <a href={"/exam?test=" + props.name} >Start Test</a> */}
            <NavLink
              to={{
                pathname: "/exam",
                state: { typeoftest: props.name }
              }}
            >
              Go
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
