import React from "react";

const FoodDetails = () => {
  return (
    <div className=" w-full bg-gray-100 ">
      <div className="mt-10 ml-10 flex flex-col items-center ">
        <div>
          <h1 className="text-[30px] text-style: italic ">Food Name</h1>
          <div className="-mt-2 flex flex-row gap-5 ml-6">
            <p>Area</p>
            <p>Catagory</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
