import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-200 py-16">
      {/* Footer Content */}
      <div className="container mx-auto px-8 md:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">BigwigMedia.ae</h2>
            <p className="text-gray-400">
              Elevating your media presence with innovative solutions and unmatched creativity. Let's build something extraordinary together.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Case Studies</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Featured Services Section */}
<div>
  <h3 className="text-lg font-semibold mb-4">Featured Services</h3>
  <p className="text-gray-400 mb-4">
    Our expert solutions to elevate your business.
  </p>
  <ul className="space-y-2">
    <li><a href="#" className="hover:underline">Digital Marketing</a></li>
    <li><a href="#" className="hover:underline">Video Production</a></li>
    <li><a href="#" className="hover:underline">Web Development</a></li>
    <li><a href="#" className="hover:underline">Graphic Design</a></li>
  </ul>
</div>


        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/bigwigmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/bigwigmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCA0GIfKW7ORxUT6_mMnEEzQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://x.com/bigwig_media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>

          {/* Footer Copy */}
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2024 BigwigMedia.ae. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
