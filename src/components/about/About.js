import React, { useEffect, useRef } from 'react';
import '../../main.css';
import { motion } from 'framer-motion';
import about from '../../img/about.jpg';
import TextLoop from './TextLoop';

function About() {
  return (
    <div className='page'>
      <div id='about'>
        <motion.h1
          className='mb50'
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
        >
          I'm a Frontend Engineer
        </motion.h1>

        <motion.img
          src={about}
          alt='Frontend developer'
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
        />
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
        >
          I am a Frontend engineer with limited Backend experience. My focus is
          on JavaScript with React.js as my framework of choice. Some of the
          libraries I've used in my projects are ThreeJS, and Framer Motion, and
          GreenSock GSAP. Experience setting up CMS (Wordpress, Joomla) websites
          through FTP and SSH, managing MySQL databases with phpMyAdmin, and
          deploying on CPanel and static hosting.
        </motion.p>
        <motion.div
          style={{ marginBottom: 10 }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
        >
          <TextLoop />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
        >
          I have been practicing graphic design for several years prior to
          studying programming - experience with various Adobe products:
          Photoshop, Xd and Illustrator. Besides practicing graphic design
          software skills, I've spent time studying design principles and brand
          strategy.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
