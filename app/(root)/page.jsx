"use client";

import FoodCard from "@/components/FoodCard";
import React, { useEffect, useState } from "react";
import { fetchcategory, fetchfoods } from "@/services/api";
import FoodDetails from "@/components/FoodDetails";

const page = () => {
  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [catagoryfoods, setCatagoryfoods] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(catagories);
  console.log(catagoryfoods);

  const handleCatagory = async(catagoryName) =>{
    setLoading(true);
    try{
      const fooddata = await fetchfoods(catagoryName);
      setCatagoryfoods(fooddata);
      setSelectedCatagory(catagoryName);
    }
    catch(error){
      console.log("Error in fetching", error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    const loadingcatagories = async () => {
      setLoading(true);
      try {
        const catagorydata = await fetchcategory();
        setCatagories(catagorydata);
      } catch (error) {
        console.log("Error fetcning the catagory,", error);
      } finally {
        setLoading(false);
      }
    };

    loadingcatagories();
  }, []);

  return (
    <div className="flex h-[93vh] w-[100%] flex  ">
{/*       {loading ? (
        <div>loading</div>
      ) : selectedCatagory? (
               <div className="flex flex-wrap gap-5">
          {catagoryfoods.length > 0 ? ( catagoryfoods.map((meal, index) => (
            <FoodCard key={index} meal={meal} />
          ))) : <div>Error! Catogories foods not found</div>}
        
      </div>):(
        <div className="flex flex-wrap gap-5">
          {catagories.length > 0 ? ( catagories.map((catagory, index) => (
            <FoodCard key={index} catagory={catagory} handleCatagory={handleCatagory}/>
          ))) : <div>Error! Catogories not found</div>}
        </div>
      )} */}
      <FoodDetails/>
    </div>
  );
};

export default page;
