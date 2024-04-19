import React from "react";
import "./methodsCard.css";

const Methods = (props) => {
  return (
    <div>
      <div className="card">
        <div className="img">{props.img}</div>
        <div className="text">
          <p className="h3"> {props.title}</p>
          <p className="p"> {props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Methods;
