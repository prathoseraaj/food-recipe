import FoodCard from '@/components/FoodCard'
import React, { useState } from 'react'

const page = () => {
  const [catagories, setCatagories] = useState([]);
  const [loading, setLoading] = useState(flase);
  return (
    <div className='flex h-[90vh] w-[100%] flex pl-10 pt-10  '>
        <FoodCard/>
    </div>
  )
}

export default page