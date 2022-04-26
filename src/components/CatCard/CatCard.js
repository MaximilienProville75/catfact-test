import React from "react";
import { Tooltip } from "../ToolTip/ToolTip";

export const CatCard = (cat) => {
  console.log(cat.fact);
  return (
    <>
      <Tooltip content={cat.fact} direction="top">
        <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 w-64 p-2 h-44">
          <div>
            <p className="text-xs mt-1 text-purple-800 font-mono bg-purple-100 inline rounded-full px-2 align-top float-right animate-pulse">
              {cat.origin}
            </p>
            <h1 className="text-xl mb-2 font-bold">{cat.breed}</h1>
          </div>
          <div>
            <p>Country: {cat.country}</p>
            {cat.coat ? <p>Coat: {cat.coat}</p> : null}
            {cat.pattern ? <p>Pattern: {cat.pattern}</p> : null}
          </div>
        </div>
      </Tooltip>
    </>
  );
};
