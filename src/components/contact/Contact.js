import React from 'react';
import '../../main.css';
import {motion}from 'framer-motion'
function Contact() {


  return (
    
        <div  className="page" style={{padding:'0 100px'}}>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:20}}>
            <motion.div style={{display:'flex', flexDirection:'column',width:'48%'}} initial={{opacity:0,x:-50,y:1,scale:1}} animate={{opacity:1,x:0}} transition={{duration:0.4}} exit={{opacity:0,y:50,x:50,scale:0.4,transition:{duration:0.4}}}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name"/>
            </motion.div>
            <motion.div style={{display:'flex', flexDirection:'column',width:'48%'}} initial={{opacity:0,x:50,y:1,scale:1}} animate={{opacity:1,x:0}} transition={{duration:0.4, delay:0.1}}  exit={{opacity:0,y:50,x:-50,scale:0.4,transition:{duration:0.4}}}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"/>
            </motion.div>
          </div>
          <motion.div style={{display:'flex', flexDirection:'column',marginBottom:20}} initial={{opacity:0,y:50,scale:1}} animate={{opacity:1,y:0}} transition={{duration:0.4, delay:0.2}}  exit={{opacity:0,scale:0.6,transition:{duration:0.4}}}>
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" cols="30" rows="10"></textarea>
          </motion.div>
          <motion.button type="submit" style={{width: 120}} initial={{opacity:0,y:50,scale:1,x:1}} animate={{opacity:1,y:0}} transition={{duration:0.4, delay:0.3}} exit={{opacity:0,scale:0.4,y:-50,x:180,transition:{duration:0.4}}}>Send</motion.button>
        </div>

  );
}

export default Contact;
