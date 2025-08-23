import React from "react";
import CategoryCard from "../../UI/Card/Categories/CategoryCard";
import Hotsilog from "../../../assets/Hotsilog.jpg";
import useAuthModal from "../../Store/OpenModal/AuthModal";
const Silog = () => {
  const { showedHandler } = useAuthModal();
  return (
    <CategoryCard>
      <div
        className="card bg-base-100 w-80 h-100 shadow-sm transition-all duration-500 hover:scale-105 cursor-pointer "
        onClick={showedHandler}
      >
        <figure>
          <img className="w-80 h-60" src={Hotsilog} alt="Hotsilog" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Silogs</h2>
          <p>Silog Section (Alam mo na yon tanginamo)</p>
        </div>
      </div>
    </CategoryCard>
  );
};

export default Silog;
