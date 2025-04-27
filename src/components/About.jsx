import React, { useState } from 'react';
import BannerImg from "../assets/developer2.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore); // Toggle the showMore state when button is clicked
  };

  return (
    <div className='main-container py-12 bg-gray-100'>
      <h1 className='text-center pb-10 text-4xl md:text-5xl underline font-bold'>About Me</h1>
      
      <div className='image-container flex flex-col md:flex-row items-center gap-10 px-6'>
        
        {/* Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img className='rounded-full shadow-lg w-60 h-60 md:w-80 md:h-80 object-cover' src={BannerImg} alt="Developer" />
        </div>

        {/* Text */}
        <div className='text-container w-full md:w-1/2 flex justify-center'>
          <div className='space-y-5 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl font-semibold text-center'>
              Software Developer & Full Stack Developer
            </h1>
            <p className='mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed'>
              I am a passionate <span className="text-orange-500 font-semibold">Software Developer</span> and <span className="text-orange-500 font-semibold">Full Stack Developer</span> with a deep understanding of both frontend and backend technologies. My expertise lies in building responsive, scalable, and user-friendly applications. I am highly skilled in crafting efficient code that is both maintainable and optimized for performance.
            </p>

            <p className='mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed'>
              I have hands-on experience working with modern web technologies like <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express.js</span>, and <span className="font-semibold">MongoDB</span>. My experience extends to developing robust APIs, managing databases, and designing beautiful, interactive user interfaces. I am committed to creating innovative and intuitive solutions that solve real-world problems.
            </p>

            <p className='mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed'>
              Whether it's building a high-performance backend system or creating a smooth and interactive frontend experience, I enjoy tackling complex challenges and delivering impactful results. With a strong foundation in both technical and problem-solving skills, I’m always ready to adapt to new tools and technologies to meet the evolving needs of the industry.
            </p>

            {/* Conditional Text */}
            {showMore && (
              <p className='mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed'>
                I am continuously improving my skills and learning new technologies to stay ahead in this ever-changing tech landscape. My goal is to contribute to projects that push boundaries, create value, and enhance user experience across various platforms.
              </p>
            )}

            <div className='flex justify-center md:justify-start'>
              <button 
                onClick={handleReadMoreClick} 
                className='bg-orange-500 px-4 py-2 text-xl rounded-full shadow-lg hover:bg-orange-600 transition'>
                {showMore ? "Read Less" : "Read More..."}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
