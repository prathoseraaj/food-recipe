import Image from "next/image";
import React from "react";

const FoodCard = ({ meal, catagory, handleCatagory, handleMeal }) => {
  const isCatagory = catagory && !meal;
  const isMeal = meal && !catagory;

  return (
    <div className="rounded flex flex-col items-center   ">
      <div className="relative h-[100px] w-[100px] ">
        {isCatagory ? (
          <Image
            src={isCatagory ? catagory.strCategoryThumb : meal.strMealThumb}
            alt="Delicious food"
            fill
            className="rounded-full shadow-lg object-cover"
            sizes="200px"
            onClick={() => handleCatagory(catagory.strCategory)}
          />
        ) : (
          <Image
            src={isCatagory ? catagory.strCategoryThumb : meal.strMealThumb}
            alt="Delicious food"
            fill
            className="rounded-"
            sizes="200px"
            onClick={() => handleMeal(meal.strMeal)}
          />
        )}
      </div>

    </div>
  );
};

export default FoodCard;
