import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
          className="rounded-lg shadow-lg w-full h-[25vh] md:h-[60vh]"
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
            Make every lead count with our tailored digital solutions. From awareness to conversion, we ensure a seamless journey for potential customers—leaving no room for missed opportunities.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c75865ce04bc4a2f6962_features-1-p-800.webp",
    },
    {
      id: 2,
      backgroundColor: "bg-blue-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Impactful Awareness Campaigns</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Clear Messages, Powerful Stories
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Let us help your brand shine with creative and impactful digital campaigns. Using the latest tech and insights, we’ll craft strategies to grab attention, spark emotion, and deliver measurable success.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c91de4d89a6bc9f7400e_features-2-p-800.webp",
    },
    {
      id: 3,
      backgroundColor: "bg-purple-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">OTT Advertising</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Reach Your Audience, Anytime, Anywhere
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            With the rise of platforms like Netflix and Hotstar, OTT offers unique ways to connect with audiences. We’ll help you unlock this potential using data-driven insights and precise targeting.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
    },
    {
      id: 4,
      backgroundColor: "bg-green-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Influencer Marketing</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Amplify Your Brand with Trusted Voices
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Collaborate with the right influencers to tell your brand story. From strategy to execution, we’ll help you create campaigns that drive awareness, build trust, and deliver results.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
    },
    {
      id: 5,
      backgroundColor: "bg-red-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">IEC - Information Education Communication</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Spreading Knowledge, Creating Impact
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            From brochures to radio spots, we’ll help you create materials that inform and inspire. Share vital information effectively and empower your audience to make informed decisions.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
    },
    {
      id: 6,
      backgroundColor: "bg-cyan-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Live Coverage</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Bringing Events to Life, Virtually
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Engage your audience in real time with live coverage that makes them feel part of the moment. From events to occasions, we make virtual experiences unforgettable.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
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
            Whether it’s a brand story, event, or documentary, we’ll capture it beautifully. Our high-quality video services ensure your message reaches and resonates with your audience.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
    },
    {
      id: 8,
      backgroundColor: "bg-pink-200",
      content: (
        <>
          <h1 className="text-4xl font-bold">Public Relations</h1>
          <div className="mt-2 inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-black text-sm">
            Building Bridges with the Media
          </div>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Stay in the spotlight with our media relations expertise. From local to national coverage, we’ll make sure your milestones get the attention they deserve.
          </p>
        </>
      ),
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cff2b375cf7c08117505_features-3-p-800.webp",
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
