import about from "../assets/about-us.webp"
const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
          We embarked on a journey fueled by a simple question, “Why does the admission process have to be so difficult for parents, students, and education organizations?” And that gave birth to the first-in-industry application automation platform for education organizations, with NoPaperForms becoming our identity.
          </p>
          <p className="text-lg text-gray-600 mt-4">
          We kept scaling the depth and breadth of our product, and our solutions expanded within the education industry, from EdTech Companies, Coaching & Training Institutes, Study Abroad Consultants, K12 Schools, Play & Pre-Schools to Higher Education Institutions.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={about} // Replace this URL with your actual image source
            alt="About Us"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
