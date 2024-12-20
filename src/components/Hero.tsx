import React from "react";
import { useTrail, animated } from "@react-spring/web"; // Import animations

const Hero: React.FC = () => {
  // Content for animation
  const items = [
    "Say goodbye 👋 ",
    "to old marketing",
    "Try BigWigMedia Digital Powered by AI",
    "Discover a smarter way to manage your marketing campaigns with the power of AI. Transform your brand and reach new heights effortlessly."
  ];

  // Animation logic
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 200, friction: 30 }, // Adjust for smoother animation
    delay: 200, // Optional delay
  });

  return (
    <div
      id="top"
      className="flex flex-col md:flex-row items-center justify-between bg-white mt-5 mb-10 md:mb-24 px-4 md:px-16"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        {trail.map((style, index) => (
          <animated.div key={index} style={style} className="mb-2">
            {index === 0 || index === 2 ? (
              <h1
                className={`text-2xl md:text-5xl font-bold ${
                  (index as number) === 1 ? "line-through text-gray-400" : ""
                }`}
              >
                {items[index]}
              </h1>
            ) : (index as number) === 1 ? (
              <h1 className="line-through text-gray-400 text-2xl md:text-5xl font-bold">
                {items[index]}
              </h1>
            ) : (
              <p className="text-gray-600 mt-4">{items[index]}</p>
            )}
          </animated.div>
        ))}
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://handleey.com/handleey/assets/img/images/Handleey-Social-Media-Post.png"
          alt="Marketing AI Illustration"
          className="w-full md:w-[800px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
