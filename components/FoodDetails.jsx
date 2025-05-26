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
                    <div>
                      <li>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                      </li>
                    </div>
                </div>
            </div>
            <div className="h-[500px] w-[25%] bg-white shadow-lg">
                <div className="mt-5 ml-5">
                    <h1 className="text-[17px]">Instruction:</h1>
                    <div>
                      <p>
                        
                      </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[300px] rounded-[10px] w-[25%] bg-white shadow-lg">
                <Image src="https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"
                alt="image"
                fill
                className="object-cover rounded-[10px]">

                </Image>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
