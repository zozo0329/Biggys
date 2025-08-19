import React from "react";
import IcedTea from "../../../assets/Iced tea.jpg";
import CategoryCard from "../../UI/Card/Categories/CategoryCard";
const Drinks = () => {
  return (
    <>
      <CategoryCard>
        <div className="card bg-base-100 w-100 h-120 shadow-sm transition-all duration-500 hover:scale-105 cursor-pointer ">
          <figure>
            <img className="w-100 h-90" src={IcedTea} alt="Tea" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Drinks</h2>
            <p>
              Drinks Section, Eto hanapin mo kung ayaw mong mabulunang hayop ka.
              Stupid bitch ass pinoy nigga
            </p>
          </div>
        </div>
      </CategoryCard>
    </>
  );
};

export default Drinks;
