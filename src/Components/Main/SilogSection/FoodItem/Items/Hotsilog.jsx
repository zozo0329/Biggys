import React from "react";
import Hotsilogg from "../../../../../assets/Hotsilog.jpg";
const Hotsilog = () => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img src={Hotsilogg} alt="Hotsilog Img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">HotSiLog</h2>
          <p>Hotdog, Sinangag, at itlog, tanginamo alam mo na yan.</p>
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

export default Hotsilog;
