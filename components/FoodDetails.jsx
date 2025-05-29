import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const FoodDetails = ({ mealDetails }) => {
  return (
    <div className=" w-full p-6 -mt-10 ">
      <div className="mt-10 ml-10 flex flex-col  ">
        <div className="flex items-center flex-col">
          <h1 className="text-[30px] text-style italic ">
            {mealDetails.strMeal}
          </h1>
          <div className="-mt-2 flex flex-row gap-5 ml-6">
            <p>{mealDetails.strArea}</p>
            <p>{mealDetails.strCategory}</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-5 flex justify-center">
          <div className="h-[300px] w-[50%] bg-white shadow-lg">
            <div className="mt-5 ml-5">
              <h1 className="text-[17px]">Ingredients:</h1>
              <div className="flex flex-row gap-20">
                <ul>
                  <li>
                    {mealDetails.strIngredient1}
                    {mealDetails.strMeasure1}
                  </li>
                  <li>
                    {mealDetails.strIngredient2}
                    {mealDetails.strMeasure2}
                  </li>
                  <li>
                    {mealDetails.strIngredient3}
                    {mealDetails.strMeasure3}
                  </li>
                  <li>
                    {mealDetails.strIngredient4}
                    {mealDetails.strMeasure4}
                  </li>
                  <li>
                    {mealDetails.strIngredient5}
                    {mealDetails.strMeasure5}
                  </li>
                  <li>
                    {mealDetails.strIngredient6}
                    {mealDetails.strMeasure6}
                  </li>
                  <li>
                    {mealDetails.strIngredient7}
                    {mealDetails.strMeasure7}
                  </li>
                  <li>
                    {mealDetails.strIngredient8}
                    {mealDetails.strMeasure8}
                  </li>
                  <li>
                    {mealDetails.strIngredient9}
                    {mealDetails.strMeasure9}
                  </li>
                  <li>
                    {mealDetails.strIngredient10}
                    {mealDetails.strMeasure10}
                  </li>
                </ul>
                <ul>
                  <li>
                    {mealDetails.strIngredient11}
                    {mealDetails.strMeasure11}
                  </li>
                  <li>
                    {mealDetails.strIngredient12}
                    {mealDetails.strMeasure12}
                  </li>
                  <li>
                    {mealDetails.strIngredient13}
                    {mealDetails.strMeasure13}
                  </li>
                  <li>
                    {mealDetails.strIngredient14}
                    {mealDetails.strMeasure14}
                  </li>
                  <li>
                    {mealDetails.strIngredient15}
                    {mealDetails.strMeasure15}
                  </li>
                  <li>
                    {mealDetails.strIngredient16}
                    {mealDetails.strMeasure16}
                  </li>
                  <li>
                    {mealDetails.strIngredient17}
                    {mealDetails.strMeasure17}
                  </li>
                  <li>
                    {mealDetails.strIngredient18}
                    {mealDetails.strMeasure18}
                  </li>
                  <li>
                    {mealDetails.strIngredient19}
                    {mealDetails.strMeasure19}
                  </li>
                  <li>
                    {mealDetails.strIngredient20}
                    {mealDetails.strMeasure20}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] rounded-[10px] w-[25%] bg-white shadow-lg">
            <Image
              src={mealDetails.strMealThumb}
              alt="image"
              fill
              className="  rounded-[10px]"
            ></Image>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-10 flex justify-center ">
        <div className="h-[500px] w-[75%] bg-white shadow-lg">
          <div className="mt-5 ml-5">
            <h1 className="text-[17px]">Instruction:</h1>
            <div>
              <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                {mealDetails.strInstructions}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
