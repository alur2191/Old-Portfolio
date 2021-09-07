import React from 'react';
import { motion } from 'framer-motion';
import Description from '../Description';
import charts from '../../../img/charts.jpg';
export default function Charts({ index }) {
  return (
    <motion.div
      className='portfolio-details'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.div
        id='charts'
        className='portfolio-showcase disable-select'
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, transition: { duration: 0.4 }, scaleX: 0 }}
      >
        <img
          src={charts}
          alt='Cryptocurrency Charts website'
          className='disable-drag'
        />
      </motion.div>

      <Description index={index} />
    </motion.div>
  );
}
