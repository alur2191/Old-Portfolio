import React from 'react';
import { motion } from 'framer-motion';
import html5 from '../../img/html.svg';
import css3 from '../../img/css3-bw.svg';
import bootstrap from '../../img/bootstrap-bw.svg';
import gsap from '../../img/gsap-greensock-bw.svg';
import js from '../../img/js-bw.svg';
import react from '../../img/react-bw.svg';
import framerMotion from '../../img/motion-bw.svg';

export default function Stack({ stack }) {
  const filter = (tech, count) => {
    switch (tech) {
      case 'html':
        return (
          <motion.img
            src={html5}
            style={{ height: 60 }}
            alt='HTML'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
      case 'css':
        return (
          <motion.img
            src={css3}
            style={{ height: 60 }}
            alt='CSS'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
      case 'bootstrap':
        return (
          <motion.img
            src={bootstrap}
            style={{ height: 60 }}
            alt='Bottstrap'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
      case 'gsap':
        return (
          <motion.img
            src={gsap}
            style={{ height: 60 }}
            alt='GreenSock GSAP'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
      case 'js':
        return (
          <motion.img
            src={js}
            style={{ height: 60 }}
            alt='JavaScript'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
      case 'react':
        return (
          <motion.img
            src={react}
            style={{ height: 60 }}
            alt='ReactJS'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
      case 'motion':
        return (
          <motion.img
            src={framerMotion}
            style={{ height: 60 }}
            alt='Framer Motion'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: count, duration: 0.3 }}
          />
        );
    }
  };
  return (
    <>
      <ul>
        {stack.map((tech, i) => {
          // animation delay counter - 0.1 delay between each item
          let seconds = i + 3;
          const count = `0.${seconds}`;
          return <li key={i}>{filter(tech, count)}</li>;
        })}
      </ul>
    </>
  );
}
