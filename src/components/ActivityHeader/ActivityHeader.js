import React from "react";
import logo from "./images/exercise.png";
const ActivityHeader = () => {
  return (
    <div>
      <div className="flex items-center space-x-5 font-poppins py-4">
        <img className="w-12 h-12" src={logo} alt="" />
        <h1 className="font-bold text-3xl">The Muscle Bar</h1>
      </div>

      <p></p>
    </div>
  );
};

export default ActivityHeader;
