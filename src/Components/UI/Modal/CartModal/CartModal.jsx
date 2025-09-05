import React from "react";
import Cart from "../../../Cart/Cart";
import CartContent from "../../../Cart/CartContent/CartContent";
import { useContext } from "react";
import { CartContext } from "../../../Store/CartContext";

const CartModal = () => {
  // const [isOn, setIsOn] = useState(true);
  const ctx = useContext(CartContext);
  console.log(ctx.foodItem, "GGGGGG");
  const numItem = ctx.foodItem.length;
  let modalName = "CartModal";
  // console.log(isOn);
  if (numItem === 0) {
    modalName = "DontShow";
  } else {
    modalName = "CartModal";
  }

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={modalName}
        className={`btn btn-outline text-[#f9d689] hover:bg-[#b1986281] border-[#f9d689]`}
      >
        <span>
          <Cart />
        </span>
        <span className="text-[14px]">{numItem}</span>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="CartModal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-[20px] bg-[#f7e096]">
          <div>
            <p className="text-[18px] font-[500] text-center">Your Orders:</p>
          </div>
          <CartContent />
        </div>
        <label className="modal-backdrop" htmlFor="CartModal" />
      </div>
    </>
  );
};

export default CartModal;
