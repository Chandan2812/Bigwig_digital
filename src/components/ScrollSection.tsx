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
      id="features"
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
      backgroundColor: "bg-purple-300",
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
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c75865ce04bc4a2f6962_features-1-p-800.webp",
    },
    {
      id: 2,
      backgroundColor: "bg-blue-300",
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
      image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0c91de4d89a6bc9f7400e_features-2-p-800.webp",
    },
    {
      id: 3,
      backgroundColor: "bg-green-300",
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
