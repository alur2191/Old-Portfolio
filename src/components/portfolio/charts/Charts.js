import React from 'react'
import {motion} from 'framer-motion'
import html5 from '../../../img/html5-bw.svg'
import css3 from '../../../img/css3-bw.svg'
import bootstrap from '../../../img/bootstrap-bw.svg'
import gsap from '../../../img/gsap-greensock-bw.svg'
import js from '../../../img/js-bw.svg'
import truck from '../../../img/truck.jpg'
import logo from '../../../img/logo-logistics.png'
// import bem from '../../img/bem-bw.svg'
import Description from '../Description'
import content from '../content'
import charts from '../../../img/charts.jpg'
export default function Charts({index}) {
  return (
    
    <motion.div className="portfolio-details" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>
        
        <motion.div 
          id="charts" className="disable-select portfolio-showcase" 
          style={{position:'relative',  backgroundImage:'grey', height:400,width:280}} 
          initial={{opacity:0,scaleX:0}} 
          animate={{opacity:1,scaleX:1}} 
          transition={{duration:0.8}} 
          exit={{opacity:0,transition:{duration:0.4},scaleX:0}}>
            <img src={charts} alt="Cryptocurrency Charts website" />
        </motion.div>
        
        <Description index={index}/>
    </motion.div>
  )
}
