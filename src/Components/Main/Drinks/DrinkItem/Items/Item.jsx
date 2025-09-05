import React from "react";

const Item = ({ name, price, image, subName, description, addHandler, id }) => {
  return (
    <>
      <div className="card bg-base-100 w-50 shadow-sm">
        <figure>
          <img src={image} alt={subName} className="w-screen h-37" />
        </figure>
        <div className="card-body">
          <h2 className="card-title cursor-default">{name}</h2>
          <h3 className="font-[600] cursor-default">₱{price}</h3>
          <p className="cursor-default">{description}</p>
          <div className="card-actions justify-center ">
            <button
              onClick={() => {
                addHandler({ name, price, image, id });
              }}
              className="btn  bg-amber-400 w-45 text-white hover:bg-amber-500 transition-all duration-400"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
