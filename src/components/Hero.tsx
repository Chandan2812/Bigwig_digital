import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Say goodbye 👋 <br />
          <span className="line-through text-gray-400">to old marketing</span>
        </h1>
        <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">
          Really 1990's
        </span>
        <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
          Sign up for a demo
        </button>
      </div>

      {/* Card Section */}
      <div className="relative mt-12">
        <div className="absolute bg-green-200 w-64 h-80 rounded-lg -rotate-6"></div>
        <div className="absolute bg-yellow-200 w-64 h-80 rounded-lg rotate-3 translate-y-2"></div>
        <div className="relative bg-purple-200 w-64 h-80 rounded-lg">
          <div className="absolute top-16 left-8 bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="rounded-full w-20 h-20 mx-auto"
            />
            <h3 className="text-center mt-4 font-semibold text-lg">Amanda</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
