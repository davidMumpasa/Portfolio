import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm David, nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p>
              I am an AI Engineer, Full-Stack Software Developer, and DevOps
              Engineer with a strong passion for solving complex problems and
              delivering innovative, high-quality solutions. Over the past two
              years, I have gained extensive experience in developing web-based
              and mobile applications, working on both the front-end and
              back-end using technologies such as React.js, Angular.js, React
              Native, Flask, Spring Boot, Java EE, Android Studio, and RESTful
              APIs.
              <br />
              <br />
              In addition to my software development expertise, I have a deep
              understanding of AI technologies, enabling me to build intelligent
              systems that leverage machine learning and data-driven insights.
              As a dedicated tester, I have worked with automation testing tools
              such as Selenium and Appium to ensure the quality and reliability
              of software.
              <br />
              <br />
              As a DevOps Engineer, I have worked with Jenkins to streamline and
              automate development pipelines, improving efficiency and
              scalability. With a strong foundation in both development and
              testing, I excel at creating efficient, scalable solutions that
              meet real-world needs, whether it's building intuitive user
              interfaces, robust back-end systems, or automating processes for
              continuous integration and deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
