import React, { useContext } from "react";
import Item from "./Items/Item";
import { CartContext } from "../../../Store/CartContext";
const silogItems = [
  {
    name: "Hotsilog",
    image:
      "https://thumbs.dreamstime.com/b/freshly-cooked-filipino-food-called-hotsilog-photof-hotdog-served-egg-fried-rice-243787864.jpg",
    subName: "Hotsilog Image",
    price: 50,
    id: "A1",
    description: "Hotdog, Fried Rice, and Egg.",
  },
  {
    name: "Tapsilog",
    image: "https://lalunacafe.ph/wp-content/uploads/2022/08/Tapsilog-2.jpg",
    subName: "Tapsilog Image",
    price: 80,
    id: "A2",
    description: "Tapa, Fried Rice, and Egg.",
  },
  {
    name: "Longsilog",
    image: "https://i.ytimg.com/vi/-hVv5puoS9s/maxresdefault.jpg",
    subName: "Longsilog Image",
    price: 50,
    id: "A3",
    description: "Longganisa, Fried Rice, and Egg.",
  },
  {
    name: "Bangsilog",
    image: "https://lalunacafe.ph/storage/2022/08/bangsilog-1.jpg",
    subName: "Bangsilog Image",
    price: 100,
    id: "A4",
    description: "Bangus, Fried Rice, and Egg.",
  },
  {
    name: "Tocilog",
    image:
      "https://usapangfoodtrip.com/wp-content/uploads/2021/04/loveanllo.jpg",
    subName: "Tocilog Image",
    price: 60,
    id: "A5",
    description: "Tocino, Fried Rice, and Egg.",
  },
];
const FoodItem = () => {
  const silogCtx = useContext(CartContext);
  let amount = 1;
  const addHandler = (silog) => {
    +amount + 1;
    const silogData = {
      name: silog.name,
      price: silog.price,
      id: silog.id,
      image: silog.image,
      amount,
    };
    silogCtx.addItem(silogData);
    console.log(amount, "amount");
  };
  return (
    <>
      <div className="flex flex-wrap justify-center items-center p-3 gap-5 shadow">
        {silogItems.map((silog, i) => (
          <Item
            key={`${silog.id} ${i}`}
            name={silog.name}
            image={silog.image}
            subName={silog.subName}
            price={silog.price}
            id={silog.id}
            description={silog.description}
            addHandler={addHandler}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItem;
