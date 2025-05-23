import Image from "next/image";
import React from "react";

const FoodCard = () => {
  return (
    <div className="rounded flex flex-col items-center  w-[225px] max-h-[50%] shadow-md overflow-hidden h-50vh  ">
      <div className="relative h-[250px] w-[225px] ">
        <Image
          src="/pasta-con-salsa-cremosa-de-tomate-1.jpg"
          alt="Delicious food"
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <div className=" flex flex-row gap-5 ">
          <h1 className="font-bold text-style: italic text-[20px] ">Pasta</h1>
        </div>
    </div>
  );
};

export default FoodCard;
