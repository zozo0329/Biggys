import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialValue = { items: [], totalAmount: 0 };

const redLogic = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const totalAmount =
        state.totalAmount + action.item.amount * action.item.price;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount,
      };
    }

    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      if (existingCartItemIndex === -1) {
        return state;
      }

      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [ItemState, itemDispatch] = useReducer(redLogic, initialValue);

  const addHandler = (item) => {
    itemDispatch({ type: "ADD", item });
  };

  const removeHandler = (id) => {
    itemDispatch({ type: "REMOVE", id });
  };

  const foodData = {
    foodItem: ItemState.items,
    totalAmount: ItemState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
  };

  return (
    <CartContext.Provider value={foodData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
