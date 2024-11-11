import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import hero from "../assets/img/aboutHero.jpg";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-900 tab-break:p-24 pt-0" id="about">
      {/* Title Animation */}
      <motion.h3
        ref={ref1}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        className="text-center glowtext pb-20 text-white pt-10 text-5xl"
      >
        About Me
      </motion.h3>

      {/* Image and Text Section */}
      <div className="flex flex-col tab-break:flex-row items-center justify-center text-center max-w-5xl mx-auto">
        <motion.img
          src={hero}
          alt="hero"
          style={{ marginLeft: "-15%", marginRight: "5%" }}
          className="mainimage h-[200px] w-[200px] object-cover rounded-full mb-6 tab-break:mb-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: inView1 ? 1 : 0.8,
            opacity: inView1 ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.p
          className="text-white text-center"
          style={{
            fontWeight: "300",
            fontFamily: "Roboto, sans-serif",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Hello! I'm Thimira Ranasinghe, as a final-year Information Technology
          undergraduate in Sri Lanka, <br /> I am dedicated to developing a deep
          understanding of IT systems, programming, and technical
          problem-solving.
          <br /> Eager to apply my skills in real-world environments, <br />I am
          focused on building practical expertise that keeps pace with the
          rapidly advancing tech industry. <br /> My goal is to continually grow
          and adapt,
          <br /> ensuring I am well-prepared to tackle complex challenges and
          contribute meaningfully to the field.
        </motion.p>
      </div>

      {/* Social Icons with Hover Animation */}
      <div className="flex justify-center items-center mt-6 text-white">
        <div className="mt-4">
          <ul className="mt-5 flex justify-center items-center flex-row space-x-4">
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://github.com/Thimira-Nimesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/thimira-ranasinghe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin className="text-4xl" />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
