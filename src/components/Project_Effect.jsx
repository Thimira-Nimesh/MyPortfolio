import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardComponent from "./CardComponent";

gsap.registerPlugin(ScrollTrigger);

const Project_Effect = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(container.current, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 20%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Internal Style Handling System",
      description:
        "A web system actively used in Inqube Global(PVT)Ltd to manage style data, supplier information, and customer data for enhanced decision-making and operational efficiency.",
      imageUrl: "https://i.ibb.co/HgqksWT/style.jpg",
    },
    {
      title: "Legal Case Management System",
      description:
        "A digital platform for a law firm, streamlining case handling, document management, and client communication.",
      imageUrl: "https://i.ibb.co/vQLffW5/legal.jpg",
      repoUrl:
        "https://github.com/Thimira-Nimesh/Legal_Case_Management_System.git",
    },
    {
      title: "DineEase",
      description:
        "A user-friendly food ordering platform that connects customers with local restaurants for a seamless dining experience.",
      imageUrl: "https://i.ibb.co/QNGbVGj/food.jpg",
      repoUrl: "https://github.com/Thimira-Nimesh/Online-Food_Order.git",
    },
    {
      title: "HotelHub",
      description:
        "A management system for hotels that handles reservations, check-ins, billing, and room management to optimize service delivery.",
      imageUrl: "https://i.ibb.co/hDFkTbq/view-pool-hotel-ocean-water.jpg",
      frontrepoUrl:
        "https://github.com/Thimira-Nimesh/hotel-booking-frontend.git",
      backendrepoUrl:
        "https://github.com/Thimira-Nimesh/hotel-booking-backend.git",
    },
    {
      title: "Luna Collection",
      description:
        "A management system handles reservations, check-ins, billing, and room management, providing hotel staff with real-time insights and tools to optimize service delivery and ensure guest satisfaction.",
      imageUrl:
        "https://akira.lk/wp-content/uploads/2024/07/How-to-Shop-Smart-Tips-for-Finding-Quality-Pieces.png",
      repoUrl: "https://github.com/Thimira-Nimesh/LunaCollection.git",
    },
    {
      title: "Toxic Comment Classification Model",
      description:
        "A machine learning model to classify toxic comments, improving online safety with real-time content moderation.",
      imageUrl: "https://i.ibb.co/0ZM1ZxB/young-woman-watching-live-stream.jpg",
      repoUrl:
        "https://github.com/Thimira-Nimesh/Toxic_Comment_Classification_model.git",
    },
  ];

  return (
    <div className="project-effect-container">
      <motion.h3
        ref={ref1}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 10 },
          },
        }}
        animate={inView1 ? "visible" : "hidden"}
        className="text-center glowtext svg-tab-break:mt-5 pb-20 svg-tab-break:text-6xl text-4xl mt-3 text-white"
      >
        Projects
      </motion.h3>

      <div ref={container} className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
          >
            <CardComponent
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
              frontrepoUrl={project.frontrepoUrl}
              backendrepoUrl={project.backendrepoUrl} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project_Effect;
