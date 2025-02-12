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
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-xl rounded-full 
          max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "home" ? "text-white" : ""
            }`}
          >
            <BiHomeAlt />
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "about" ? "text-white" : ""
            }`}
          >
            <BiUser />
          </Link>

          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "services" ? "text-white" : ""
            }`}
          >
            <BsBriefcase />
          </Link>

          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all ${
              activeSection === "work" ? "text-white" : ""
            }`}
          >
            <BsClipboardCheck />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all ${
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
