import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderAction from "./HeaderAction";
import HeaderNavStyle from "./HeaderNav.module.css";
const HeaderNav = () => {
  return (
    <div
      className={`${HeaderNavStyle.mobile} flex items-center justify-between`}
    >
      <HeaderLogo />
      <HeaderAction />
    </div>
  );
};
export default HeaderNav;
