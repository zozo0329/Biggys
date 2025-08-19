import React from "react";
import CateStyle from "./CategoryCard.module.css";
const CategoryCard = (props) => {
  return <div className={CateStyle.default}>{props.children}</div>;
};

export default CategoryCard;
