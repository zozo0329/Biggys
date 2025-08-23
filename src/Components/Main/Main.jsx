import React from "react";
import MainStyle from "./Main.module.css";
import SilogModal from "../UI/Modal/SilogModal/SilogModal";
import DrinksModal from "../UI/Modal/DrinksModal/DrinksModal";
const Main = () => {
  return (
    <div className={MainStyle.default}>
      <SilogModal />
      <DrinksModal />
    </div>
  );
};

export default Main;
