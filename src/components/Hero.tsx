import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          <span className="text-purple-500">Hello,</span> I'm Your Name
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full Stack Developer | Creative Problem Solver
        </p>
        <a
          href="#contact"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;