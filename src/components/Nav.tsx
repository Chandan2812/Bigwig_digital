import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-black font-bold text-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.75v12.5M20.25 5.75v12.5M8.75 9.75l3.5-4 3.5 4M8.75 14.25l3.5 4 3.5-4"
              />
            </svg>
            engage®
          </span>
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
        <ul className="hidden md:flex items-center space-x-6 text-black-600 font-bold">
          <li>
            <button className="hover:text-black">Features</button>
          </li>
          <li>
            <button className="hover:text-black">Solutions</button>
          </li>
          <li>
            <button className="hover:text-black">Contact</button>
          </li>
          <li>
            <button className="hover:text-black">Cases</button>
          </li>
          <li>
            <button className="hover:text-black">Blog</button>
          </li>
          <li>
            <button className="hover:text-black">About</button>
          </li>
          <li>
            <button className="hover:text-black">Pricing</button>
          </li>
          <li>
            <button className="hover:text-black">Shop</button>
          </li>
          <li>
            <button className="hover:text-black">FAQ</button>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-1 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18l-2.4 9.6a2 2 0 01-2 1.4H7.4a2 2 0 01-2-1.4L3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 21h4m-7-3h10"
              />
            </svg>
            <span className="text-sm">0</span>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Request a demo
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <button className="text-gray-600 hover:text-black">Features</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">Solutions</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">Contact</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">Cases</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">Blog</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">About</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">Pricing</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">Shop</button>
            </li>
            <li>
              <button className="text-gray-600 hover:text-black">FAQ</button>
            </li>
            <li>
              <div className="flex items-center justify-center space-x-2">
                <div className="flex items-center space-x-1 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h18l-2.4 9.6a2 2 0 01-2 1.4H7.4a2 2 0 01-2-1.4L3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 21h4m-7-3h10"
                    />
                  </svg>
                  <span className="text-sm">0</span>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                  Request a demo
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
