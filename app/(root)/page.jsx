"use client";

import FoodCard from "@/components/FoodCard";
import React, { useEffect, useState } from "react";
import { fetchcategory, fetchfoodrecipe, fetchfoods } from "@/services/api";
import FoodDetails from "@/components/FoodDetails";

const page = () => {
  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [catagoryfoods, setCatagoryfoods] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const [catagories, setCatagories] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(catagories);
  console.log(catagoryfoods);
  console.log(mealDetails);

  const handleCatagory = async (catagoryName) => {
    setLoading(true);
    try {
      const fooddata = await fetchfoods(catagoryName);
      setCatagoryfoods(fooddata);
      setSelectedCatagory(catagoryName);
    } catch (error) {
      console.log("Error in fetching", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMeal = async (mealName) => {
    setLoading(true);
    try {
      const mealdata = await fetchfoodrecipe(mealName);
      setMealDetails(mealdata);
      setSelectedMeal(mealName);
    } catch (error) {
      console.log("Error in fetching the data", error);
    } finally {
      setLoading(false);
    }
  };

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
    <div className="flex h-[93vh] w-full  ">
      {loading ? (
        <div className="ml-20">loading</div>
      ) : selectedMeal ? (
        
          <FoodDetails mealDetails={mealDetails} />
        
      ) : selectedCatagory ? (
        <div className="flex flex-wrap gap-5 ml-20">
          {catagoryfoods.length > 0 ? (
            catagoryfoods.map((meal, index) => (
              <FoodCard key={index} meal={meal} handleMeal={handleMeal} />
            ))
          ) : (
            <div>Error! Catogories foods not found</div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 ml-20">
          {catagories.length > 0 ? (
            catagories.map((catagory, index) => (
              <FoodCard
                key={index}
                catagory={catagory}
                handleCatagory={handleCatagory}
                
              />
            ))
          ) : (
            <div>Error! Catogories not found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
