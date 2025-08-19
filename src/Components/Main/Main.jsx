import React from "react";
import Silog from "./SilogSection/Silog";
import MainStyle from "./Main.module.css";
import Drinks from "./Drinks/Drinks";
const Main = () => {
  return (
    <div className={MainStyle.default}>
      <Silog />

      <Drinks />
    </div>
  );
};

export default Main;
