import React from "react";
import FbIcon from "../../../assets/Icons/facebook.png";
import IgIcon from "../../../assets/Icons/instagram.png";
import FooterLogoStyle from "./FooterLogo.module.css";
import PugIcon from "../../../assets/pug.png";
const FooterLogo = () => {
  return (
    <div className={FooterLogoStyle.HERO}>
      <div className={FooterLogoStyle.defaultStyle}>
        <img src={PugIcon} alt="Pug Icon" />
        <h1>Biggy's</h1>
      </div>
      <div className={FooterLogoStyle.icon}>
        <a
          href="https://www.facebook.com/share/1CSaGnbvxi/"
          target="_blank"
          rel="Go to Facebook Page"
        >
          <img src={FbIcon} alt="FacebookIcon" />
        </a>
        <a href="https://www.facebook.com/share/1CSaGnbvxi/" target="_blank">
          <img src={IgIcon} alt="IGLogo" />
        </a>
      </div>
    </div>
  );
};

export default FooterLogo;
