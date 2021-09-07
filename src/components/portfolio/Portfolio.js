import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';
import '../../main.css';
import swipe from '../../img/swipe.png';
import Logistics from './logistics/Logistics';
import Charts from './charts/Charts';
import Brokerage from './brokerage/Brokerage';
// Portfolio content
import content from './content';

const portfolioVariants = {
  visible: { opacity: 0 },
  hidden: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

function Portfolio() {
  useEffect(() => {
    isMobile &&
      setTimeout(() => {
        if (swipeRef.current != null) {
          swipeRef.current.style.display = 'none';
        }
      }, 3000);
  });
  // Indexing for each portfolio item
  const [index, setIndex] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Changing content by matching the item name
  const changeItem = () => {
    switch (content[index].name) {
      case 'logistics':
        return <Logistics index={index} />;
      case 'charts':
        return <Charts index={index} />;
      case 'brokerage':
        return <Brokerage index={index} />;
      default:
        return <Charts index={0} />;
    }
  };

  // Portfolio item navtigation buttons
  const next = () => {
    content.length - 1 === index ? setIndex(0) : setIndex(index + 1);
  };
  const previous = () => {
    index === 0 ? setIndex(content.length - 1) : setIndex(index - 1);
  };

  // Swiping functionatlity using react-swipeable (enabled on mobile devices)
  const handlers = useSwipeable({
    onSwipedLeft: () => previous(),
    onSwipedRight: () => next(),
    trackMouse: true,
  });

  const swiper = () => {
    return (
      <img
        className='swiper disable-drag'
        ref={swipeRef}
        src={swipe}
        alt='Swiper'
      />
    );
  };
  const swipeRef = useRef();
  return (
    // if isMobile is true, swiping is enabled
    <div id='portfolio' {...(isMobile && handlers)}>
      {/* if isMobile is true, show hint image */}
      {isMobile && swiper()}

      <motion.h1
        variants={portfolioVariants}
        initial='visible'
        animate='hidden'
        transition={{ duration: 0.8 }}
        exit='exit'
      >
        {content[index].title}
      </motion.h1>

      {changeItem()}
      {/* Portfolio Navigation buttons */}
      <motion.div
        className='portfolio-nav disable-select'
        variants={portfolioVariants}
        initial='visible'
        animate='hidden'
        transition={{ delay: 0.5, duration: 0.8 }}
        exit='exit'
      >
        <button onClick={() => previous()}>{'<'}</button>
        <span>
          {index + 1} / {content.length}
        </span>
        <button onClick={() => next()}>{'>'}</button>
      </motion.div>
    </div>
  );
}
export default Portfolio;
