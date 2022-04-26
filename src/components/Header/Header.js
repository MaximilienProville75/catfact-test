import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-800  w-full top-0 z-10 ">
      <div className="flex flex-row p-5 justify-between sm:text-lg font-bold ">
        <div className=" flex justify-between w-3/12 sm:w-auto sm:gap-2">
          <p className="text-white font-extrabold">PROVILLE Maximilien</p>
        </div>
        <div className=" flex flex-row gap-10 sm:gap-1 \">
          <a href="#Contact" className="hover:text-purple-500 sm:text-white">
            iFollow Test
          </a>
        </div>
      </div>
    </header>
  );
};
