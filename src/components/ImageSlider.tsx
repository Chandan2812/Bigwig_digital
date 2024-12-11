import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66bbc417df501b935e515366_ipsum4.svg",
  "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66bbc417df501b935e515367_ipsum5.svg",
  "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66bbc417df501b935e51537e_ipsum6.svg",
  "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66bbc417df501b935e515380_ipsum7.svg",
  "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66bbc417df501b935e515383_ipsum1.svg",
];

const ImageSlider: React.FC = () => {
    const settings = {
      infinite: true, // Loop infinitely
      speed: 2000, // Speed of slide transition (in ms)
      slidesToShow: 4, // Number of visible slides
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 0, // Continuous autoplay with no delay
      cssEase: "linear",
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ] // Smooth animation
    };
  
    return (
      <div className="max-w-7xl mx-auto h-32 bg-white mt-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`logo-${index}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default ImageSlider;
  