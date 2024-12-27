import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-6"
    >
      <div className="max-w-[1000px] w-full">
        {/* Heading Section */}
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-400 py-4 text-left">
            // Feel free to reach out using the form below or shoot me an email.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            method="POST"
            action="https://getform.io/f/bd80a706-259c-40eb-9292-e28f5c5ac7f0"
            className="flex flex-col max-w-[600px] w-full bg-[#1c3255] rounded-lg shadow-lg p-6 sm:p-8"
          >
            <input
              className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-gray-700 text-sm rounded-md px-4 py-3 mb-4 shadow-sm"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-gray-700 text-sm rounded-md px-4 py-3 mb-4 shadow-sm"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <textarea
              className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 text-gray-700 text-sm rounded-md px-4 py-3 mb-4 shadow-sm"
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-6 py-3 transition duration-300 ease-in-out shadow-md mx-auto w-full"
            >
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
