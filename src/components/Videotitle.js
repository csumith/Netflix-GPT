import React from "react";

const Videotitle = ({ title, overview }) => {
  console.log("vc", title);

  return (
    <div className="w-screen aspect-video pt-[16%] px-16 absolute bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white hover:bg-opacity-80  text-black text-xl font-bold p-3  px-10 rounded-lg">
          play 🎧
        </button>
        <button className="bg-gray-700  text-white text-xl font-bold p-3  px-10 mx-2 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
