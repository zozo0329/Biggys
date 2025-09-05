import React from "react";
import PugIcon from "../../assets/PugIcon.png";
import logoStyle from "./HeaderLogo.module.css";
import Home from "../../App";
const HeaderLogo = () => {
  const linkHandler = () => {
    console.log("Clicked");
  };
  return (
    <div className={logoStyle.format} onClick={linkHandler}>
      <img src={PugIcon} alt="Pug Icon" />
      <h1>Biggy's</h1>
    </div>
  );
};

export default HeaderLogo;
