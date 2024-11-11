import { motion } from 'framer-motion'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navbar_ul from './Navbar_ul'

const Navbar = ({props}) => {
  const handleToggle = () => {
    props.setIsVisible(!props.isVisible);
  };
  
  return (
    <motion.nav
      animate={{ y: props.isScrolledDown ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
      className="fixed w-[100vw] bg-gray-900 text-white flex justify-center p-6 px-10 items-center"
    >
      <h2
        className="text-4xl cursor-pointer hidden tab-break:block absolute left-10"
        style={{ fontFamily: '"Dancing Script", cursive' }}
      >
        RanasingheTN
      </h2>

      <div className="flex justify-center items-center">
        <Navbar_ul props={props} />
      </div>
    </motion.nav>
  );
}

export default Navbar