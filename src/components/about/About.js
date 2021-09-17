import React from 'react';
import '../../main.css';
import { motion } from 'framer-motion';
import about from '../../img/about.jpg';
import TextLoop from './TextLoop';

const pageVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
};

function About() {
  return (
    <div id='about'>
      <motion.h1
        variants={pageVariants}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3 }}
        exit='exit'
      >
        JavaScript Engineer
      </motion.h1>

      <motion.img
        src={about}
        alt='Frontend developer'
        variants={pageVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.1, duration: 0.3 }}
        exit='exit'
      />
      <motion.p
        variants={pageVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.2, duration: 0.3 }}
        exit='exit'
      >
        I am a Frontend engineer with limited Backend experience. My focus is on
        JavaScript with React.js as my framework of choice. Some of the
        libraries I've used in my projects are Framer Motion, React Three Fiber,
        and GreenSock GSAP. Experience setting up CMS (Wordpress, Joomla)
        websites through FTP and SSH, managing MySQL databases with phpMyAdmin,
        and deploying on CPanel and static hosting.
      </motion.p>
      <motion.div
        style={{ marginBottom: 10 }}
        variants={pageVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.3, duration: 0.3 }}
        exit='exit'
      >
        <TextLoop />
      </motion.div>
      <motion.p
        variants={pageVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.4, duration: 0.3 }}
        exit='exit'
      >
        I have been practicing graphic design for several years prior to
        studying programming - experience with various Adobe products:
        Photoshop, Xd and Illustrator. Besides practicing graphic design
        software skills, I've spent time studying design principles and brand
        strategy.
      </motion.p>
    </div>
  );
}

export default About;
