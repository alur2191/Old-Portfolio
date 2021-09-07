import React from 'react';
import { motion } from 'framer-motion';
import truck from '../../../img/truck.jpg';
import logo from '../../../img/logo-logistics.png';
import Description from '../Description';

export default function Logistics({ index }) {
  return (
    <motion.div
      className='portfolio-details'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div id='logistics' className='portfolio-showcase disable-select'>
        <motion.img
          src={truck}
          alt='Logistics Website'
          className='disable-drag'
          initial={{ opacity: 0, marginLeft: -100 }}
          animate={{ opacity: 1, marginLeft: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className='showcase-navbar'
          style={{
            backgroundColor: '#181818',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            style={{ height: 40, padding: '10px 0' }}
            className='disable-drag'
            src={logo}
            alt='Logistics Website Logo'
          />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            height: 130,
            top: 260,
            marginLeft: 7,
            marginRight: 7,
            width: 258,
            background: 'white',
            border: '#eeeeee solid 4px',
            borderBottom: 'none',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className='logistics-form'
            initial={{ opacity: 0, marginTop: '20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ delay: 0.3 }}
          >
            <p>Origin</p>
            <div>
              <i className='las la-map-marker-alt'></i>
              <span></span>
            </div>
          </motion.div>
          <motion.div
            className='logistics-form'
            initial={{ opacity: 0, marginTop: '20px' }}
            animate={{ opacity: 1, marginTop: '0px' }}
            transition={{ delay: 0.4 }}
          >
            <p>Destination</p>
            <div>
              <i className='las la-map-marker-alt'></i>
              <span></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Description index={index} />
    </motion.div>
  );
}
