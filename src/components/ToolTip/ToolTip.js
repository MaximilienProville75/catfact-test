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
    <div onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && (
        <>
          <div className="bg-purple-100 w-8 h-8 rotate-45 relative z-10 -mt-4 m-auto"></div>
          <div className="text-purple-800 font-mono bg-purple-100 text-xs w-64 p-2 ml-2 border-2 rounded  absolute z-20 -mt-4">
            {props.content}
          </div>
        </>
      )}
    </div>
  );
};
