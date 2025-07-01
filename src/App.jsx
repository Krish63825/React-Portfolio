import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="container mx-auto font-sans bg-gray-50 h-screen overflow-y-scroll">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-blue-500 max-w p-4 text-white shadow-lg shadow-gray-400 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./src/assets/nav.png" // Change to your actual logo file path
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-white mr-4" // Added margin to separate it from the name
          />
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
        <ul className="flex space-x-4">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center bg-black h-screen flex items-center justify-between px-10 transition-transform duration-500 hover:scale-105"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
    >
      <div className="text-center text-white">
        <h2 className="text-4xl text-blue-500 md:text-6xl font-bold animate-bounce">Hi, I'm KRISHNAKANTH</h2>
        <p className="mt-4 text-white text-lg md:text-2xl">MERN Stack Developer</p>
        <p className="mt-4 text-white text-lg md:text-2xl">Data Analyst & Statistics</p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-500 px-6 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105"
        >
          See My Work
        </a>
      </div>
      <img src="/src/assets/profile.jpeg" alt="Your Name" className="w-1/2 md:w-1/4 h-auto rounded-lg shadow-lg" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl text-white font-bold mb-4">About Me</h3>
        <p className="max-w-xl mx-auto text-white transition-transform duration-300 hover:scale-105">
        A MERN Stack Developer with one year of experience in designing, developing, and deploying highperformance web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, with a strong
        grasp of front-end and back-end technologies. Adept at translating complex requirements into scalable,
        user-friendly solutions.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: 'React', logo: './src/assets/react.svg' },
    { name: 'Node.js', logo: './src/assets/node.svg' },
    { name: 'Express', logo: './src/assets/express.png' },
    { name: 'MongoDB', logo: './src/assets/mongodb.svg' },
    { name: 'TailwindCSS', logo: './src/assets/tailwind.svg' },
    { name: 'JavaScript', logo: './src/assets/javascript.svg' },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold  text-red-500 shadow-lg text-center mb-8">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="bg-white shadow-md p-4 rounded-md text-center transition-transform duration-300 hover:scale-105"
            >
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mx-auto mb-2" />
              <h4 className="text-xl font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Bharat Intern Projects',
      description: 'A frontend web applications',
      link: 'https://github.com/krish63825/Bharat-Intern',
    },
    {
      title: 'MERN Stack CRUD Application',
      description: 'A MERN stack Project',
      link: 'https://github.com/krish63825/Full-Stack-Project-Management-Systems',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold shadow-lg text-blue-500 text-center mb-8">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 mt-4 inline-block transition-colors duration-300 hover:text-blue-700"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 shadow-lg">Contact Me</h3>
        <form className="max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full bg-white p-4 mb-4 border rounded-md transition-shadow duration-300 focus:shadow-outline"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full bg-white p-4 mb-4 border rounded-md transition-shadow duration-300 focus:shadow-outline"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full bg-white p-4 mb-4 border rounded-md transition-shadow duration-300 focus:shadow-outline"
          ></textarea>
          <div className="text-center">
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
          </div>
        </form>
        <div className="text-center">
          <a
            href="src/assets/resume.pdf"  // Change to your actual resume file path
            download
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Krishnakanth, A MERN Stack Developer. All rights reserved.</p>
    </footer>
  );
}

export default App;
