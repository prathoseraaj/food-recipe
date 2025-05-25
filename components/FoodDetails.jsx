import Image from "next/image";
import React from "react";

const FoodDetails = () => {
  return (
    <div className=" w-full  ">
      <div className="mt-10 ml-10 flex flex-col  ">
        <div className="flex items-center flex-col">
          <h1 className="text-[30px] text-style: italic ">Food Name</h1>
          <div className="-mt-2 flex flex-row gap-5 ml-6">
            <p>Area</p>
            <p>Catagory</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-5 flex justify-center">
            <div className="h-[500px] w-[25%] bg-white shadow-lg">
                <div className="mt-5 ml-5">
                    <h1 className="text-[17px]">Ingredients:</h1>
                </div>
            </div>
            <div className="h-[500px] w-[25%] bg-white shadow-lg">
                <div className="mt-5 ml-5">
                    <h1 className="text-[17px]">Instruction:</h1>
                </div>
            </div>
            <div className="h-[300px] w-[25%] bg-white shadow-lg">
                <Image src="">

                </Image>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
