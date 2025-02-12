import React, { useEffect, useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardCheck, BsChatSquare } from "react-icons/bs";
import { Link, Events, scrollSpy } from "react-scroll";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update(); // Updates scroll tracking

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="fixed bottom-4 sm:bottom-6 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="w-full bg-black/30 h-[50px] sm:h-[60px] backdrop-blur-lg rounded-full 
          max-w-[360px] sm:max-w-[460px] mx-auto px-3 sm:px-5 flex justify-between items-center text-lg sm:text-2xl text-white/50">

          {/* Home */}
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "home" ? "text-white" : ""
            }`}
          >
            <BiHomeAlt />
          </Link>

          {/* About */}
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "about" ? "text-white" : ""
            }`}
          >
            <BiUser />
          </Link>

          {/* Services */}
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "services" ? "text-white" : ""
            }`}
          >
            <BsBriefcase />
          </Link>

          {/* Work */}
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "work" ? "text-white" : ""
            }`}
          >
            <BsClipboardCheck />
          </Link>

          {/* Contact */}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "contact" ? "text-white" : ""
            }`}
          >
            <BsChatSquare />
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
