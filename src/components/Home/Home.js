import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import ActivityHeader from "../ActivityHeader/ActivityHeader";
import Details from "../Details/Details";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addTime = (id) => {
    setTime(time + id);
  };
  return (
    <div className="grid grid-cols-3 bg-slate-200 h-full">
      <div className="col-span-2 w-9/12 mx-auto mt-16">
        <ActivityHeader></ActivityHeader>
        <Activities activities={activities} addTime={addTime}></Activities>
      </div>
      <div className="col-span-1 bg-white w-9/12 mx-auto">
        <Details time={time}></Details>
      </div>
    </div>
  );
};

export default Home;
