import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import social from "../assets/Handleey-Social-Media-Post.webp"
import affiliate from "../assets/afiliated.webp"
import google_ad from "../assets/google_ad.png"
import seo from "../assets/Handleey-Web_Analysis-New-removebg-preview.webp"
import performance from "../assets/Handleey-SMS-New-removebg-preview.webp"

type Section = {
  id: number;
  backgroundColor: string;
  content: React.ReactNode;
  image: string;
};

type AnimatedSectionProps = {
  section: Section;
  isReversed: boolean;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ section, isReversed }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,   // Trigger when 20% of the section is visible
  });

  return (
    <motion.div
      id={`solution${section.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row gap-9 w-11/12 mx-auto mb-20 rounded-xl h-fit ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center py-8 px-8 md:px-10 ${section.backgroundColor}`}
    >
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 text-black"
      >
        {section.content}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={section.image}
          alt={`Section ${section.id}`}
          className="rounded-lg w-full h-[25vh] md:h-[60vh]"
        />
      </motion.div>
    </motion.div>
  );
};

const ScrollSections: React.FC = () => {
  const sections: Section[] = [
    
    {
      id: 1,
      backgroundColor: "bg-yellow-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Social Media Management</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Balancing Your Brand's Mission and Social Media Presence
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Social media is like a party, and your brand needs to be the life of it—not the awkward one in the corner. With our strategies, you'll charm the crowd, start meaningful conversations, and leave everyone wanting more. All powered by some serious research and trend magic!</p>
        </>
      ),
      image: social,
    },
    {
      id: 2,
      backgroundColor: "bg-blue-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Search Engine Optimization</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Boosting Your Online Visibility to Help Your Brand Shine
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Think of us as your brand’s personal trainer, but for search engines. We’ll whip your online presence into shape, get you climbing those rankings, and have your audience saying, ‘How did we not see this sooner?’          </p>
        </>
      ),
      image: seo,
    },
    {
      id: 3,
      backgroundColor: "bg-pink-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Performance Marketing</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Marketing Strategies That Help You Stay Ahead of the Competition
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Marketing is a race, and we’re here to make sure you’re not the one tripping over your shoelaces. Our data-driven approach will keep you ahead of the pack, converting browsers into buyers faster than you can say ‘ROI.’          </p>
        </>
      ),
      image: performance,
    },
    {
      id: 4,
      backgroundColor: "bg-green-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Online Reputation Management</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Building and Protecting Your Brand’s Online Reputation
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          The internet never forgets, but don’t worry—we’ve got your back. With us on your team, your brand will look so good online that even your competitors might want to leave a five-star review!          </p>
        </>
      ),
      image: "https://handleey.com/handleey/assets/img/images/Pending-Reviews.png",
    },    
    {
      id: 5,
      backgroundColor: "bg-purple-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Affiliate Marketing</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Partnering Smartly to Multiply Your Reach!
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Think of us as your brand’s ultimate matchmaker—pairing you up with affiliates who will shout your praises from the rooftops (or at least their websites). We’ll help you create a win-win partnership so smooth, even Cupid would be jealous. Cha-ching for everyone involved!
          </p>
        </>
      ),
      image: affiliate,
    },
    {
      id: 6,
      backgroundColor: "bg-teal-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Google My Business</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Elevate Your Local Presence with GMB
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Get your business noticed on Google search and maps! With a strategic Google My Business profile, we'll help you attract more local customers, build credibility, and keep your audience engaged. From setup to optimization, we’ll ensure your business shines brightly in your neighborhood and beyond.
          </p>
        </>
      ),
      image: google_ad, // Replace 'gmb' with the actual imported image variable for Google My Business
    }
    
  ];
  

  return (
    <div>
      {sections.map((section, index) => (
        <AnimatedSection
          key={section.id}
          section={section}
          isReversed={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default ScrollSections;
