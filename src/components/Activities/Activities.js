import React from "react";
import Activity from "../Activity/Activity";

const Activities = ({ activities, addTime }) => {
  return (
    <div className="grid grid-cols-3  mt-10">
      {activities.map((activity, index) => (
        <Activity activity={activity} key={index} addTime={addTime}></Activity>
      ))}
    </div>
  );
};

export default Activities;
