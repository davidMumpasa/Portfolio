import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          David Ebula
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a passionate full-stack developer, I specialize in crafting
          seamless, innovative digital experiences that blend both form and
          function. With a focus on creating intuitive, high-performance web
          applications, I’m currently dedicated to building scalable, responsive
          solutions that push the boundaries of what's possible in modern web
          development.
        </p>

        <div>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className="w-[160px] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-700"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
