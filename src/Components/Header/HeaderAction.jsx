import React from "react";
import HeaderActionStyle from "./HeaderAction.module.css";
import Cart from "../Cart/Cart";
import LoginModal from "../UI/Modal/LoginModal/LoginModal";
const HeaderAction = () => {
  return (
    <div className={`${HeaderActionStyle.defaultStyle} `}>
      <div className={HeaderActionStyle.login}>
        {/* <button className="btn btn-outline text-[#f9d689] hover:bg-[#b1986281] border-[#f9d689]">
          Login
        </button> */}
        <LoginModal />
      </div>
      <div className={HeaderActionStyle.signIn}>
        {/* <button>Sign-up for Free Delivery</button> */}
        <button className="btn btn-outline text-[#f9d689] hover:bg-[#b1986281] border-[#f9d689]">
          Sign-up for Free Delivery
        </button>
      </div>
      <div classname={HeaderActionStyle.cart}>
        <button className="btn btn-outline text-[#f9d689] hover:bg-[#b1986281] border-[#f9d689]">
          <span>
            <Cart />
          </span>
          <span>69</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderAction;
