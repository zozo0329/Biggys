import React from "react";
import lemonadePic from "../../../../../assets/Drinks/lemonade.webp";
const Lemonade = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img
            src={lemonadePic}
            alt="lemonadePic Img"
            className="w-screen h-37"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Lemonade</h2>
          <p>Lemonade, Uminom ka Uminom ka.</p>
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

export default Lemonade;
