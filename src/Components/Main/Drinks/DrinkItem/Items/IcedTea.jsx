import React from "react";
import icetea from "../../../../../assets/Drinks/iced-tea.jpg";
const IcedTea = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img src={icetea} alt="icetea Img" className="w-screen h-37" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Iced Tea</h2>
          <p>Iced Tea, Uminom ka Uminom ka.</p>
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

export default IcedTea;
