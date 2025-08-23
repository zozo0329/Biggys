import { useState } from "react";
import React from "react";

export const useAuthModal = () => {
  const [isShowed, setIsShowed] = useState(false);
  const showedHandler = () => {
    console.log("TRUEEEE");
    setIsShowed(true);
  };
  return { isShowed, setIsShowed, showedHandler };
};

export default useAuthModal;
