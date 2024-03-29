import React from 'react';
import { motion } from 'framer-motion';
import Stack from './Stack';
import content from './content';

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// import bem from '../../img/bem-bw.svg'
export default function Description({ index }) {
  return (
    <motion.div
      className='portfolio-description'
      variants={descriptionVariants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.p
        variants={descriptionVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {content[index].description}
      </motion.p>

      <motion.div
        variants={descriptionVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <a
          href={content[index].github}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 5,
          }}
        >
          <i className='lab la-github la-2x'></i>
        </a>
        <a className='button' href={content[index].link}>
          VIEW LIVE
        </a>
      </motion.div>
      <div className='stack-icons'>
        <Stack stack={content[index].stack} />
      </div>
    </motion.div>
  );
}
