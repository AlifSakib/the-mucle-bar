import React, { useState } from "react";

const Details = ({ time }) => {
  const [btime, setBtime] = useState(0);
  const addBreak = (selectedTime) => {
    setBtime(selectedTime);
  };
  return (
    <div className="mx-6">
      <div className="my-10 text-start">
        <h1 className="font-bold text-xl">Alif Sakib</h1>
        <p>Dhaka, Bangladesh</p>
      </div>
      <div className="bg-slate-300 flex justify-around py-3 rounded-xl">
        <div>
          <p>
            70<span>kg</span>
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p>5.6</p>
          <p>Height</p>
        </div>
        <div>
          <p>
            25<span>yrs</span>
          </p>
          <p>Age</p>
        </div>
      </div>
      <div className="">
        <h1 className="my-4 text-start text-lg font-bold">Add A Break</h1>
        <div className="flex justify-around bg-slate-300 py-3 rounded-xl">
          <button
            className="bg-white rounded-full p-2"
            value="10"
            onClick={(e) => addBreak(e.target.value)}
          >
            10<span>s</span>
          </button>
          <button
            className="bg-white rounded-full p-2"
            value="20"
            onClick={(e) => addBreak(e.target.value)}
          >
            20<span>s</span>
          </button>
          <button
            className="bg-white rounded-full p-2"
            value="30"
            onClick={(e) => addBreak(e.target.value)}
          >
            30<span>s</span>
          </button>
          <button
            className="bg-white rounded-full p-2"
            value="40"
            onClick={(e) => addBreak(e.target.value)}
          >
            40<span>s</span>
          </button>
          <button
            className="bg-white rounded-full p-2"
            value="50"
            onClick={(e) => addBreak(e.target.value)}
          >
            50<span>s</span>
          </button>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-start text-xl font-bold">Exercise Details</h1>
        <div className="flex justify-around bg-slate-300 py-3 rounded-xl my-4">
          <h1>Exercise time</h1>
          <p>{time} secounds</p>
        </div>
        <div className="flex justify-around bg-slate-300 py-3 rounded-xl my-4">
          <h1>Break time</h1>
          <p>{btime} secounds</p>
        </div>
      </div>
      <div>
        <button className="bg-indigo-500 text-white w-full py-3 rounded-lg mt-10">
          Acivity Completed
        </button>
      </div>
    </div>
  );
};

export default Details;
