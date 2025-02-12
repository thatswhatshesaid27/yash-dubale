import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/mernmory.PNG";
import Img2 from "../assets/weather-react.PNG";
import Img3 from "../assets/foodybash.PNG";

const projects = [
  { img: Img2, title: "StateWeather", role: "React based application", repo:'https://react-weather-nine-woad.vercel.app/' },
  { img: Img3, title: "FoodyBash", role: "Full-Stack Application",repo:'https://github.com/thatswhatshesaid27/FoodyBash' },
  { img: Img1, title: "Mernmory", role: "MERN stack based application" , repo:'https://github.com/thatswhatshesaid27/MERNMORY' },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-accent">My Latest Work</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Showcasing projects built using MERN (MongoDB, Express, React,
            Node.js), Tailwind CSS, Redux, JavaScript, HTML, CSS, and RESTful
            APIs for dynamic functionality.
          </p>
          <button className="btn btn-sm mt-6 rounded-2xl" onClick={() => window.open('https://github.com/thatswhatshesaid27', '_blank')}>View All Projects</button>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
         {projects.map((project, index) => (
  <a
    key={index}
    href={project.repo}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden border-2 border-white/50 rounded-xl block"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

    {/* Image */}
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />

    {/* Text Overlay */}
    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
      <span className="text-gradient text-sm">{project.role}</span>
      <h3 className="text-xl text-white">{project.title}</h3>
    </div>
  </a>
))}

        </motion.div>
      </div>
    </section>
  );
};

export default Work;
