import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaRocket,
  FaBrain,
  FaCloud,
  FaArrowRight,
  FaDownload,
  FaPlay,
  FaStar,
  FaEye,
  FaMagic,
  FaHeart,
  FaBuilding,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import Resume from "../Resume/David.pdf";

const ModernPortfolio = () => {
  const [nav, setNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setNav(!nav);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setNav(false);
  };

  // Floating particles with dark sophisticated colors
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full animate-pulse ${
            i % 4 === 0
              ? "bg-gradient-to-r from-cyan-500 to-blue-600"
              : i % 4 === 1
              ? "bg-gradient-to-r from-emerald-500 to-teal-600"
              : i % 4 === 2
              ? "bg-gradient-to-r from-purple-600 to-indigo-700"
              : "bg-gradient-to-r from-violet-600 to-purple-700"
          }`}
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );

  // Animated background elements with darker colors
  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>
    </div>
  );

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed w-full h-20 flex justify-between items-center px-6 bg-slate-900/90 backdrop-blur-md text-white z-50 border-b border-slate-700/50">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
          DE
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          David Ebula
        </span>
      </div>

      <ul className="hidden md:flex space-x-8">
        {["home", "about", "skills", "work", "experience", "contact"].map(
          (item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-cyan-400 transition-all duration-300 relative font-medium ${
                  activeSection === item ? "text-cyan-400" : ""
                }`}
              >
                {item}
                {activeSection === item && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
                )}
              </button>
            </li>
          )
        )}
      </ul>

      <button
        onClick={handleClick}
        className="md:hidden z-10 text-2xl text-cyan-400"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile Menu */}
      {nav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-md flex flex-col justify-center items-center">
          {["home", "about", "skills", "work", "experience", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="py-6 text-4xl capitalize hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );

  // Hero Section
  const Hero = () => (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden"
    >
      <AnimatedBackground />
      <Particles />

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <div className="mb-8 relative">
          <div className="w-56 h-56 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-slate-800 to-gray-900 rounded-full flex items-center justify-center text-7xl font-bold text-white border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                DE
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-2 text-cyan-400">
            <HiSparkles className="animate-pulse" />
            <p className="text-xl font-medium">Hi, my name is</p>
            <HiSparkles className="animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            David Ebula
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Lead & AI Engineer
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <FaMagic className="text-yellow-500 animate-spin" />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Experienced Full-Stack Software Developer and AI Engineer with
              expertise in building scalable AI-driven applications, REST APIs,
              and leading cross-functional teams to deliver innovative
              solutions.
            </p>
            <FaMagic className="text-yellow-500 animate-spin" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection("work")}
            className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-110"
          >
            <FaRocket className="group-hover:animate-bounce" />
            <span>View My Work</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          {/* <button className="border-2 border-transparent bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <FaDownload className="animate-pulse" />
            <span>View Resume</span>
          </button> */}

          <a
            className="border-2 border-transparent bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="animate-pulse" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Contact Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 p-4 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30">
            <FaMapMarkerAlt className="text-cyan-400 text-lg" />
            <span className="text-gray-300 font-medium">
              Pretoria, Gauteng, South Africa
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30">
            <FaPhone className="text-emerald-400 text-lg" />
            <span className="text-gray-300 font-medium">+27 67 819 2979</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30">
            <HiOutlineMail className="text-purple-400 text-lg" />
            <span className="text-gray-300 font-medium">
              davidebula642@gmail.com
            </span>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-cyan-300 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-purple-300 font-medium">Companies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl backdrop-blur-sm border border-emerald-500/30">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-emerald-300 font-medium">Projects</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-cyan-400 rounded-full flex justify-center shadow-lg shadow-cyan-400/50">
          <div className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );

  // About Section
  const About = () => (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 relative"
    >
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
            <FaBrain className="inline-block ml-4 text-cyan-400 animate-pulse" />
          </h2>
          <p className="text-cyan-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Passionate Technical Lead with expertise in AI-driven solutions and
            full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/30">
              <div className="flex items-center space-x-3 mb-4">
                <FaGraduationCap className="text-emerald-400 text-2xl" />
                <h3 className="text-white font-bold text-xl">Education</h3>
              </div>
              <p className="text-gray-300 text-lg">
                <span className="font-bold text-cyan-400">
                  Bachelor of Computer Science
                </span>
                <br />
                Tshwane University of Technology (2020 - 2023)
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              I am an experienced{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                Full-Stack Software Developer
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-bold">
                AI Engineer
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold">
                Technical Lead
              </span>{" "}
              with a strong background in software development, AI-driven
              solutions, and technical leadership.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Skilled in web, mobile, and AI-powered applications, with a proven
              track record of leading teams, driving innovation, and delivering
              scalable solutions in both startup and enterprise environments.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-6 rounded-2xl border-2 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                <FaBrain className="text-cyan-400 text-3xl mb-3" />
                <h3 className="text-white font-bold mb-2 text-lg">
                  AI Engineering
                </h3>
                <p className="text-cyan-300 text-sm">NLP & Computer Vision</p>
              </div>
              <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 p-6 rounded-2xl border-2 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105">
                <FaCode className="text-purple-400 text-3xl mb-3" />
                <h3 className="text-white font-bold mb-2 text-lg">
                  Full Stack
                </h3>
                <p className="text-purple-300 text-sm">
                  End-to-end Development
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 p-6 rounded-2xl border-2 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-300 transform hover:scale-105">
                <FaRocket className="text-emerald-400 text-3xl mb-3" />
                <h3 className="text-white font-bold mb-2 text-lg">
                  Technical Lead
                </h3>
                <p className="text-emerald-300 text-sm">Team Leadership</p>
              </div>
              <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-6 rounded-2xl border-2 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105">
                <FaCloud className="text-blue-400 text-3xl mb-3" />
                <h3 className="text-white font-bold mb-2 text-lg">REST APIs</h3>
                <p className="text-blue-300 text-sm">
                  Scalable Backend Services
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-96 h-96 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-3xl flex items-center justify-center text-9xl font-bold text-white border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-2xl">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  DE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Experience Section
  const Experience = () => (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative"
    >
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </span>
            <FaBuilding className="inline-block ml-4 text-emerald-400 animate-pulse" />
          </h2>
          <p className="text-cyan-300 text-xl max-w-2xl mx-auto">
            My professional journey in software development and AI engineering
          </p>
        </div>

        <div className="space-y-12">
          {/* Fluid Intellect */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-slate-700/30 hover:border-cyan-500/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  Technical Lead – Software Developer & AI Engineer
                </h3>
                <p className="text-emerald-400 font-bold text-lg flex items-center">
                  <FaBuilding className="mr-2" />
                  Fluid Intellect
                </p>
              </div>
              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-cyan-500/30">
                <span className="text-cyan-300 font-bold">2023 - Present</span>
              </div>
            </div>

            <ul className="text-gray-300 space-y-3 text-lg">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Designed and implemented scalable REST APIs and backend services
                to support AI-driven applications
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Collaborated with cross-functional teams to design and deliver
                AI-powered solutions, including NLP tools and computer vision
                systems
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Developed responsive and interactive user interfaces using
                Angular.js and React Native
              </li>
            </ul>
          </div>

          {/* XGile-IT */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-slate-700/30 hover:border-emerald-500/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
                  Software Developer
                </h3>
                <p className="text-emerald-400 font-bold text-lg flex items-center">
                  <FaBuilding className="mr-2" />
                  XGile-IT
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 px-4 py-2 rounded-full border border-emerald-500/30">
                <span className="text-emerald-300 font-bold">2022 - 2023</span>
              </div>
            </div>

            <ul className="text-gray-300 space-y-3 text-lg">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Designed and built robust REST APIs to support seamless
                integration with frontend components
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Contributed to the design and development of mobile
                applications, focusing on responsive and intuitive user
                interfaces
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Enhanced application performance and user experience through
                optimized backend services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  // Skills Section
  const Skills = () => {
    const skills = [
      {
        name: "Python",
        level: 90,
        icon: "🐍",
        color: "from-yellow-500 to-orange-600",
      },
      {
        name: "Java",
        level: 85,
        icon: "☕",
        color: "from-orange-500 to-red-600",
      },
      {
        name: "React.js",
        level: 90,
        icon: "⚛️",
        color: "from-cyan-500 to-blue-600",
      },
      {
        name: "Angular.js",
        level: 80,
        icon: "🅰️",
        color: "from-red-500 to-rose-600",
      },
      {
        name: "Spring Boot",
        level: 85,
        icon: "🍃",
        color: "from-green-500 to-emerald-600",
      },
      {
        name: "React Native",
        level: 80,
        icon: "📱",
        color: "from-blue-500 to-indigo-600",
      },
      {
        name: "MySQL",
        level: 85,
        icon: "🗄️",
        color: "from-blue-600 to-cyan-700",
      },
      {
        name: "Jenkins",
        level: 75,
        icon: "🔧",
        color: "from-gray-500 to-slate-600",
      },
      {
        name: "REST API",
        level: 95,
        icon: "🔗",
        color: "from-purple-500 to-indigo-600",
      },
      {
        name: "C# .NET",
        level: 75,
        icon: "#️⃣",
        color: "from-purple-600 to-violet-700",
      },
    ];

    return (
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative"
      >
        <AnimatedBackground />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Skills
              </span>
              <HiSparkles className="inline-block ml-4 text-yellow-500 animate-spin" />
            </h2>
            <p className="text-cyan-300 text-xl max-w-2xl mx-auto">
              Technologies and tools I use to build innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-3xl border-2 border-slate-700/30 hover:border-slate-600/60 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group shadow-2xl"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 text-center">
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold mb-3 text-lg text-center">
                  {skill.name}
                </h3>
                <div className="w-full bg-slate-700/50 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1500 ease-out shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm font-medium">
                    {skill.level}%
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${
                          i < Math.floor(skill.level / 20)
                            ? "text-yellow-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages & Certificates */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-slate-700/30">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">English</span>
                  <span className="text-emerald-400 font-bold">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">French</span>
                  <span className="text-cyan-400 font-bold">
                    Conversational
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-slate-700/30">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-white font-medium">
                    Cisco Networking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Projects Section
  const Projects = () => {
    const projects = [
      {
        title: "CMS Health Benefits Bridge",
        description:
          "Web portal for South Africa's largest medical scheme regulator with structured data entry and role-based workflows",
        tech: ["Python", "Flask", "React.js", "MySQL"],
        features: [
          "Structured benefit data entry",
          "Role-based workflows",
          "Email approval system",
        ],
        color: "from-blue-600 to-cyan-700",
        role: "Software Developer / Technical Lead",
      },
      {
        title: "Satori - Custom Generative AI",
        description:
          "Custom AI platform for document and database querying with advanced NLP and machine learning algorithms",
        tech: ["Python", "NLP", "Machine Learning", "MySQL", "AWS"],
        features: [
          "Document querying",
          "Database integration",
          "Context-aware responses",
        ],
        color: "from-purple-600 to-indigo-700",
        role: "AI Engineer / Technical Lead",
      },
      {
        title: "Flight Reservation System",
        description:
          "Complete flight booking platform with real-time seat selection and payment integration",
        tech: ["Java", "Spring Boot", "MySQL"],
        github: "https://github.com/davidMumpasa/FlightReservation.git",
        features: ["Real-time booking", "Payment gateway", "Admin dashboard"],
        color: "from-emerald-600 to-teal-700",
      },
      {
        title: "Task Management System",
        description:
          "Full-stack project management solution with team collaboration features",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/davidMumpasa/TaskManagementSystem.git",
        features: [
          "Team collaboration",
          "Real-time updates",
          "Progress tracking",
        ],
        color: "from-cyan-600 to-blue-700",
      },
      {
        title: "Hospital Management System",
        description: "Comprehensive healthcare management platform",
        tech: ["Java EE", "JSF", "Oracle DB"],
        github: "https://github.com/davidMumpasa/HospitalManagementSystem.git",
        features: [
          "Patient records",
          "Appointment scheduling",
          "Medical history",
        ],
        color: "from-red-600 to-rose-700",
      },
      {
        title: "Faculty Management System",
        description: "Academic administration and faculty management platform",
        tech: ["Angular", "Spring Boot", "MySQL"],
        github: "https://github.com/davidMumpasa/FacultyManagementSystem.git",
        features: ["Course management", "Student tracking", "Grade management"],
        color: "from-violet-600 to-purple-700",
      },
    ];

    return (
      <section
        id="work"
        className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative"
      >
        <AnimatedBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Projects
              </span>
              <FaRocket className="inline-block ml-4 text-yellow-500 animate-bounce" />
            </h2>
            <p className="text-cyan-300 text-xl max-w-2xl mx-auto">
              A showcase of my professional work and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-slate-700/30 hover:border-slate-600/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 shadow-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-gray-300 font-bold text-sm">
                        {Math.floor(Math.random() * 5) + 15}
                      </span>
                    </div>
                  </div>

                  {project.role && (
                    <p className="text-cyan-400 font-medium mb-4 text-sm">
                      Role: {project.role}
                    </p>
                  )}

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">
                      ✨ Key Features:
                    </h4>
                    <ul className="text-gray-400 space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mr-3`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`bg-gradient-to-r ${project.color} bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-medium border border-slate-600/30 backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github ? (
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-3 rounded-2xl font-bold text-center hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 text-sm`}
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <button className="flex-1 border-2 border-slate-600/50 text-white px-4 py-3 rounded-2xl font-bold hover:border-slate-500/80 hover:bg-slate-800/30 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 text-sm">
                        <FaEye />
                        <span>Demo</span>
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`bg-gradient-to-r ${project.color} text-white px-4 py-3 rounded-2xl font-bold text-center text-sm`}
                    >
                      Professional Project
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const Contact = () => (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative"
    >
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Touch
            </span>
            <FaHeart className="inline-block ml-4 text-red-500 animate-pulse" />
          </h2>
          <p className="text-cyan-300 text-xl max-w-2xl mx-auto">
            Ready to bring your next AI-powered project to life? Let's
            collaborate and create innovative solutions together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Let's Connect ✨
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                I'm passionate about working on innovative AI and software
                development projects. Whether you're looking for technical
                leadership, full-stack development, or AI-driven solutions, I'm
                here to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:davidebula642@gmail.com"
                className="flex items-center space-x-6 p-6 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <HiOutlineMail className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-cyan-300 text-lg">
                    davidebula642@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+27678192979"
                className="flex items-center space-x-6 p-6 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl group-hover:text-emerald-400 transition-colors duration-300">
                    Phone
                  </h4>
                  <p className="text-emerald-300 text-lg">+27 67 819 2979</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/david-ebula-10b1b2231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaLinkedin className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-blue-300 text-lg">
                    Connect professionally
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/davidMumpasa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 p-6 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaGithub className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl group-hover:text-purple-400 transition-colors duration-300">
                    GitHub
                  </h4>
                  <p className="text-purple-300 text-lg">View my projects</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-2 border-slate-700/30">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-8">
              Send Message 💌
            </h3>

            <form
              method="POST"
              action="https://getform.io/f/bd80a706-259c-40eb-9292-e28f5c5ac7f0"
              className="space-y-8"
            >
              <div>
                <label className="block text-white font-bold mb-3 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-700/50 border-2 border-slate-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 text-lg"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-white font-bold mb-3 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-700/50 border-2 border-slate-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-bold mb-3 text-lg">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-slate-700/50 border-2 border-slate-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300 resize-none text-lg"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 text-white px-8 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <FaRocket className="animate-bounce" />
                <span>Let's Collaborate</span>
                <FaArrowRight className="animate-pulse" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 border-t-4 border-gradient-to-r from-cyan-400 to-purple-500 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-2xl">
              DE
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              David Ebula
            </span>
          </div>
          <p className="text-cyan-300 mb-8 text-xl font-medium">
            🚀 Technical Lead • 🤖 AI Engineer • 💻 Full Stack Developer
          </p>
          <div className="flex justify-center space-x-8 mb-10">
            <a
              href="https://github.com/davidMumpasa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-4xl transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/david-ebula-10b1b2231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-4xl transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:davidebula642@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-4xl transform hover:scale-125"
            >
              <HiOutlineMail />
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaHeart className="text-red-500 animate-pulse" />
            <p className="text-gray-300 text-lg">
              Built with passion for innovation
            </p>
            <FaHeart className="text-red-500 animate-pulse" />
          </div>
          <p className="text-gray-500 text-base">
            © 2025 David Ebula. All rights reserved. Built with React & Tailwind
            CSS
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default ModernPortfolio;
