import React from "react";

const Hero: React.FC = () => {
  const images = [
    "https://via.placeholder.com/300x400?text=Image1",
    "https://via.placeholder.com/300x400?text=Image2",
    "https://via.placeholder.com/300x400?text=Image3",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Rotating Cards
        </h1>
      </div>

      {/* Rotating Cards */}
      <div className="relative w-80 h-[400px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-80 h-[400px] rounded-lg transition-transform duration-500 ease-in-out
              ${index === 0 ? "z-20" : "z-10"}
              card-${index}`}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes rotateCards {
            0% {
              transform: translateX(0%) scale(1);
              z-index: 20;
            }
            33% {
              transform: translateX(-50%) scale(0.8);
              z-index: 10;
            }
            66% {
              transform: translateX(50%) scale(0.8);
              z-index: 10;
            }
            100% {
              transform: translateX(0%) scale(1);
              z-index: 20;
            }
          }

          .card-0 {
            animation: rotateCards 6s infinite ease-in-out;
          }

          .card-1 {
            animation: rotateCards 6s infinite ease-in-out;
            animation-delay: 2s;
          }

          .card-2 {
            animation: rotateCards 6s infinite ease-in-out;
            animation-delay: 4s;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
