import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Frontend Developer", "Backend Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
        className="main-container flex flex-col md:flex-row items-center justify-center min-h-screen p-6"
      >
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-black md:text-white">
            Hi, I am
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-black md:text-white drop-shadow-lg">
            Lalit Chowhan
          </h1>
          <h2 className="text-2xl md:text-3xl text-black md:text-white font-medium">
            I am <span className="font-semibold text-orange-500" ref={el}></span>
          </h2>

          <p className="mt-3 text-black md:text-white max-w-md mx-auto text-sm md:text-lg leading-relaxed">
  I am a passionate and dedicated software developer with expertise in both <strong>frontend</strong> and <strong>backend</strong> technologies. I specialize in creating responsive, scalable, and user-centric applications that deliver real value. With a focus on clean code, performance, and seamless user experiences, I am committed to building innovative solutions that make an impact. Whether it's crafting intuitive interfaces or optimizing backend systems, I am always striving to learn, grow, and contribute to meaningful projects.
</p>


          {/* Social icons */}
          <div className="icons-container space-x-5 mt-4 flex justify-center md:justify-start">
            <a href="https://github.com/Lalit7374?tab=repositories" className="text-3xl md:text-4xl text-black md:text-white hover:text-gray-400 transition">
              <i className="fa-brands fa-square-github" />
            </a>
            <a href="https://linkedin.com/in/lalit-chowhan" className="text-3xl md:text-4xl text-black md:text-white hover:text-gray-400 transition">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="#contact" className="text-3xl md:text-4xl text-black md:text-white hover:text-gray-400 transition">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>

          {/* Contact button */}
          <a
            href="#contact"  // This links to the contact section on the same page
            className="mt-5 inline-block px-5 py-2 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img className="rounded-full shadow-lg w-48 h-48 md:w-80 md:h-80 object-cover" src="developer.avif" alt="Developer" />
        </div>
      </div>
    </>
  );
};

export default Banner;
