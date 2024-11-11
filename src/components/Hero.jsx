import React, { useEffect } from "react";
import img from "../assets/img/hero.png";
import { MdDownload } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Hero = ({ props }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 80) {
        props.setIsScrolledDown(false);
      } else {
        props.setIsScrolledDown(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    props.setIsVisible(!props.isVisible);
  };

  return (
    <div
      id="home"
      className="h-[100vh] bg-gray-900 flex tab-break:justify-between justify-evenly items-center tab-break:p-24 p-0 tab-break:pt-40 pt-12"
    >
      <div style={{ marginLeft: "10%" }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white tab-break:text-5xl text-3xl mt-10 glowtext mb-8">
            <span className="text-3xl" style={{ fontWeight: 200 }}>
              Hello...
            </span>
            <br /> I'm Thimira Ranasinghe
            <br />
            <motion.span
              className="text-[#7494a1] font-bold tab-break:text-3xl text-xl mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full Stack Web Developer
            </motion.span>
          </h1>

          <motion.p
            className="text-white"
            style={{ fontWeight: 300, fontFamily: "Roboto, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            I aim to leverage my skills and creativity <br /> alongside
            passionate professionals to tackle challenging problems and drive
            impactful solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="pt-5 flex flex-wrap justify-center items-center text-center text-white space-x-5 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button
            className="p-3 mb-5 tab-break:px-5 px-1 bg-[#7494a1] rounded-lg flex items-center border border-[#7494a1]
          hover:bg-transparent transition-all duration-300"
            onClick={handleToggle}
          >
            Contact
          </button>
          <div className="pt-5 flex tab-break:justify-start flex-wrap justify-center items-center text-center text-white *:mx-5">
            <a href="/cv.pdf" download={"Thmira Nimesh.pdf"}>
              <button
                className="p-3 mb-5 tab-break:px-5 px-1 bg-[#7494a1] rounded-lg flex items-center border border-[#7494a1]
          hover:bg-transparent transition-all duration-300"
                style={{ marginTop: "-10%" }}
              >
                Download CV <MdDownload className="text-xl mt-0.5 ml-2" />
              </button>
            </a>
          </div>
        </motion.div>

        {/* Scroll Button */}
        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <AnchorLink href="#experience">
            <button
              className="p-2 px-4 rounded-full flex items-center transition-all duration-300 text-white"
              style={{
                position: "absolute",
                left: "77%",
                transform: "translateX(-50%)",
                marginTop: "12%",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Scroll Down <FaMouse className="text-lg mt-0.5 ml-2" />
            </button>
          </AnchorLink>
        </motion.div>
      </div>

      <motion.div
        className="hidden tab-break:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img
          src={img}
          className="h-[550px] w-[550px] object-contain mainimage"
          alt="mainimage"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
