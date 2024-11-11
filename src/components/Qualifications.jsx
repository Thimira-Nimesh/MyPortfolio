import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Qualifications = () => {
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MDBContainer fluid className="py-5">
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
        animate={inView5 ? "visible" : "hidden"}
        className="text-center glowtext pb-20 text-white pt-10 text-5xl"
      >
        Qualifications
      </motion.h3>
      <div className="main-timeline">
        <motion.div
          className="timeline left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariants}
        >
          <MDBCard>
            <MDBCardBody className="p-4 text-white text-end">
              <h3>
                B.Sc. (Hons.) In Information Technology University of Kelaniya |
                2024 (Expected)
              </h3>
              <p className="mb-0 text-white text-end">
                CGPA -3.30/4.0 (Upto L3S2) <br /> SGPA -3.52 (L2S2)
              </p>
            </MDBCardBody>
          </MDBCard>
        </motion.div>
        <motion.div
          className="timeline right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariants}
        >
          <MDBCard>
            <MDBCardBody className="p-4 text-white">
              <h3>Software Development in Java</h3>
              <p className="mb-0 text-white">
                Advanced Technology and Research Institute
              </p>
            </MDBCardBody>
          </MDBCard>
        </motion.div>
        <motion.div
          className="timeline left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariants}
        >
          <MDBCard>
            <MDBCardBody className="p-4 text-white text-end">
              <h3>Computer Hardware and Network Engineering</h3>
              <p className="mb-0 text-white text-end">
                Ranaviru Information Technology Training Institute
              </p>
            </MDBCardBody>
          </MDBCard>
        </motion.div>
        <motion.div
          className="timeline right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariants}
        >
          <MDBCard>
            <MDBCardBody className="p-4 text-white">
              <h3>Ananda College - Colombo 10</h3>
              <p className="mb-0 text-white">
                G.C.E Advanced Level 2019 | Bio Stream - 3B’s
              </p>
            </MDBCardBody>
          </MDBCard>
        </motion.div>
        <motion.div
          className="timeline left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariants}
        >
          <MDBCard>
            <MDBCardBody className="p-4 text-white text-end">
              <h3>Ananda College - Colombo 10</h3>
              <p className="mb-0 text-white text-end">
                G.C.E Ordinary Level 2015 | 9A’s
              </p>
            </MDBCardBody>
          </MDBCard>
        </motion.div>
      </div>
    </MDBContainer>
  );
};

export default Qualifications;
