import React from "react";

const Home = () => {
  return (
    <main
      className="flex flex-wrap justify-center
     items-center tablet:bg-background"
    >
      {/* <div className="w-96 aspect-video bg-red-500 border flex justify-center items-center">
        <p>lorem</p>
      </div> */}
      <div className="container1 self-start flex-shrink-1 container2">
        <h1>lorem</h1>
      </div>
      <div className="w-96 aspect-square bg-gray-500 border flex justify-center items-center shrink-0">
        <p>lorem</p>
      </div>

      <div className="w-96 aspect-square bg-green-600 border shrink-0">
        <p>lorem</p>
      </div>
    </main>
  );
};

export default Home;