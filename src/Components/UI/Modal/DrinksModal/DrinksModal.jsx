import React from "react";
import Drinks from "../../../Main/Drinks/Drinks";
import DrinkItem from "../../../Main/Drinks/DrinkItem/DrinkItem";
import HeaderLogo from "../../../Header/HeaderLogo";

const DrinksModal = () => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="drinks-1">
        <Drinks />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="drinks-1" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col items-center gap-2 bg-[#eeeeee]">
          <div>
            <HeaderLogo />
          </div>
          <div>
            <DrinkItem />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="drinks-1">
          Close
        </label>
      </div>
    </>
  );
};

export default DrinksModal;
