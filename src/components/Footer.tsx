import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
  return (
    <div className="relative bg-white py-12">

      {/* Centered Footer Div */}
      <div className="relative z-10 mx-auto max-w-7xl px-14 md:px-16 py-12 rounded-xl bg-black text-white">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between mb-28">
          {/* Left Section */}
          <h1 className=" md:w-2/3 text-3xl md:text-6xl text-left md:text-left mb-6 md:mb-0">
            Never miss an opportunity again 👉
          </h1>

          {/* Right Section - Newsletter */}
          <div className="md:w-1/3 flex flex-col sm:px-8 items-start">
            <label
              htmlFor="email"
              className="text-xl mb-2 text-gray-300"
            >
              Subscribe to our newsletter
            </label>
            <div className="flex flex-col items-start gap-5">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="md:w-80 px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="ml-2 px-5 py-3 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        
        {/* Bottom Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:text-left">
          {/* Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Cases</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>Features 1</li>
              <li>Features 2</li>
              <li>Features 3</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>Solutions 1</li>
              <li>Solutions 2</li>
              <li>Solutions 3</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Contact 1</li>
              <li>Contact 2</li>
              <li>Contact 3</li>
            </ul>
          </div>

          {/* Social */}
          <div>
      <h4 className="text-lg font-semibold mb-4">Social</h4>
      <div className="sm:w-full flex justify-start space-x-5 md:space-x-4 border-3 border-red-600 z-50">
        {/* Social Icons */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
        </div>
        </div>

        {/* Footer Bottom */}
        <div className="mx-auto max-w-7xl mt-8 flex flex-col md:flex-row text-center justify-between items-center text-md text-gray-700">
          <p className="mb-4 md:mb-0 px-10">
            © Engage Template — Powered by Webflow | Created by template.supply
          </p>
          <div className="flex space-x-5">
            <a href="#" className="hover:underline">
              Style Guide
            </a>
            <a href="#" className="hover:underline">
              Licenses
            </a>
            <a href="#" className="hover:underline">
              Changelog
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
