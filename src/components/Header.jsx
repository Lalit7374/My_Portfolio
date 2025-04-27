import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-6 md:px-16 bg-gray-100">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Lalit Chowhan</h1>
      </div>

      <div className="hidden md:flex space-x-6">
        {/* Using react-scroll's Link for smooth scroll to each section */}
        <Link to="home" smooth={true} duration={500} className="hover:text-orange-600 text-lg transition">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="hover:text-orange-600 text-lg transition">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-orange-600 text-lg transition">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-orange-600 text-lg transition">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
