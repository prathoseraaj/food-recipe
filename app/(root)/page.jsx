"use client";

import FoodCard from "@/components/FoodCard";
import React, { useEffect, useState } from "react";
import { fetchcategory } from "@/services/api";

const page = () => {
  const [catagories, setCatagories] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(catagories);

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
    <div className="flex h-[90vh] w-[100%] flex pl-10 pt-10  ">
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {catagories.length > 0 ? ( catagories.map((catagory, index) => (
            <FoodCard key={index} catagory={catagory}/>
          ))) : <div>Error! Catogories not found</div>}
        </div>
      )}
    </div>
  );
};

export default page;
