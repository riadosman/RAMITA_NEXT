import React from "react";
import Main from "../../../components/Main/Main";
import { ServiseCards } from "../../../data/data";

const Servise = ({ params }) => {
  const { id } = params;
  return (
    <div className="methods">
      <Main
        title={ServiseCards[id - 1].title}
        description={ServiseCards[id - 1].describtion}
        img={ServiseCards[id - 1].img}
        arr={ServiseCards[id - 1].arr}
        button={false}
      />
    </div>
  );
};

export default Servise;
