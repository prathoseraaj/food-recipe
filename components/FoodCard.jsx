import Image from "next/image";
import React from "react";

const FoodCard = ({meal, catagory, handleCatagory}) => {

  const isCatagory = catagory  && !meal;
  const isMeal = meal && !catagory;

  return (
    <div className="rounded flex flex-col items-center  w-[225px] max-h-[50%] shadow-md overflow-hidden h-50vh  ">
      <div className="relative h-[150px] w-[200px] ">
        <Image
          src={isCatagory? catagory.strCategoryThumb : meal.strMealThumb}
          alt="Delicious food"
          fill
          className=""
          sizes="200px"
        />
      </div>
      <div className=" flex flex-row gap-5 ">
          <h1 className="font-bold text-style: italic text-[20px] " onClick={()=>handleCatagory(catagory.strCategory)}>{isCatagory?  catagory.strCategory : meal.strMeal}</h1>
        </div>

    </div>
  );
};

export default FoodCard;
