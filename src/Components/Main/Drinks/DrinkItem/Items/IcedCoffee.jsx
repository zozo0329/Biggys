import React from "react";
import icecoffee from "../../../../../assets/Drinks/icedCoffee.jpg";
const IcedCoffee = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img src={icecoffee} alt="icecoffee Img" className="w-screen h-37" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Iced Coffee</h2>
          <p>Iced Coffee, Uminom ka Uminom ka.</p>
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

export default IcedCoffee;
