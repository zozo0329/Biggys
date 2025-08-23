import React from "react";
import Drinks from "../../../Main/Drinks/Drinks";

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
          <h3 className="text-xl font-bold">OH WALANG LAMAN?</h3>
          <h3 className="text-xl font-bold">SYEMPRE DI PA TAPOS GAGO.</h3>
        </div>
        <label className="modal-backdrop" htmlFor="drinks-1">
          Close
        </label>
      </div>
    </>
  );
};

export default DrinksModal;
