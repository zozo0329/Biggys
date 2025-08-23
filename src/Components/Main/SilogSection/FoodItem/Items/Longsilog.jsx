import React from "react";
import longsilogPic from "../../../../../assets/longsilog.jpg";
const Longsilog = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img
            src={longsilogPic}
            alt="Longsilog Img"
            className="w-screen h-37"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Longsilog</h2>
          <p>Longganisa, Sinangag, at itlog, tanginamo alam mo na yan.</p>
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

export default Longsilog;
