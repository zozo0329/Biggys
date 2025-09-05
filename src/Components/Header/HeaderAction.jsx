import React from "react";
import HeaderActionStyle from "./HeaderAction.module.css";
import LoginModal from "../UI/Modal/LoginModal/LoginModal";
import CartModal from "../UI/Modal/CartModal/CartModal";
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

        <a href="iSignIn.html" target="_blank" title="Go to Sign In Page">
          <button className="btn btn-outline text-[#f9d689] hover:bg-[#b1986281] border-[#f9d689]">
            Sign-up for Free Delivery
          </button>
        </a>
      </div>
      <div className={HeaderActionStyle.cart}>
        <CartModal />
      </div>
    </div>
  );
};

export default HeaderAction;
