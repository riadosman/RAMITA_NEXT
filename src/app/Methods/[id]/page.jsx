import React from "react";
import { MethodsCard } from "../../../data/data";
import Main from "../../../components/Main/Main";
const Methods = ({ params }) => {
  const imgs = ["/images/02.jpg", "/images/7.jpg", "/images/6.jpg"];
  const { id } = params;
  return (
    <div className="methods" dir="ltr">
      <Main
        title={MethodsCard[id - 1].title}
        description={MethodsCard[id - 1].describtion}
        button={true}
        arr={MethodsCard[id - 1].arr}
        img={imgs[id - 1]}
      />
    </div>
  );
};

export default Methods;
