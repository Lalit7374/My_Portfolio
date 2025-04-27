import React from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2 px-4">
        <h1 className="mb-16 text-4xl md:text-5xl font-bold underline text-center">
          My Expertise
        </h1>

        {/* box section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container flex flex-col md:flex-row items-center justify-center py-16 space-y-10 md:space-y-0 md:space-x-10"
        >
          {/* text container */}
          <div className="text-white flex justify-center w-full md:w-1/2 text-center">
            <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
  Passionate About These Technologies
</h1>
<p className="text-base md:text-lg px-2">
  I am deeply passionate about leveraging modern technologies to create impactful solutions. With a focus on innovation, I enjoy working with tools that empower me to build robust, scalable, and efficient applications. Constantly learning and adapting to new advancements in tech, I strive to deliver high-quality and user-centric experiences.
</p>

            </div>
          </div>

          {/* skills container */}
          <div className="flex justify-center w-full md:w-1/2">
            <div className="flex justify-center items-center flex-wrap gap-3">
              {[
                "Core Java",
                "Python",
                "React",
                "Spring Framework",
                "Html",
                "Css",
                "Javascript",
                "Blockchain",
                "Tailwind CSS",
                "Angular",
                "NextJS",
                "State Management",
                "Rest Api",
              ].map((skill, index) => (
                <p
                  key={index}
                  className="bg-gray-300 text-gray-700 w-fit px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer transition"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
