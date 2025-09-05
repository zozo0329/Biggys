import React from "react";
import Silog from "../../../Main/SilogSection/Silog";
import FoodItem from "../../../Main/SilogSection/FoodItem/FoodItem";
import HeaderLogo from "../../../Header/HeaderLogo";

const SilogModal = () => {
  return (
    <>
      <label htmlFor="silog-1">
        <Silog />
      </label>

      <input type="checkbox" id="silog-1" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col items-center gap-2 bg-[#eeeeee] ">
          <div>
            <HeaderLogo />
          </div>
          <div className=" flex flex-wrap gap-5 justify-center items-center bg-white   rounded-[10px] shadow">
            <FoodItem />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="silog-1" />
      </div>
    </>
  );
};

export default SilogModal;
