const CaseCard: React.FC = () => {
  const cases = [
    {
      image:
        "https://cdn.prod.website-files.com/66bbc417df501b935e5152ee/66e2f9b0fecdd6bfd76e651e_pexels-bertellifotografia-2467506-p-500.webp",
      title: "Driving 75% Growth",
      description:
        "How We Boosted Logoipsum Online Presence and Conversions by 75%",
      tags: ["Organic growth", "Advertising"],
    },
    {
      image:
        "https://cdn.prod.website-files.com/66bbc417df501b935e5152ee/66e2fcfd250a89399734758e_pexels-laryssa-suaid-798122-3616984-p-500.webp",
      title: "From Zero to Hero",
      description: "How Ipsum Doubled Their Social Media Impact",
      tags: ["Content creation", "SEO"],
    },
    {
      image:
        "https://cdn.prod.website-files.com/66bbc417df501b935e5152ee/66e2fce994b92a9d52ef76af_pexels-ivan-samkov-7213361-p-500.webp",
      title: "Scaling Success",
      description:
        "How We Elevated Lipsum Brand and Drove a 60% Increase in Lead Generation",
      tags: ["SEO", "Advertising"],
    },
  ];

  // Define a mapping of tags to specific colors
  const tagColorMap: { [key: string]: string } = {
    "Organic growth": "bg-blue-200",
    Advertising: "bg-red-200",
    "Content creation": "bg-green-200",
    SEO: "bg-yellow-200",
  };

  return (
    <div className="p-8 min-h-screen ">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Leading business trusted <span className="text-yellow-500">👍</span> us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cases.map((caseItem, index) => (
          <div key={index}>
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full h-64 object-cover rounded-3xl transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:shadow-2xl"
            />

            <div className="p-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {caseItem.title}
              </h3>
              <hr className="my-3 border-t-2" />
              <p className="text-gray-600 mt-2 text-md md:text-xl">
                {caseItem.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {caseItem.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-sm md:text-lg font-medium px-5 py-2 rounded-full ${
                      tagColorMap[tag] || "bg-gray-200"
                    } text-gray-700`}
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
