import React from "react";
import Packets from "../../components/Packets/Packets";
import Titlecom from "../../components/TItle/Titlecom";

const Packages = () => {
  return (
    <div style={{ margin: "4rem 0" }}>
      <Titlecom text="الباقات" />
      <Packets />
    </div>
  );
};

export default Packages;
