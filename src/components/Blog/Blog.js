import React from "react";
const Blog = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10">About React</h1>
      <div className=" my-10">
        <div>
          <h1 className="font-bold my-2">How Does React Work ? </h1>
          <p className="px-6 italic underline text-orange-600">
            React dedives UI into different piece which are knows as components,
            and we can use those component where we want to use . The components
            are like html element but the have functionality , means react are
            functional . They are so powerfull .
          </p>
        </div>
        <div>
          <h1 className="font-bold my-2 ">
            Difference between props and State ?
          </h1>
          <p className="text-orange-600 underline">
            Props : Props are used to pass data from one component to another.
            Like html element attributes
          </p>
          <p className="text-orange-600 underline">
            State : The state is a local data storage that is local to the
            component only and cannot be passed to other components.
          </p>
        </div>
        <div className="py-5">
          <h1 className="font-bold my-2 ">
            What are the other purpose of using useEffect without loading Data
            from API ?
          </h1>
          <p className="text-orange-600 underline">
            useEffect allows us to perform side effect in react component . As
            we know when we want to do somthing that is outside of out code we
            use useEffect . Other Case are :
          </p>
          <ol className="text-orange-600 underline">
            <li>1 . validating input field</li>
            <li>2 . live filtering</li>
            <li>3 . get data from outside of our code</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Blog;
