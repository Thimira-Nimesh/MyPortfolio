import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Intern from "../assets/img/Intern.jpg";

const Experience = () => {
  const { ref: ref5, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <motion.h3
        ref={ref5}
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
        animate={inView6 ? "visible" : "hidden"}
        style={{
          paddingBottom: "20px",
          paddingTop: "10px",
          fontSize: "2.5rem",
          color: "white",
          textAlign: "center",
        }}
      >
        Experience
      </motion.h3>
      <MDBCard
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgb(197, 211, 232)",
          overflow: "hidden",
          transition: "transform 0.2s ease-in-out",
          maxWidth: "540px",
          marginTop: "5%",
        }}
      >
        <MDBCardImage
          src={Intern}
          alt="Experience"
          fluid
          onClick={toggleModal}
          style={{
            width: "250px",
            height: "400px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <MDBCardBody
          style={{
            padding: "16px",
            flex: "1",
          }}
        >
          <MDBCardTitle
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "8px",
            }}
          >
            Full Stack Developer | October 2023 to July 2024
          </MDBCardTitle>
          <MDBCardTitle
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "8px",
            }}
          >
            Inqube Global (PVT) Ltd
          </MDBCardTitle>
          <MDBCardText
            style={{
              fontSize: "1rem",
              color: "white",
              marginBottom: "8px",
            }}
          >
            Developed and maintained a web system using React for front-end
            development, Node.js for the backend, and SQL for database
            management.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      {isModalOpen && (
        <motion.div
          onClick={toggleModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <motion.img
            src={Intern}
            alt="Full View"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
