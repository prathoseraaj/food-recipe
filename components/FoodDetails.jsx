import Image from "next/image";
import React from "react";

const FoodDetails = ({mealDetails}) => {
  return (
    <div className=" w-full p-6 -mt-10 ">
      <div className="mt-10 ml-10 flex flex-col  ">
        <div className="flex items-center flex-col">
          <h1 className="text-[30px] text-style: italic ">{mealDetails.strMeal}</h1>
          <div className="-mt-2 flex flex-row gap-5 ml-6">
            <p>{mealDetails.strArea}</p>
            <p>{mealDetails.strCategory}</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-5 flex justify-center">
            <div className="h-[500px] w-[25%] bg-white shadow-lg">
                <div className="mt-5 ml-5">
                    <h1 className="text-[17px]">Ingredients:</h1>
                    <div>
                      <ul>
                        <li>{mealDetails.strIngredient1}</li>
                        <li>{mealDetails.strIngredient2}</li>
                        <li>{mealDetails.strIngredient3}</li>
                        <li>{mealDetails.strIngredient4}</li>
                        <li>{mealDetails.strIngredient5}</li>
                        <li>{mealDetails.strIngredient6}</li>
                        <li>{mealDetails.strIngredient7}</li>
                        <li>{mealDetails.strIngredient8}</li>
                        <li>{mealDetails.strIngredient9}</li>
                        <li>{mealDetails.strIngredient10}</li>
                        <li>{mealDetails.strIngredient11}</li>
                        <li>{mealDetails.strIngredient12}</li>
                        <li>{mealDetails.strIngredient13}</li>
                        <li>{mealDetails.strIngredient14}</li>
                        <li>{mealDetails.strIngredient15}</li>
                        <li>{mealDetails.strIngredient16}</li>
                        <li>{mealDetails.strIngredient17}</li>
                        <li>{mealDetails.strIngredient18}</li>
                        <li>{mealDetails.strIngredient19}</li>
                        <li>{mealDetails.strIngredient20}</li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className="h-[500px] w-[25%] bg-white shadow-lg">
                <div className="mt-5 ml-5">
                    <h1 className="text-[17px]">Instruction:</h1>
                    <div>
                      <p>
                        {mealDetails.strInstructions}
                      </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[300px] rounded-[10px] w-[25%] bg-white shadow-lg">
                <Image src={mealDetails.strMealThumb}
                alt="image"
                fill
                className="  rounded-[10px]">

                </Image>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
