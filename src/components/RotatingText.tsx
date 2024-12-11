import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollOverlappingText: React.FC = () => {
  const items = ["Social Media", "SEO", "Content", "Advertising"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInView = (index: number, inView: boolean) => {
    if (inView) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 mt-20">
      <h1 className="max-w-7xl text-4xl md:text-7xl mx-auto font-bold mb-6">
        We help you with{" "}
        <span role="img" aria-label="thumbs up">
          👍
        </span>
      </h1>
      <div className="relative w-full max-w-md h-64 overflow-hidden">
        {/* Display the current text */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {items.map((item, index) => (
            <span
              key={index}
              className={`absolute text-4xl md:text-7xl font-semibold transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                backgroundColor: "#E0E7FF",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Scrollable trigger sections */}
        <div className="scrollable-container">
          {items.map((_, index) => (
            <div key={index} className="h-64 flex-shrink-0">
              <InViewTrigger index={index} onInView={handleInView} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
                .scrollable-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          max-height: 100%;
        }

        /* Hide scrollbar in WebKit browsers */
        .scrollable-container::-webkit-scrollbar {
          width: 0;
          height: 0;
        }

        /* Hide scrollbar in Firefox */
        .scrollable-container {
          scrollbar-width: none;
        }     
              `}</style>
    </div>
  );
};

type InViewTriggerProps = {
  index: number;
  onInView: (index: number, inView: boolean) => void;
};

const InViewTrigger: React.FC<InViewTriggerProps> = ({ index, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
    triggerOnce: false,
  });

  React.useEffect(() => {
    onInView(index, inView);
  }, [inView, index, onInView]);

  return <div ref={ref} className="h-full w-full"></div>;
};

export default ScrollOverlappingText;
