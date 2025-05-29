"use client";

import FoodCard from "@/components/FoodCard";
import React, { useEffect, useState } from "react";
import { fetchcategory, fetchfoodrecipe, fetchfoods } from "@/services/api";
import FoodDetails from "@/components/FoodDetails";
import ExploreMenu from "@/components/ExploreMenu";

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
      setSelectedMeal(null);
      setMealDetails(null);
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
    <div className="flex max-h-200vh mb-10 w-full flex-col font-outfit ">
      {selectedMeal ? (
        <FoodDetails mealDetails={mealDetails} />
      ) : (
        <div>
          {" "}
          <ExploreMenu />
          <div className="flex overflow-x-scroll no-scrollbar gap-5 ml-20 mr-20">
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
          {loading ? (
            <div className="ml-20">loading</div>
          ) : selectedCatagory ? (
            <div className="mt-10 ml-20 ">
              <h1 className="text-[20px] mb-5 ">
                The food based on the selected catagory are:
              </h1>
              <div className="flex flex-wrap gap-5 ">
                {catagoryfoods.length > 0 ? (
                  catagoryfoods.map((meal, index) => (
                    <FoodCard key={index} meal={meal} handleMeal={handleMeal} />
                  ))
                ) : (
                  <div>Error! Catogories foods not found</div>
                )}
              </div>
            </div>
          ) : (
            <div className="ml-20 mt-10">select the catagory</div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
