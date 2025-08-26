import React from "react";
import orangeJuice from "../../../../../assets/Drinks/orangeJuice.png";
const OrangeJuice = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img
            src={orangeJuice}
            alt="orangeJuice Img"
            className="w-screen h-37"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Orange Juice</h2>
          <p>Orange Juice, Uminom ka Uminom ka.</p>
          <div className="card-actions justify-center ">
            <button className="btn  bg-amber-400 w-45 text-white hover:bg-amber-500 transition-all duration-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrangeJuice;
