import Image from "next/image";
import React from "react";

const ExploreMenu = () => {
  return (
    <div className='bg-[url("https://png.pngtree.com/background/20230517/original/pngtree-person-cooking-at-the-kitchen-counter-picture-image_2625819.jpg")] mb-10 w-100% h-[400px] rounded-[20px] ml-20  mt-10 mr-20 bg-cover bg-center flex items-center text-white'>
      <div className="flex flex-col">
        <h1 className="ml-10 text-[40px] mt-10 ">
          Find Your Favuroite Recipe Here
        </h1>
        <button className="text-black bg-white w-[150px] rounded-[20px] py-2 cursor-pointer ml-20">Explore here</button>
      </div>
    </div>
  );
};

export default ExploreMenu;
