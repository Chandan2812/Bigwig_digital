import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      id="top"
      className="flex flex-col md:flex-row items-center justify-between bg-white mt-5 mb-10 md:mb-24  px-4 md:px-16"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-5xl font-bold">
          Say goodbye 👋{" "}
          <span className="line-through text-gray-400">to old marketing</span>
        </h1>
        <h1 className="text-2xl md:text-5xl font-bold mt-2">
          Try BigWigMedia Powered by AI
        </h1>
        <p className="text-gray-600 mt-4">
          Discover a smarter way to manage your marketing campaigns with the
          power of AI. Transform your brand and reach new heights effortlessly.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://cdn.adglobal360.com/uploads/solution_list/desk-1681797641.jpg"
          alt="Marketing AI Illustration"
          className="w-full md:w-4/5 lg:w-3/4 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
