import { useState,useRef } from "react";

const FlipCard = () => {
  const cards = [
    {
      id: "solution1",
      solution: "Lead Management System",
      title: "Effortlessly Managing Leads from First Click to Final Sale",
      description:
        "Boost your brand with a lead system so smooth, your competitors will wonder if it's magic. Say goodbye to missed opportunities and hello to seamless conversions!",
      bgColor: "bg-yellow-200",
    },
    {
      id: "solution2",
      solution: "Impactful Awareness Campaigns",
      title: "Unforgettable Campaigns to Make Your Brand the Talk of the Town",
      description:
        "Ready to shine? We’ll grab eyeballs, spark emotions, and deliver success with strategies so good, even your grandma will notice your brand.",
      bgColor: "bg-blue-200",
    },
    {
      id: "solution3",
      solution: "Influencer Marketing",
      title: "Amplify Your Brand’s Story with Voices Everyone Trusts",
      description:
        "From strategy to stardom, we’ll pair you with influencers who make waves—and results that’ll make you say, ‘Is this real life?’",
      image: "https://media.licdn.com/dms/image/C4E12AQEewYeoQlcUWA/article-cover_image-shrink_600_2000/0/1627198487357?e=2147483647&v=beta&t=GkhDhML28sg27hBGNbo-mLtzG2LRcReTGtLtFv8YeFM",
      bgColor: "bg-purple-200",
    },
    {
      id: "solution4",
      solution: "Live Coverage",
      title: "Teleporting Your Audience to the Heart of Every Event",
      description:
        "From concerts to conferences, we’ll bring the action to life—no FOMO, just unforgettable moments straight to their screens.",
      image: "https://www.minddigital.com/wp-content/uploads/2015/01/Online-Reputation-Management-01.jpg",
      bgColor: "bg-green-200",
    },
    {
      id: "solution5",
      solution: "Public Relations",
      title: "Turning Your Achievements into Headlines That Matter",
      description:
        "From local buzz to global fame, we’ll make sure your story lands where it counts. Fame not included, but definitely earned!",
      image: "https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Branded-content-types.png",
      bgColor: "bg-pink-200",
    },
    {
      id: "solution6",
      solution: "Video Shoots",
      title: "Capturing Your Brand’s Essence, One Frame at a Time",
      description:
        "From brand stories to jaw-dropping visuals, our videos don’t just tell stories—they make audiences stop scrolling.",
      bgColor: "bg-teal-200",
    },
    {
      id: "solution7",
      solution: "Branded Content",
      title: "Crafting Clever, Gorgeous Content That Speaks Your Brand’s Soul",
      description:
        "We make content that’s funny, smart, and drop-dead gorgeous. Your audience? They won’t just look; they’ll stay for the encore.",
      bgColor: "bg-orange-200",
    },
    {
      id: "solution8",
      solution: "Creative Innovations",
      title: "Bringing Your Wildest Brand Ideas to Life with Unmatched Flair",
      description:
        "No cookie-cutter solutions here! Just bold ideas so wild, your audience will say, ‘Wow, didn’t see that coming!’",
      bgColor: "bg-violet-200",
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
    <div id="solution" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto pt-4 mb-10 md:mb-12">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (sectionsRef.current[card.id] = el)}
          id={card.id}
          className="group w-full sm:w-full md:w-96 h-[350px] perspective"
        >
          <div
            className={`relative w-full h-full rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
              flippedStates[index] ? "rotate-y-180" : ""
            }`}
          >
            <div
              className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden ${card.bgColor}`}
            >
              <div className="border-2 border-black absolute top-6 left-4 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                {card.solution}
              </div>
              <div className="absolute top-6 right-4 rounded-full text-sm font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                  alt="icon"
                  className="w-8"
                />
              </div>

              <div className="p-4 h-1/2 flex flex-col items-center justify-center mt-20">
                <h3 className="text-lg md:text-xl font-bold text-left">{card.title}</h3>
              </div>

              <button
                onClick={() => handleFlip(index)}
                className="absolute bottom-4 right-4 px-4 py-4 border-2 border-black bg-white rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div
              className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${card.bgColor}`}
            >
              <div className="border-2 border-black absolute top-6 left-4 bg-white px-6 py-3 rounded-full text-sm font-semibold">
                Solution
              </div>
              <div className="absolute top-6 right-4 rounded-full text-sm font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdb85d740ac1a54de3fdc1_icon-grid.svg"
                  alt="icon"
                  className="w-8"
                />
              </div>
              <p className="text-justify text-md md:text-lg">
                {card.description}
              </p>
              <button
                onClick={() => handleFlip(index)}
                className="px-5 py-4 border-2 border-black absolute bottom-4 right-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition font-bold text-2xl"
              >
                —
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
