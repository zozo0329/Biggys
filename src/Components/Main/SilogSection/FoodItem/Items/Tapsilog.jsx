import React from "react";
import Tapsilogg from "../../../../../assets/Tapsiloggg.jpg";
const Tapsilog = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img src={Tapsilogg} alt="Hotsilog Img" className="w-screen h-37" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tapsilog</h2>
          <p>Tapa, Sinangag, at itlog, tanginamo alam mo na yan.</p>
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

export default Tapsilog;
