import { useState } from "react";

const FlipCard = () => {
  const cards = [
    {
      id: 1,
      title: "Crafting Insight-Driven Campaigns Across Platforms",
      description:
        "Harness the power of data to create impactful marketing campaigns tailored to your audience. By analyzing key metrics and consumer behavior, we design and implement strategies that perform across social media, search engines, and other digital platforms. Each campaign is optimized for engagement, conversions, and measurable success.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc089c1f9a68e096be4e6_pexels-laura-villela-brasil-438615876-27308773-p-500.webp", // Replace with your image URL
      bgColor: "bg-yellow-200",
    },
    {
      id: 2,
      title: "Creating High-Quality, SEO-Optimized Content",
      description:
        "Our team produces engaging, high-quality content tailored to your audience while adhering to the latest SEO best practices. From keyword-rich blog posts to compelling website copy, we ensure your content drives traffic, boosts rankings, and resonates with your target market.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc172720632effb1eb63c_pexels-buro-millennial-636760-1438081-p-500.webp", // Replace with your image URL
      bgColor: "bg-blue-200",
    },
    {
      id: 3,
      title: "Driving Engagement Through Social Media Management",
      description:
        "We expertly manage and optimize your social media channels to build meaningful connections and foster audience engagement. From crafting compelling posts to analyzing performance metrics, our strategies ensure your brand stays active, relevant, and impactful across platforms.",
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc22f20352e7c549a58f9_pexels-tim-samuel-6697318-p-500.webp", // Replace with your image URL
      bgColor: "bg-purple-200",
    },
    {
      id: 4,
      title: "Leveraging Advanced Analytics for Performance Tracking",
      description:
        "Stay ahead with actionable insights derived from advanced analytics tools. We monitor campaign performance, audience behavior, and website metrics to ensure your strategies are always optimized for the best results.",
        image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1de15588d4888d2ece3a7_solutions-header-2-p-500.webp", // Replace with your image URL
        bgColor: "bg-green-200",
    },
    {
      id: 5,
      title: "Boosting Brand Visibility with PPC Campaigns",
      description:
        "Our Pay-Per-Click advertising strategies deliver measurable results and ROI. By targeting the right audience with compelling ads, we drive traffic and generate leads for your business on platforms like Google Ads and social media.",
        image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1de26c6bc75951fab4a7f_solutions-header-3-p-500.webp", // Replace with your image URL
        bgColor: "bg-pink-200",
    },
    {
      id: 6,
      title: "Enhancing Customer Loyalty Through Email Marketing",
      description:
        "Build meaningful relationships with your audience using targeted and personalized email campaigns. From newsletters to promotional offers, our email marketing strategies nurture leads and enhance customer retention.",
        image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66e1de0640b5270c55d1bf6f_solutions-header-1-p-500.webp", // Replace with your image URL
        bgColor: "bg-teal-200",
    },
  ];
  


  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );

  const handleFlip = (index: number) => {
    const updatedStates = [...flippedStates];
    updatedStates[index] = !updatedStates[index];
    setFlippedStates(updatedStates);
  };

  return (
    <div id="solutions" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto mt-10 mb-10 md:mb-20">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="group w-full sm:w-full md:w-96 h-[400px] md:h-[500px] perspective" // Make the width 100% on mobile and 96 on desktop
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
                Solution
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
