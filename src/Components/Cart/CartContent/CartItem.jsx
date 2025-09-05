import React from "react";

const CartItem = ({
  name,
  price,
  image,
  plusHandler,
  minusHandler,
  amount,
}) => {
  return (
    <div className="flex justify-between items-center  border-b-2 p-[10px]">
      <div className="flex items-center gap-[10px]">
        <div>
          <img
            className="w-[100px] h-[100px] rounded-[10px]"
            src={image}
            alt="TEST"
          />
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-[500] text-[25px] cursor-default">{name}</h2>
          <div className="flex gap-[20px] flex-row items-center">
            <span className="text-[16px] font-[500] cursor-default">
              ₱{price}
            </span>
            <span className="text-[16px] p-[5px] border-[1px] rounded-[5px] cursor-default">
              x{amount}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <button
          className="btn btn-outline text-center text-[30px]"
          onClick={minusHandler}
        >
          -
        </button>
        <button
          className="btn btn-outline text-center text-[20px]"
          onClick={plusHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
