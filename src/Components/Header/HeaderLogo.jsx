import React from "react";
import PugIcon from "../../assets/PugIcon.png";
import logoStyle from "./HeaderLogo.module.css";
const HeaderLogo = () => {
  return (
    <div className={logoStyle.format}>
      <img src={PugIcon} alt="Pug Icon" />
      <h1>Biggy's</h1>
    </div>
  );
};

export default HeaderLogo;
