import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} | Developed by <strong>Lalit Chowhan</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
