import React from "react";

const Activity = ({ activity }) => {
  const { id, name, img, time, description } = activity;
  return (
    <div className=" h-[400px] px-10 bg-white rounded-lg m-4">
      <img className="w-60 h-28 rounded-xl mt-4" src={img} alt="" />
      <div className="text-start mt-4 space-y-1">
        <h1 className="font-bold text-xl">{name}</h1>
        <p>{description}</p>
        <p className="font-bold">For Age : 20 - 25</p>
        <p className="font-bold">Time required : {time}s</p>
      </div>
      <div className="bg-green-600 mt-5 py-1 rounded-lg text-white">
        <button>Add To List</button>
      </div>
    </div>
  );
};

export default Activity;
