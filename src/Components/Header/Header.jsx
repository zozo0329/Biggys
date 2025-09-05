import React from "react";

import HeaderNav from "./HeaderNav";
const Header = () => {
  return (
    <>
      <div className="bg-[#61481C] p-3 fixed  top-0 left-0 w-full z-50">
        <HeaderNav />
      </div>
    </>
  );
};

export default Header;
