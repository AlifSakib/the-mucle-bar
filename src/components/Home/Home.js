import React from "react";
import Activities from "../Activities/Activities";
import ActivityHeader from "../ActivityHeader/ActivityHeader";
import Details from "../Details/Details";

const Home = () => {
  return (
    <div className="grid grid-cols-3 bg-slate-200 h-full">
      <div className="col-span-2 w-9/12 mx-auto mt-16">
        <ActivityHeader></ActivityHeader>
        <Activities></Activities>
      </div>
      <div className="col-span-1 bg-white w-9/12 mx-auto">
        <Details></Details>
      </div>
    </div>
  );
};

export default Home;
