import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-white py-12">

      {/* Centered Footer Div */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16 py-12 rounded-xl bg-black text-white">
        {/* Top Section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Left Section */}
          <h1 className="text-3xl font-bold text-center md:text-left mb-6 md:mb-0">
            Never miss an opportunity again 👉
          </h1>

          {/* Right Section - Newsletter */}
          <div className="flex flex-col items-center md:items-end">
            <label
              htmlFor="email"
              className="text-sm mb-2 md:mr-1 text-gray-300"
            >
              Subscribe to our newsletter
            </label>
            <div className="flex items-center">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="ml-2 px-4 py-2 bg-purple-500 rounded-md text-white hover:bg-purple-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        
        {/* Bottom Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
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
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social Icons */}
              <span className="text-2xl cursor-pointer">🌐</span>
              <span className="text-2xl cursor-pointer">📷</span>
              <span className="text-2xl cursor-pointer">💼</span>
              <span className="text-2xl cursor-pointer">✖️</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            © Engage Template — Powered by Webflow | Created by template.supply
          </p>
          <div className="flex space-x-4">
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
    </div>
  );
};

export default Footer;
