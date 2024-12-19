import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import lms from "../assets/pngaaa.com-1499670.png"
import awareness from "../assets/gradient-activism-illustration_23-2150279230-removebg-preview.png"
import influencer from "../assets/rb_2148526236.png"
import live from "../assets/broadcasting-live-event_23-2148529703-removebg-preview.png"
import video from "../assets/videographer-concept-illustration_114360-1504-removebg-preview.png"
import relation from "../assets/Public Relations.png"
import affiliate from "../assets/Affiliate marketing (1).png"
import iec from "../assets/IEC.png"

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
      id={`solutions${section.id}`}
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
          <h1 className="text-4xl font-bold">Lead Management Systems</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Streamlining Your Leads, End-to-End
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Unleash your digital prowess! With our customized online wizardry, we won't just increase brand awareness but reshuffle the entire deck, ensuring every potential customer has a VIP pass to a seamless journey from discovery to purchase. And missed opportunities? Pfft…they won't stand a chance!
          </p>
        </>
      ),
      image: lms,
    },
    {
      id: 2,
      backgroundColor: "bg-blue-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Impactful Awareness Campaigns</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
          Provocative Campaigns That'll Make Your Awareness Meter Skyrocket
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Have a brand itching to glimmer in the vast digital universe? Well, you've hit the jackpot! We're just a bunch of creative maestros armed with integral insights and the newest technology, hell-bent on bulking up your brand with tailor-made strategies. We'll snatch attention, ignite a sentimental wildfire, and flawlessly serve up a platter of measurable success - all topped with a cherry on top!
          </p>
        </>
      ),
      image: awareness,
    },
    {
      id: 3,
      backgroundColor: "bg-green-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Influencer Marketing</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Amplify Your Brand with Trusted Voices
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Get ready to team up with the influencer elite to construct your brand's saga! From our ingenious strategy steps through to the grand final execution, we're primed to help you orchestrate campaigns that not only skyrocket brand awareness and build up trust thicker than a brick wall, but also deliver results that might just make you do a double-take!
          </p>
        </>
      ),
      image: influencer,
    },
    {
      id: 4,
      backgroundColor: "bg-red-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">IEC - Information Education Communication</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Spreading Knowledge, Creating Impact
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          From daredevil brochures to smooth-talking radio spots, we're the Michelangelo of your marketing materials. We’ll paint a vivid picture that not just dispenses information, but makes it as thrilling to read as a detective novel. Prepare to power up your audience with knowledge so they can leap tall decisions in a single bound
          </p>
        </>
      ),
      image: iec,
    },
    {
      id: 5,
      backgroundColor: "bg-cyan-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Live Coverage</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Bringing Events to Life, Virtually
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Ditch the FOMO, we've got you covered! Let us teleport your audience straight into the action, making every live event feel like they're on the front row! Whether it's a happening event or a casual occasion, we make the world of pixels an unforgettable experience
          </p>
        </>
      ),
      image: live,
    },
    {
      id: 6,
      backgroundColor: "bg-rose-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Public Relations</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Building Bridges with the Media
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Crave a little fame? With our savvy media relations skills, we'll transform your winners into headline news. From your cozy town newsletter to the front page of the New York Times, rest assured, your achievements won't go unnoticed. Aren't you already feeling like a celebrity?
          </p>
        </>
      ),
      image: relation,
    },
    {
      id: 7,
      backgroundColor: "bg-gray-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Video Shoots</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Crafting Stories, Frame by Frame
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
          Got a brand story to tell, an event to relive, or a documentary to memorialize? We are the cinematographic alchemists you're looking for! We transform your vision into high-definition reality. And our videos? They don't just reach your audience - they have a little chit-chat, share a laugh, and make a deep connection that resonates.
          </p>
        </>
      ),
      image: video,
    },
    
    {
      id: 8,
      backgroundColor: "bg-rose-200",
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
