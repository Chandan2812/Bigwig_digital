import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <button
            className="text-black font-bold text-lg flex items-center"
            onClick={() => handleScroll("top")}
          >
            BigwigMedia®
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-black-600 font-bold relative">
          <li
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="relative"
          >
            <button className="relative overflow-hidden group rounded-lg px-3 py-2">
              <span className="relative z-10">Solutions</span>
              <span className="absolute inset-0 bg-gray-200 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
            {/* Dropdown Container */}
            {isSolutionsOpen && (
              <div
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-[400px] h-[300px] grid grid-cols-3 gap-6"
              >
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution1")}
                >
                  Solution 1
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution2")}
                >
                  Solution 2
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution3")}
                >
                  Solution 3
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution4")}
                >
                  Solution 4
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution5")}
                >
                  Solution 5
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution6")}
                >
                  Solution 6
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution7")}
                >
                  Solution 7
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution8")}
                >
                  Solution 8
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution9")}
                >
                  Solution 9
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution9")}
                >
                  Solution 10
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution9")}
                >
                  Solution 11
                </button>
                <button
                  className="text-gray-600 hover:text-black text-sm text-left"
                  onClick={() => handleScroll("solution9")}
                >
                  Solution 12
                </button>
              </div>
            )}

          </li>
          <li>
            <button
              className="relative overflow-hidden group rounded-lg px-3 py-2"
              onClick={() => handleScroll("about")}
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gray-200 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
          <li>
            <button
              className="relative overflow-hidden group rounded-lg px-3 py-2"
              onClick={() => handleScroll("faq")}
            >
              <span className="relative z-10">FAQ</span>
              <span className="absolute inset-0 bg-gray-200 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
          <li>
            <button
              className="relative overflow-hidden group rounded-lg px-3 py-2"
              onClick={() => handleScroll("blog")}
            >
              <span className="relative z-10">Blogs</span>
              <span className="absolute inset-0 bg-gray-200 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6"></div>
      </div>

      {/* Overlay for Darkening/Blur Effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70" />
      )}
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[30vh] w-full max-w-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => handleScroll("solutions")}
              >
                Solutions
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => handleScroll("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => handleScroll("faq")}
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => handleScroll("blog")}
              >
                Blogs
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
