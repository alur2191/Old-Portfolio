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

export default function Logistics({index}) {
  return (
    
    <motion.div className="portfolio-details"  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>
        <div id="logistics" className="disable-select portfolio-showcase"  >
          <motion.img className="disable-drag" src={truck} alt='Logistics Website' 
            initial={{ opacity:0, marginLeft:-100 }}
            animate={{ opacity:1, marginLeft:0}}
            transition={{duration: 0.5}}
          />
          <motion.div style={{position: 'absolute',top: 0, backgroundColor: '#181818',width:280, display:'flex', justifyContent:'center' }} initial={{ opacity:0, }}
              animate={{ opacity:1}}
              transition={{  delay:0.2}}>
            <img className="disable-drag" style={{height: 40, padding:'10px 0'}} src={logo} alt="Logistics Website Logo" />
          </motion.div>
          <motion.div 
              style={{position:'absolute',height:130, top:260, marginLeft:7, marginRight:7, width:258, background:'white', border:'#eeeeee solid 4px', borderBottom:'none'}} 
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}>
            <motion.div style={{ display:'flex',justifyContent:'center', flexDirection:'column' }} 
              initial={{ opacity:0, marginTop: "20px" }}
              animate={{ opacity:1, marginTop: "0px" }}
              transition={{ delay:0.3 }}>
              <p style={{marginRight:'auto', marginLeft: 60, marginBottom:5, marginTop:10}}>Origin</p>
              <div>
                <i className="las la-map-marker-alt" 
                style={{ background:'#efefef', display:'inline',fontSize:20,position:'relative',top:2, border:'#d1d1d1 solid 1px', borderRight:0, paddingTop:1,paddingBottom:2, paddingLeft:3, paddingRight:3,marginLeft: 33}}
                ></i>
                <input 
                disabled 
                type="text" 
                style={{borderRadius:0, border:'#d1d1d1 solid 1px', borderLeft:0, width: 170, height:22, background:'#f9f9f9', marginLeft:'auto',marginRight:'auto'}}/>
              </div>
            </motion.div>
            <motion.div style={{display:'flex',justifyContent:'center',flexDirection:'column'}} initial={{ opacity:0,marginTop:"20px" }}
              animate={{ opacity:1, marginTop:"0px" }}
              transition={{ delay:0.4}}>
              <p style={{marginRight:'auto',marginLeft: 60,marginBottom:5, marginTop:5}}>Destination</p>
              <div>
                
                <i className="las la-map-marker-alt" style={{background:'#efefef',display:'inline',fontSize:20,position:'relative',top:2, border:'#d1d1d1 solid 1px', borderRight:0, paddingTop:1,paddingBottom:2, paddingLeft:3,paddingRight:3,marginLeft: 33}}></i>
                <input disabled type="text" style={{borderRadius:0, border:'#d1d1d1 solid 1px', borderLeft:0, width: 170, height:22, background:'#f9f9f9', marginLeft:'auto',marginRight:'auto'}}/>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <Description index={index}/>
    </motion.div>
  )
}
