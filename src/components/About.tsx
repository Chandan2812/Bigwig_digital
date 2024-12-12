import about from "../assets/about-us.webp"
const AboutUs = () => {
  return (
    <section id="about" className=" py-16 px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
          At BigwigMedia, we are passionate about helping businesses grow and succeed in the digital world. With years of expertise in digital marketing, we specialize in providing data-driven strategies that deliver measurable results. Our team of experts in SEO, social media marketing, content creation, and paid advertising works collaboratively to craft tailored solutions for every client.
          </p>
          <p className="text-lg text-gray-600 mt-4">
          We understand that every business is unique, which is why we take the time to deeply understand your goals, target audience, and industry to develop custom strategies that ensure your brand stands out. From improving search engine rankings to creating compelling content and optimizing social media engagement, we offer a comprehensive suite of services to drive your online success.
          </p>
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
