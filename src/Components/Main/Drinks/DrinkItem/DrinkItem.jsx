import React, { useContext } from "react";
import Item from "./Items/Item";
import { CartContext } from "../../../Store/CartContext";

const drinks = [
  {
    name: "Iced Tea",
    price: "20",
    image:
      "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg",
    subName: "Iced Tea Image",
    description: "Iced Tea, Uminom Ka Uminom ka",
    id: "D1",
  },
  {
    name: "Orange Juice",
    price: "20",
    image:
      "https://cdn.impossibleimages.ai/wp-content/uploads/2023/08/16184827/S5Db4ILc1pqw0htaNH9IioCmhIc4hAn0gpRRqpbGwY8haNZzhI-1500x1131.jpg",
    subName: "OrangeJuice Image",
    description: "Orage Juice, Wala tong Halong Gin Inamo",
    id: "D2",
  },

  {
    name: "Lemonade",
    price: "40",
    image:
      "https://g.foolcdn.com/editorial/images/608065/a-tall-glass-of-lemonade-with-lemons-sitting-around-the-glass.jpg",
    subName: "Lemonade Image",
    description: "Lemonade, Laklakin mo para di ka mauhaw",
    id: "D3",
  },
  {
    name: "Iced Coffee",
    price: "60",
    image:
      "https://www.windingcreekranch.org/wp-content/uploads/2022/05/Homemade-iced-coffee-1200-1200.jpg",
    subName: "Iced Coffee Image",
    description: "Iced Coffee, Laklakin mong maarte ka",
    id: "D4",
  },
];

const DrinkItem = () => {
  const drinksctx = useContext(CartContext);
  let amount = 1;
  const addHandler = (drinks) => {
    console.log(drinks, "Drinks");
    +amount + 1;
    const silogData = {
      name: drinks.name,
      price: drinks.price,
      image: drinks.image,
      id: drinks.id,
      amount,
    };
    drinksctx.addItem(silogData);
  };

  return (
    <div className="flex flex-wrap justify-center items-center p-3 gap-5 shadow">
      {drinks.map((drinks, i) => (
        <Item
          key={`${drinks.id}${i} `}
          name={drinks.name}
          price={drinks.price}
          image={drinks.image}
          subName={drinks.subName}
          description={drinks.description}
          addHandler={addHandler}
          id={drinks.id}
        />
      ))}
    </div>
  );
};

export default DrinkItem;
