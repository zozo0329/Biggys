import React from "react";
import Hotsilog from "./Items/Hotsilog";
import Tapsilog from "./Items/Tapsilog";
import Longsilog from "./Items/Longsilog";
import Bangsilog from "./Items/Bangsilog";
import Tocilog from "./Items/Tocilog";
const FoodItem = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center p-3 gap-5 shadow">
        <Hotsilog />
        <Tapsilog />
        <Longsilog />
        <Bangsilog />
        <Tocilog />
      </div>
    </>
  );
};

export default FoodItem;
