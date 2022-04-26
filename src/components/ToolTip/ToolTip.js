import React, { useState } from "react";

export const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      //   className="relative inline-block"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className="text-purple-800 font-mono bg-purple-100 text-xs w-64 p-2 ml-2 border-2 rounded  absolute z-10 -mt-1">
          {props.content}
        </div>
      )}
    </div>
  );
};
