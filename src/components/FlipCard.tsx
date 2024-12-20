import { useState,useRef } from "react";

const FlipCard = () => {
  const cards = [
    {
      id: "solution1",
      solution: "Lead Management System",
      title: "Streamlining Your Leads, End-to-End",
      description:
        "Unleash your digital prowess! With our customized online wizardry, we won't just increase brand awareness but reshuffle the entire deck, ensuring every potential customer has a VIP pass to a seamless journey from discovery to purchase. And missed opportunities? Pfft…they won't stand a chance!",
      bgColor: "bg-yellow-200",
    },
    {
      id: "solution2",
      solution: "Impactful Awareness Campaigns",
      title: "Provocative Campaigns That'll Make Your Awareness Meter Skyrocket",
      description:
        "Have a brand itching to glimmer in the vast digital universe? Well, you've hit the jackpot! We're just a bunch of creative maestros armed with integral insights and the newest technology, hell-bent on bulking up your brand with tailor-made strategies. We'll snatch attention, ignite a sentimental wildfire, and flawlessly serve up a platter of measurable success - all topped with a cherry on top!",
      bgColor: "bg-blue-200",
    },
    {
      id: "solution3",
      solution: "Influencer Marketing",
      title: "Amplify Your Brand with Trusted Voices",
      description:
        "Get ready to team up with the influencer elite to construct your brand's saga! From our ingenious strategy steps through to the grand final execution, we're primed to help you orchestrate campaigns that not only skyrocket brand awareness and build up trust thicker than a brick wall, but also deliver results that might just make you do a double-take!",
      image: "https://media.licdn.com/dms/image/C4E12AQEewYeoQlcUWA/article-cover_image-shrink_600_2000/0/1627198487357?e=2147483647&v=beta&t=GkhDhML28sg27hBGNbo-mLtzG2LRcReTGtLtFv8YeFM",
      bgColor: "bg-purple-200",
    },
    {
      id: "solution4",
      solution: "Live Coverage",
      title: "Bringing Events to Life, Virtually",
      description:
        "Ditch the FOMO, we've got you covered! Let us teleport your audience straight into the action, making every live event feel like they're on the front row! Whether it's a happening event or a casual occasion, we make the world of pixels an unforgettable experience",
      image: "https://www.minddigital.com/wp-content/uploads/2015/01/Online-Reputation-Management-01.jpg",
      bgColor: "bg-green-200",
    },
    {
      id: "solution5",
      solution: "Public Relations",
      title: "Building Bridges with the Media",
      description:
        "Crave a little fame? With our savvy media relations skills, we'll transform your winners into headline news. From your cozy town newsletter to the front page of the New York Times, rest assured, your achievements won't go unnoticed. Aren't you already feeling like a celebrity?",
      image: "https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Branded-content-types.png",
      bgColor: "bg-pink-200",
    },
    {
      id: "solution6",
      solution: "Video Shoots",
      title: "Crafting Stories, Frame by Frame",
      description:
        "Got a brand story to tell, an event to relive, or a documentary to memorialize? We are the cinematographic alchemists you're looking for! We transform your vision into high-definition reality. And our videos? They don't just reach your audience - they have a little chit-chat, share a laugh, and make a deep connection that resonates.",
      bgColor: "bg-teal-200",
    },
    {
      id: "solution7",
      solution: "Branded Content",
      title: "Creating Content That Speaks Your Brand’s Language",
      description:
        "Content is king, but let’s be honest—it also needs to be funny, smart, and look amazing. That’s where we come in. We’ll create content that grabs attention, keeps it, and maybe even gets a standing ovation.",
      bgColor: "bg-orange-200",
    },
    {
      id: "solution8",
      solution: "Creative Innovations",
      title: "Bringing Bold Ideas to Life Through Creative Storytelling",
      description:
        "Your brand deserves more than cookie-cutter creativity. We’ll serve up fresh, jaw-dropping ideas so good they’ll have your audience saying, ‘Wow, I didn’t see that coming!’ Let’s turn your wildest dreams into even wilder realities.",
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
