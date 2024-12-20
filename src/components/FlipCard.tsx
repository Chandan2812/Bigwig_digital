import { useState,useRef } from "react";
import social_management from "../assets/social-media-manage.jpg"
import seo from "../assets/seo1.jpg"
const FlipCard = () => {
  const cards = [
    {
      id: "solution1",
      solution: "Social Media Management",
      title: "Finding the Perfect Balance Between Your Brand's Purpose and Social Media Presence",
      description:
        "Social media is like a party, and your brand needs to be the life of it—not the awkward one in the corner. With our strategies, you'll charm the crowd, start meaningful conversations, and leave everyone wanting more. All powered by some serious research and trend magic!",
      image: social_management,
      bgColor: "bg-yellow-200",
    },
    {
      id: "solution2",
      solution: "Search Engine Optimization",
      title: "Boosting Your Online Visibility to Help Your Brand Shine",
      description:
        "Think of us as your brand’s personal trainer, but for search engines. We’ll whip your online presence into shape, get you climbing those rankings, and have your audience saying, ‘How did we not see this sooner?’",
      image: seo,
      bgColor: "bg-blue-200",
    },
    {
      id: "solution3",
      solution: "Performance Marketing",
      title: "Marketing Strategies That Help You Stay Ahead of the Competition",
      description:
        "Marketing is a race, and we’re here to make sure you’re not the one tripping over your shoelaces. Our data-driven approach will keep you ahead of the pack, converting browsers into buyers faster than you can say ‘ROI.’",
      image: "https://media.licdn.com/dms/image/C4E12AQEewYeoQlcUWA/article-cover_image-shrink_600_2000/0/1627198487357?e=2147483647&v=beta&t=GkhDhML28sg27hBGNbo-mLtzG2LRcReTGtLtFv8YeFM",
      bgColor: "bg-purple-200",
    },
    {
      id: "solution4",
      solution: "Online Reputation Management",
      title: "Building and Protecting Your Brand’s Online Reputation",
      description:
        "The internet never forgets, but don’t worry—we’ve got your back. With us on your team, your brand will look so good online that even your competitors might want to leave a five-star review!",
      image: "https://www.minddigital.com/wp-content/uploads/2015/01/Online-Reputation-Management-01.jpg",
      bgColor: "bg-green-200",
    },
    {
      id: "solution5",
      solution: "Branded Content",
      title: "Creating Content That Speaks Your Brand’s Language",
      description:
        "Content is king, but let’s be honest—it also needs to be funny, smart, and look amazing. That’s where we come in. We’ll create content that grabs attention, keeps it, and maybe even gets a standing ovation.",
      image: "https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Branded-content-types.png",
      bgColor: "bg-pink-200",
    },
    {
      id: "solution6",
      solution: "Creative Innovations",
      title: "Bringing Bold Ideas to Life Through Creative Storytelling",
      description:
        "Your brand deserves more than cookie-cutter creativity. We’ll serve up fresh, jaw-dropping ideas so good they’ll have your audience saying, ‘Wow, I didn’t see that coming!’ Let’s turn your wildest dreams into even wilder realities.",
      image: "https://blog.webit.org/wp-content/uploads/2015/03/OCIHO30.jpg",
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
    <div id="solution" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto pt-4 mb-10 md:mb-12">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (sectionsRef.current[card.id] = el)}
          id={card.id}
          className="group w-full sm:w-full md:w-96 h-[500px] perspective"
        >
          <div
            className={`relative w-full h-full rounded-lg transform-style-preserve-3d transition-transform duration-500 ${
              flippedStates[index] ? "rotate-y-180" : ""
            }`}
          >
            <div
              className={`absolute w-full h-full backface-hidden rounded-2xl overflow-hidden ${card.bgColor}`}
            >
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

              <div className="p-4 h-1/3 flex flex-col items-center justify-center mt-20">
                <h3 className="text-lg md:text-2xl font-bold">{card.title}</h3>
              </div>

              <div className="relative h-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-fill"
                />
                <button
                  onClick={() => handleFlip(index)}
                  className="absolute bottom-4 right-4 px-5 py-5 border-2 border-black bg-white rounded-full shadow-md hover:bg-gray-100 transition"
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

            <div
              className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col items-center justify-center p-6 ${card.bgColor}`}
            >
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
              <p className="text-justify text-md md:text-xl">
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
