import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="grid grid-cols-3  mt-10">
      {activities.map((activity, index) => (
        <Activity activity={activity} key={index}></Activity>
      ))}
    </div>
  );
};

export default Activities;
