import React from 'react';
import { motion } from 'framer-motion';
import html5 from '../../img/html5-bw.svg';
import css3 from '../../img/css3-bw.svg';
import bootstrap from '../../img/bootstrap-bw.svg';
import gsap from '../../img/gsap-greensock-bw.svg';
import js from '../../img/js-bw.svg';
import content from './content';

export default function Description({ index }) {
  return (
    <motion.div
      className='portfolio-description'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        {content[index].description}
      </motion.p>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <i
          className='lab la-github la-2x'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 5,
          }}
        ></i>
        <button style={{ width: 160 }}>VIEW LIVE</button>
      </motion.div>
      <div className='stack-icons'>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          src={html5}
          style={{ height: 60 }}
          alt='HTML5'
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          src={css3}
          style={{ height: 60 }}
          alt='CSS3'
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          src={js}
          style={{ height: 60 }}
          alt='JavaScript'
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          src={gsap}
          style={{ height: 60 }}
          alt='GSAP'
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          src={bootstrap}
          style={{ height: 60 }}
          alt='Bootstrap'
        />
      </div>
    </motion.div>
  );
}
