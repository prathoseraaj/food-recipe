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
              <div className="flex flex-row gap-10">
                <ul>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient1}</span>
                    <span>{mealDetails.strMeasure1}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient2}</span>
                    <span>{mealDetails.strMeasure2}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient3}</span>
                    <span>{mealDetails.strMeasure3}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient4}</span>
                    <span>{mealDetails.strMeasure4}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient5}</span>
                    <span>{mealDetails.strMeasure5}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient6}</span>
                    <span>{mealDetails.strMeasure6}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient7}</span>
                    <span>{mealDetails.strMeasure7}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient8}</span>
                    <span>{mealDetails.strMeasure8}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient9}</span>
                    <span>{mealDetails.strMeasure9}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient10}</span>
                    <span>{mealDetails.strMeasure10}</span>
                  </li>
                </ul>

                <ul>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient11}</span>
                    <span>{mealDetails.strMeasure11}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient12}</span>
                    <span>{mealDetails.strMeasure12}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient13}</span>
                    <span>{mealDetails.strMeasure13}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient14}</span>
                    <span>{mealDetails.strMeasure14}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient15}</span>
                    <span>{mealDetails.strMeasure15}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient16}</span>
                    <span>{mealDetails.strMeasure16}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient17}</span>
                    <span>{mealDetails.strMeasure17}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient18}</span>
                    <span>{mealDetails.strMeasure18}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient19}</span>
                    <span>{mealDetails.strMeasure19}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>{mealDetails.strIngredient20}</span>
                    <span>{mealDetails.strMeasure20}</span>
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
            <div className="mt-10">
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
