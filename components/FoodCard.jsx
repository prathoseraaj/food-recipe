import Image from "next/image";
import React from "react";

const FoodCard = ({catagory}) => {

  const handleCatagory = (catagoryfood) =>{
    console.log(catagoryfood);
  }

  return (
    <div className="rounded flex flex-col items-center  w-[225px] max-h-[50%] shadow-md overflow-hidden h-50vh  ">
      <div className="relative h-[150px] w-[200px] ">
        <Image
          src={catagory.strCategoryThumb}
          alt="Delicious food"
          fill
          className=""
          sizes="200px"
        />
      </div>
      <div className=" flex flex-row gap-5 ">
          <h1 className="font-bold text-style: italic text-[20px] " onClick={()=>handleCatagory(catagory.strCategory)}>{catagory.strCategory}</h1>
        </div>

    </div>
  );
};

export default FoodCard;
