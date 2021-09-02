import React,{useState,} from 'react';
import '../../main.css';
import Logistics from './logistics/Logistics'
import Charts from './charts/Charts'
import Brokerage from './brokerage/Brokerage'
import {motion} from 'framer-motion'
import content from './content'
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive'
import swipe from '../../img/swipe.png'

function Portfolio() {
  const [index,setIndex] = useState(0)

  const isMobile = useMediaQuery({query:'(max-width: 768px)'})


  const checkPage = () => {
    switch(content[index].name){
      case 'logistics':
        return <Logistics index={index}/>
      case 'charts':
        return <Charts index={index}/>
      case 'brokerage':
        return <Brokerage index={index}/>
      default:
          return <Charts index={1}/>
    }
  }

  const next = () => {
    content.length-1===index?setIndex(0):setIndex(index+1)
  }

  const previous = () => {
    index===0?setIndex(content.length-1):setIndex(index-1)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => previous(),
    onSwipedRight: () => next(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return(
       

    <div className="page" {...isMobile&&handlers}>
      {isMobile&&<img className='swiper disable-drag' src={swipe}  alt="Swiper" />}
      <motion.div className="portfolio-title"  >
        <span></span>
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>{content[index].title}</motion.h1>
        
        
      </motion.div>
      
      {checkPage()}
      <motion.div className="disable-select portfolio-nav"  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>
        <button className="slide-nav" onClick={()=>previous()}>{"<"}</button>
        <span style={{margin:'0 10px',display: 'flex',flexDirection: 'column',justifyContent: 'center'}}>{index+1} / {content.length}</span>
        <button className="slide-nav" onClick={()=>next()}>{">"}</button>
      </motion.div>
    </div>
  )
}
export default Portfolio;
