import { useState,useRef } from "react";

const FlipCard = () => {
  const cards = [
    {
      id: "solution1",
      solution: "Social Media Management",
      title: "Finding the Perfect Balance Between Your Brand's Purpose and Social Media Presence",
      description:
        "Social media is the heartbeat of today’s digital world, and the way your brand shows up there can make or break its success. We’ll help you craft smart, effective strategies to stand out, connect with your audience, and drive meaningful engagement—all backed by research and trend insights.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc089c1f9a68e096be4e6_pexels-laura-villela-brasil-438615876-27308773-p-500.webp",
      bgColor: "bg-yellow-200",
    },
    {
      id: "solution2",
      solution: "Search Engine Optimization",
      title: "Boosting Your Online Visibility to Help Your Brand Shine",
      description:
        "Want more people to find you online? Our SEO experts can create a tailored strategy to help your business climb the search rankings, attract organic traffic, and turn visitors into loyal customers. From research to execution, we’ll make your online presence work harder for you.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc172720632effb1eb63c_pexels-buro-millennial-636760-1438081-p-500.webp",
      bgColor: "bg-blue-200",
    },
    {
      id: "solution3",
      solution: "Performance Marketing",
      title: "Marketing Strategies That Help You Stay Ahead of the Competition",
      description:
        "In today’s fast-moving market, you need a plan that’s as focused as your goals. With our data-driven approach, we’ll help you craft the right mix of platforms and campaigns to connect with your audience, maximize conversions, and keep your brand in the spotlight.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc22f20352e7c549a58f9_pexels-tim-samuel-6697318-p-500.webp",
      bgColor: "bg-purple-200",
    },
    {
      id: "solution4",
      solution: "Online Reputation Management",
      title: "Building and Protecting Your Brand’s Online Reputation",
      description:
        "A good reputation is priceless, especially online. With our expertise in online reputation management, we’ll help you stay ahead of challenges, enhance your brand image, and create a digital presence that people trust and admire.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1de15588d4888d2ece3a7_solutions-header-2-p-500.webp",
      bgColor: "bg-green-200",
    },
    {
      id: "solution5",
      solution: "Branded Content",
      title: "Creating Content That Speaks Your Brand’s Language",
      description:
        "Whether you’re looking to grow awareness, drive traffic, or boost sales, branded content is your secret weapon. Our creative team will help you craft a content strategy that resonates with your audience and delivers real results—all while staying true to your brand’s voice.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1de26c6bc75951fab4a7f_solutions-header-3-p-500.webp",
      bgColor: "bg-pink-200",
    },
    {
      id: "solution6",
      solution: "Creative Innovations",
      title: "Bringing Bold Ideas to Life Through Creative Storytelling",
      description:
        "Your brand has a story, and we’re here to help you tell it in the most imaginative way possible. Using data-driven insights and out-of-the-box thinking, we’ll create fresh, interactive experiences that captivate your audience and elevate your brand’s presence.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1de0640b5270c55d1bf6f_solutions-header-1-p-500.webp",
      bgColor: "bg-teal-200",
    },
  ];
  
  


  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleFlip = (index: number) => {
    const updatedStates = [...flippedStates];
    updatedStates[index] = !updatedStates[index];
    setFlippedStates(updatedStates);
  };


  return (
    <div id="solution1" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto pt-4 mb-10 md:mb-12">
      {cards.map((card, index) => (
        <div
        key={card.id}
        ref={(el) => (sectionsRef.current[card.id] = el)} // Store section refs dynamically
        id={card.id} // Assign unique id to each section
        className="group w-full sm:w-full md:w-96 h-[400px] md:h-[500px] perspective"
      >
          {/* Flip Container */}
          <div
            className={`relative w-full h-full rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
              flippedStates[index] ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full md:h-[70vh] backface-hidden rounded-2xl overflow-hidden ${card.bgColor}`}
            >
              {/* Title Badge */}
              <div className="border-2 border-black absolute top-8 left-6 bg-white px-6 py-3 rounded-full text-sm font-semibold">
              {card.solution}
              </div>
              <div className="absolute top-8 right-6 rounded-full text-sm font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                  alt=""
                  className="w-10"
                />
              </div>

              {/* Card Text */}
              <div className="p-4 h-1/3 flex flex-col items-center justify-center mt-20">
                <h3 className="text-lg md:text-2xl font-bold">{card.title}</h3>
              </div>

              {/* Card Image */}
              <div className="relative h-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                {/* Flip Button */}
                <button
                  onClick={() => handleFlip(index)}
                  className="absolute bottom-4 right-4 px-5 py-5 border-2 border-black border-r-4 border-r-black bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full md:h-[70vh] backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${card.bgColor}`}
            >
              {/* Title Badge */}
              <div className="border-2 border-black absolute top-8 left-6 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                Solution
              </div>
              <div className="absolute top-8 right-6 rounded-full text-sm font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                  alt=""
                  className="w-10"
                />
              </div>

              {/* Description */}
              <p className="text-justify text-md md:text-lg">
                {card.description}
              </p>

              {/* Back Side Button */}
              <button
                onClick={() => handleFlip(index)}
                className="px-5 py-4 border-2 border-black border-r-4 border-r-black absolute bottom-4 right-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition font-bold text-2xl"
              >
                — {/* Bold dash with larger font size */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
