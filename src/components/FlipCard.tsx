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
      imageUrl: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66d0cf1daf8c2481544f173a_solution-p-500.webp",
    },
    {
      id: 3,
      title: "Producing high-quality content that aligns with SEO best practices",
      buttonText: "Discover solution",
      bgColor: "bg-blue-200",
      imageUrl: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc089c1f9a68e096be4e6_pexels-laura-villela-brasil-438615876-27308773-p-500.webp",
    },
    {
      id: 4,
      title: "Managing and optimizing social media channels to build engagement",
      buttonText: "Discover solution",
      bgColor: "bg-purple-200",
      imageUrl: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc172720632effb1eb63c_pexels-buro-millennial-636760-1438081-p-500.webp",
    },
    {
      id: 5,
      title: "Leveraging analytics to inform marketing strategies",
      buttonText: "Discover solution",
      bgColor: "bg-red-200",
      imageUrl: "https://cdn.prod.website-files.com/66bbc417df501b935e5152c6/66cdc22f20352e7c549a58f9_pexels-tim-samuel-6697318-p-500.webp",
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
          <h2 className="text-3xl md:text-6xl">Our solutions</h2>
          <button className="text-md border border-black rounded-full p-3 text-white font-bold bg-black transition-transform duration-500 hover:scale-110 hover:rotate-2">
            View all solutions
          </button>
        </div>

        {/* Group 1 */}
        <div className="md:flex gap-6 flex">
        {group1.map((solution, index) => (
            <div
            key={solution.id}
            className={`relative ${
                index === 0 ? 'w-1/3 p-6' : 'w-2/3 p-0'
            } h-96 flex flex-col justify-between rounded-lg shadow-md ${solution.bgColor}`}
            >
            {/* Conditional rendering for the first and second card */}
            {index === 0 ? (
                // First card: Only text and button
                <div>
                <p className="text-sm font-bold text-gray-700">Solution</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {solution.title}
                </h3>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                    {solution.buttonText} →
                </button>
                </div>
            ) : (
                // Second card: Full-image card
                <div className="relative w-full h-full">
                {solution.imageUrl && (
                    <img
                    src={solution.imageUrl}
                    alt="Solution"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                )}
                </div>
            )}
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
                    className="w-full h-52 object-cover rounded-lg mb-4"
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
