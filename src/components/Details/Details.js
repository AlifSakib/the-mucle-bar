import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = ({ time }) => {
  const [btime, setBtime] = useState(0);
  const addBreak = (selectedTime) => {
    setBtime(selectedTime);
    localStorage.setItem("book-mark", selectedTime);
  };

  const getStoredData = () => {
    const storedData = localStorage.getItem("book-mark");
    return storedData;
  };

  useEffect(() => {
    const storedData = getStoredData();
    setBtime([storedData]);
  }, []);

  const notify = () => toast("Wow, Great Job!");
  return (
    <div className="mx-6">
      <div className=" text-start py-6">
        <h1 className="font-bold text-xl ">Alif Sakib</h1>
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
            className="bg-white rounded-full p-2 w-10"
            value="10"
            onClick={(e) => addBreak(e.target.value)}
          >
            10
          </button>
          <button
            className="bg-white rounded-full p-2 w-10 "
            value="20"
            onClick={(e) => addBreak(e.target.value)}
          >
            20
          </button>
          <button
            className="bg-white rounded-full p-2 w-10"
            value="30"
            onClick={(e) => addBreak(e.target.value)}
          >
            30
          </button>
          <button
            className="bg-white rounded-full p-2 w-10"
            value="40"
            onClick={(e) => addBreak(e.target.value)}
          >
            40
          </button>
          <button
            className="bg-white rounded-full p-2 w-10"
            value="50"
            onClick={(e) => addBreak(e.target.value)}
          >
            50
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
        <button
          onClick={notify}
          className="bg-indigo-500 text-white w-full py-3 rounded-lg my-10"
        >
          Acivity Completed
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Details;
