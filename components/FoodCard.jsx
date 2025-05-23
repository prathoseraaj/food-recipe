import Image from "next/image";
import React from "react";

const FoodCard = () => {
  return (
    <div className="rounded flex flex-col items-center  w-[200px] max-h-[40%] shadow-md overflow-hidden h-50vh  ">
      <div className="relative h-[150px] w-[200px] ">
        <Image
          src="/pasta-con-salsa-cremosa-de-tomate-1.jpg"
          alt="Delicious food"
          fill
          className="object-cover"
          sizes="200px"
        />
        <div className="h-5">
          <h1>Pasta</h1>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
