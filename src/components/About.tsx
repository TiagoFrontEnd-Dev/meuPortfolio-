import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'm a passionate developer with expertise in building modern web applications.
              My journey in technology started [Your Story Here], and since then,
              I've been constantly learning and growing in this ever-evolving field.
            </p>
            <p className="text-lg text-gray-300">
              I specialize in full-stack development, with a strong foundation in
              both frontend and backend technologies. My goal is to create
              efficient, scalable, and user-friendly solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-500 mb-2">Frontend</h3>
              <ul className="text-gray-300">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-500 mb-2">Backend</h3>
              <ul className="text-gray-300">
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;