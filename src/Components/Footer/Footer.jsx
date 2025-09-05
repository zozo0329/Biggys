import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterDescription from "./FooterDescription/FooterDescription";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center  gap-5 p-10 bg-[#c2a25c]">
      <FooterLogo />
      <FooterDescription />
      <p className="mt-10 cursor-default">© 2025 Biggy's</p>
    </div>
  );
};

export default Footer;
