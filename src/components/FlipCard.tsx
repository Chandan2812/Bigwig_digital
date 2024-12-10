import React from "react";

const FlipCard: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: "Crafting a compelling brand identity and positioning strategy",
      buttonText: "Discover solution",
      bgColor: "bg-purple-200",
    },
    {
      id: 2,
      title: "Developing data-driven campaigns across platforms",
      buttonText: "Discover solution",
      bgColor: "bg-yellow-200",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Producing high-quality content that aligns with SEO best practices",
      buttonText: "Discover solution",
      bgColor: "bg-blue-200",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Managing and optimizing social media channels to build engagement",
      buttonText: "Discover solution",
      bgColor: "bg-purple-200",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Leveraging analytics to inform marketing strategies",
      buttonText: "Discover solution",
      bgColor: "bg-red-200",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  // Split solutions into two groups
  const group1 = solutions.slice(0, 2); // First two cards
  const group2 = solutions.slice(2); // Remaining three cards

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-6xl font-medium">Our solutions</h2>
          <button className="text-md border border-black rounded-full p-3 text-white font-bold bg-black transition-transform duration-500 hover:scale-110 hover:rotate-2">
            View all solutions
          </button>
        </div>

        {/* Group 1 */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {group1.map((solution) => (
            <div
              key={solution.id}
              className={`relative w-full h-96 flex flex-col justify-between p-6 rounded-lg shadow-md ${solution.bgColor}`}
            >
              <div>
                <p className="text-sm font-bold text-gray-700">Solution</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {solution.title}
                </h3>
              </div>
              <div>
                {solution.imageUrl && (
                  <img
                    src={solution.imageUrl}
                    alt="Solution"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                <button className="text-blue-600 text-sm font-medium">
                  {solution.buttonText} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Group 2 */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {group2.map((solution) => (
            <div
              key={solution.id}
              className={`relative w-full h-96 flex flex-col justify-between p-6 rounded-lg shadow-md ${solution.bgColor}`}
            >
              <div>
                <p className="text-sm font-bold text-gray-700">Solution</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {solution.title}
                </h3>
              </div>
              <div>
                {solution.imageUrl && (
                  <img
                    src={solution.imageUrl}
                    alt="Solution"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                <button className="text-blue-600 text-sm font-medium">
                  {solution.buttonText} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCard;
