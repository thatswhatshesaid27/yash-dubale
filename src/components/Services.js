import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Full-stack Developer Intern | Cubosquare Technologies",
    description:
      "Engineered a scalable Tracking Management System by architecting Node.js/TypeScript REST APIs and responsive Next.js frontends, while integrating Payload CMS to transform static architecture into a dynamic ecosystem that cut content update times by 70%.",
    link: "September 2025 – Present",
  },
  
  {
    name: "R&D Intern | Techpaathshala",
    description:
      "Developed an AI-powered code review agent that accepts a GitHub repo URL and generates structured feedback on code quality and functionality",
    link: "January 2025 – August 2025",
  },
  {
    name: "Software Developer | PNT ROBOTICS",
    description:
      "Developed Python-based software systems and Arduino projects, with expertise in the full system development lifecycle, including design, testing, and deployment. Created a chatbot application for a robotic system.",
    link: "Aug 2023 - Aug 2024",
  },
  {
    name: "Front-end Developer | Intern | Codewind Technologies",
    description:
      "Designed a user-friendly front-end for a Chronic Disease Prediction System using React.js, complemented by detailed documentation and presentations.",
    link: "Jun 2022 - Jul 2022",
  },
];

const Services = () => {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* === LEFT SIDE (Title & CTA) === */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-accent">Work Experience</h2>
            <h3 className="text-xl text-gray-400 mt-4 max-w-md">
            I am a Web Developer with 1 year of experience, constantly learning and eager to expand my expertise.
            </h3>
            <button className="btn btn-sm mt-6 rounded-2xl"
             onClick={() => window.open('https://github.com/thatswhatshesaid27', '_blank')}>See My Work</button>
          </motion.div>

          {/* === RIGHT SIDE (Experience List) === */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="space-y-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-600 pb-4 flex flex-col space-y-2"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {service.name}
                  </h4>
                  <p className="text-gray-300">{service.description}</p>
                  <span className="text-gray-500">{service.link}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
