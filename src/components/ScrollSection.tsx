import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollOverlappingSections: React.FC = () => {
  const sections = [
    {
      id: 1,
      backgroundColor: "#E9D5FF",
      content: (
        <>
          <h1 className="text-4xl font-bold">Social Media Campaign</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Ads
          </div>
          <p className="mt-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </>
      ),
      image: "https://via.placeholder.com/400x300?text=Image+1",
    },
    {
      id: 2,
      backgroundColor: "#BFDBFE",
      content: (
        <>
          <h1 className="text-4xl font-bold">Marketing Strategy</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Strategy
          </div>
          <p className="mt-4 text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </>
      ),
      image: "https://via.placeholder.com/400x300?text=Image+2",
    },
    {
      id: 3,
      backgroundColor: "#BBF7D0",
      content: (
        <>
          <h1 className="text-4xl font-bold">Creative Designs</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Design
          </div>
          <p className="mt-4 text-lg leading-relaxed">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>
        </>
      ),
      image: "https://via.placeholder.com/400x300?text=Image+3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInView = (index: number, inView: boolean) => {
    if (inView) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-10 px-6 mb-20">

      {/* Desktop view */}
      <div className="hidden md:block relative w-full h-[500px] overflow-hidden">
        {/* Display the current section */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`absolute flex flex-col md:flex-row items-center justify-center text-center md:text-left transition-opacity duration-700 ease-in-out w-full h-full p-8 rounded-lg shadow-md mx-4 my-6 ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ backgroundColor: section.backgroundColor }}
            >
              <img
                src={section.image}
                alt={`Section ${section.id}`}
                className="w-64 h-48 md:w-96 md:h-64 rounded-lg object-cover mr-4"
              />
              <div>{section.content}</div>
            </div>
          ))}
        </div>

        {/* Scrollable trigger sections */}
        <div className="scrollable-container">
          {sections.map((_, index) => (
            <div key={index} className="h-[500px] flex-shrink-0">
              <InViewTrigger index={index} onInView={handleInView} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col space-y-8 items-center">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col items-center text-center p-8 rounded-lg shadow-md mx-4 my-6"
            style={{ backgroundColor: section.backgroundColor }}
          >
            <img
              src={section.image}
              alt={`Section ${section.id}`}
              className="w-64 h-48 rounded-lg object-cover mb-4"
            />
            <div>{section.content}</div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollable-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow-y: scroll;
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

export default ScrollOverlappingSections;
