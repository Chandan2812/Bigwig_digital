import React from "react";

interface CaseCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const CaseCard: React.FC = () => {
    const cases = [
        {
          image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152ee/66e2f9b0fecdd6bfd76e651e_pexels-bertellifotografia-2467506-p-500.webp", // Replace with the actual image URLs
          title: "Driving 75% Growth",
          description: "How We Boosted Logoipsum Online Presence and Conversions by 75%",
          tags: ["Organic growth", "Advertising"],
        },
        {
          image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152ee/66e2fcfd250a89399734758e_pexels-laryssa-suaid-798122-3616984-p-500.webp",
          title: "From Zero to Hero",
          description: "How Ipsum Doubled Their Social Media Impact",
          tags: ["Content creation", "SEO"],
        },
        {
          image: "https://cdn.prod.website-files.com/66bbc417df501b935e5152ee/66e2fce994b92a9d52ef76af_pexels-ivan-samkov-7213361-p-500.webp",
          title: "Scaling Success",
          description: "How We Elevated Lipsum Brand and Drove a 60% Increase in Lead Generation",
          tags: ["SEO", "Advertising"],
        },
      ];
  return (
    <div className="p-8 bg-gray-50 min-h-screen ">
        
    {/* Header Section */}
    <h1 className="text-4xl font-bold text-gray-900 mb-6">
      Leading business trusted <span className="text-yellow-500">👍</span> us
    </h1>
    
    {/* Case Studies */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cases.map((caseItem, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden"
        >
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">{caseItem.title}</h3>
            <p className="text-gray-600 mt-2">{caseItem.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {caseItem.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default CaseCard;
