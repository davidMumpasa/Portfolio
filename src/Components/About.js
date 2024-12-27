import React from "react";
import davidPic from "../Assets/davidEbula2.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center px-6 py-10"
    >
      <div className="max-w-[1000px] w-full">
        {/* Heading Section */}
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            About Me
          </p>
          <p className="text-gray-400 py-4 text-left">
            // Feel free to explore more about me.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Picture */}
          <div className="flex justify-center">
            <img
              src={davidPic}
              alt="About Me"
              className="rounded-lg shadow-lg w-72 h-72 object-cover"
            />
          </div>

          {/* Detailed Description */}
          <div className="text-justify text-base leading-relaxed">
            <p>
              I am an{" "}
              <span className="text-pink-400 font-semibold">AI Engineer</span>,
              <span className="text-pink-400 font-semibold">
                {" "}
                Full-Stack Software Developer
              </span>
              , and{" "}
              <span className="text-pink-400 font-semibold">
                DevOps Engineer
              </span>{" "}
              with a strong passion for solving complex problems and delivering
              innovative, high-quality solutions.
            </p>
            <p className="mt-4">
              Over the past two years, I have gained extensive experience in
              developing web-based and mobile applications, working on both the
              front-end and back-end using technologies such as React.js,
              Angular.js, React Native, Flask, Spring Boot, Java EE, Android
              Studio, and RESTful APIs.
            </p>
            <p className="mt-4">
              Additionally, I have a deep understanding of{" "}
              <span className="text-pink-400 font-semibold">
                AI technologies
              </span>
              , enabling me to build intelligent systems that leverage machine
              learning and data-driven insights. I am also skilled in automation
              testing tools such as Selenium and Appium, ensuring the quality
              and reliability of software solutions.
            </p>
            <p className="mt-4">
              As a{" "}
              <span className="text-pink-400 font-semibold">
                DevOps Engineer
              </span>
              , I have expertise in Jenkins, streamlining development pipelines,
              and automating processes for efficiency and scalability. My
              foundation in development and testing allows me to create
              efficient, scalable solutions, whether building intuitive user
              interfaces, robust back-end systems, or automating workflows for
              continuous integration and deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
