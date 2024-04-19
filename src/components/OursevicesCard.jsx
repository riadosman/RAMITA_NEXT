import React from "react";
// خدماتنا الكرت
const OursevicesCard = (props) => {
  return (
    <div className="Oursevices-card">
      <div className="Oursevices-card-inner">
        <div
          className="Oursevices-card-front"
          style={{
            backgroundImage: `url(${props.costum[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="Oursevices-card-back">
          <p>{props.costum[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default OursevicesCard;
