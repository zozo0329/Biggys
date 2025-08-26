import React from "react";
import IcedTea from "./Items/IcedTea";
import Lemonade from "./Items/Lemonade";
import IcedCoffee from "./Items/IcedCoffee";
import OrangeJuice from "./Items/OrangeJuice";

const DrinkItem = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-3 gap-5 shadow">
      <IcedTea />
      <Lemonade />
      <IcedCoffee />
      <OrangeJuice />
    </div>
  );
};

export default DrinkItem;
