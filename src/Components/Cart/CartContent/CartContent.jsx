import React, { useContext } from "react";
import CartContentStyle from "./CartContent.module.css";
import CartItem from "./CartItem";
import { CartContext } from "../../Store/CartContext";
const CartContent = () => {
  const itemCtx = useContext(CartContext);
  const foodItem = itemCtx.foodItem;
  const totalAmount = itemCtx.totalAmount;
  console.log(foodItem, "FOODITEM");
  const plusHandler = (item) => {
    itemCtx.addItem({ ...item, amount: 1 });
  };
  const minusHandler = (id) => {
    console.log("Clicked");
    itemCtx.removeItem(id);
    console.log(id, "REMOVE ITEM");
  };
  return (
    <div className=" flex flex-col gap-[20px] bg-white p-[20px] rounded-[10px]">
      <div>
        {foodItem.map((silog) => {
          return (
            <CartItem
              key={silog.id}
              name={silog.name}
              price={silog.price}
              image={silog.image}
              plusHandler={() => {
                plusHandler(silog);
              }}
              minusHandler={() => minusHandler(silog.id)}
              amount={silog.amount}
            />
          );
        })}
      </div>
      <div
        className={`${CartContentStyle.defaultStyle} flex justify-between items-center text-[20px] `}
      >
        <span className="cursor-default">Total Amount:</span>
        <span className="bg-[#e7c478] p-[5px] radius rounded-[10px] cursor-default">
          ₱{totalAmount}
        </span>
      </div>
      <button className="btn text-[20px] bg-[#ffba52] text-white hover:bg-[#f3b250] rounded-[10px]">
        Order
      </button>
    </div>
  );
};

export default CartContent;
