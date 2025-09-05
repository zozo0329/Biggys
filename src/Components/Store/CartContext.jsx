import { createContext } from "react";
export const CartContext = createContext({
  silogData: [],
  drinksData: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

// const useAuth = () => useContext();
