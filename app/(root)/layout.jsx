import React, {  ReactNode } from "react";

const layout = ({children}) => {
  return (
    <>
    <div>
    <nav className=' w-[100%] h-[7vh] flex items-center pl-10'>
            <h1 className='font-bold text-[20px]'>Food-Recipe</h1>
        </nav>
      {children}
    </div>
    </>
  );
};

export default layout;
