import React from "react";
import Activities from "../Activities/Activities";
import ActivityHeader from "../ActivityHeader/ActivityHeader";
import Details from "../Details/Details";

const Home = () => {
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-2 w-9/12 mx-auto  bg-orange-200">
        <ActivityHeader></ActivityHeader>
        <Activities></Activities>
      </div>
      <div className="col-span-1 bg-red-300">
        <Details></Details>
      </div>
    </div>
  );
};

export default Home;
