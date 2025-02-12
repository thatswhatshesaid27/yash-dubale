import React from "react";
import Image from "../assets/boyCoder-removebg-preview.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* === TEXT CONTENT === */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              Yash <span className="text-accent">Dubale</span>
            </h1>

            <div className="text-3xl lg:text-5xl font-semibold mt-4">
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer", 2000,
                  "Full-stack Developer", 2000,
                  "Software Engineer", 2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-gray-300 mt-6 max-w-xl mx-auto lg:mx-0">
            Crafting seamless and efficient web experiences with MERN stack, Python, and embedded systems. Skilled in React, Redux, Vue, Tailwind CSS, and MongoDB. "Your friendly neighborhood web developer"—building with power and responsibility🕸️💻.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex gap-6 text-2xl">
                <a href="https://github.com/thatswhatshesaid27" className="hover:text-accent">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yash-dubale-41073b159/" className="hover:text-accent">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* === IMAGE SECTION === */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={Image}
              alt="Avatar"
              className="w-[250px] lg:w-[350px] drop-shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
