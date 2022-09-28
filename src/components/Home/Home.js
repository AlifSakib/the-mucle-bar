import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import ActivityHeader from "../ActivityHeader/ActivityHeader";
import Blog from "../Blog/Blog";
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
    <div className="bg-slate-200 h-full">
      <div className="lg:grid lg:grid-cols-3 ">
        <div className="col-span-2 mx-16 mt-16">
          <ActivityHeader></ActivityHeader>
          <Activities activities={activities} addTime={addTime}></Activities>
        </div>
        <div className="lg:col-span-1 bg-white w-9/12 mx-auto rounded-xl ">
          <Details time={time}></Details>
        </div>
      </div>
      <div>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Home;
