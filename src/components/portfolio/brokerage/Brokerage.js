import React from 'react'
import {motion} from 'framer-motion'
import html5 from '../../../img/html5-bw.svg'
import css3 from '../../../img/css3-bw.svg'
import bootstrap from '../../../img/bootstrap-bw.svg'
import gsap from '../../../img/gsap-greensock-bw.svg'
import js from '../../../img/js-bw.svg'
import brokerage from '../../../img/brokerage.jpg'
import logo from '../../../img/logo-brokerage.png'
// import bem from '../../img/bem-bw.svg'
import Description from '../Description'

export default function Brokerage({index}) {
  return (
    
    <motion.div className="portfolio-details"  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>
        <div id="brokerage" className="disable-select portfolio-showcase"  >
          <motion.img className="disable-drag" src={brokerage} alt='Brokerage Website' 
            initial={{ opacity:0, marginLeft:-100 }}
            animate={{ opacity:1, marginLeft:0}}
            transition={{duration: 0.5}}
          />
          <motion.div style={{position: 'absolute',top: 0, backgroundColor: 'white',width:280, display:'flex', justifyContent:'center' }} initial={{ opacity:0, }}
              animate={{ opacity:1}}
              transition={{  delay:0.2}}>
            <img className="disable-drag" style={{height: 20, padding:'15px 0'}} src={logo} alt="Brokerage Website Logo" />
          </motion.div>
          <motion.div 
              style={{position:'absolute', top:150, marginLeft:15, marginRight:15, color:'white', textAlign:'center', textShadow: '1px 1px rgb(68, 68, 68,0.8)'}} 
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}>
            <motion.h4 initial={{ opacity:0, }}
              animate={{ opacity:1}}
              transition={{  delay:0.5}}>Nationwide Third Party Logistics Solutions</motion.h4>
            <motion.span initial={{ opacity:0, }}
              animate={{ opacity:1}}
              transition={{  delay:0.6}} style={{fontSize:10}}>We are dedicated to provide reliable logistics solutions to shippers across the nation</motion.span>
            <motion.span initial={{ opacity:0, }}
              animate={{ opacity:1}}
              transition={{  delay:0.7}} style={{display:'block', padding:'5px 0px', border:'solid 1px white', width:100, marginTop: 10, fontSize:12, marginLeft:'auto', marginRight:'auto'}}>Get A Quote</motion.span>
          </motion.div>
        </div>
        <Description index={index}/>
    </motion.div>
  )
}
