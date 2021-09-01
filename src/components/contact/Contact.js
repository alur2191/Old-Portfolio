import React from 'react';
import '../../main.css';
import {motion}from 'framer-motion'
function Contact() {


  return (
    
        <div  className="page" style={{padding:'0 100px'}}>
          <motion.h1 style={{textAlign:'center',marginBottom: 30}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>Contact Me</motion.h1>
          <div style={{display:'grid',gridTemplateColumns:'300px 1fr' }}>
            <div style={{marginTop:25}}>
              <motion.ul initial={{opacity:0, scale: 1}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}} exit={{opacity:0,transition:{duration:0.4}, scale:0.4}}>
                <li style={{textTransform:'none'}}><i className="las la-envelope" style={{fontSize:22,marginRight:4}}></i> dandavisjs@protonmail.com</li>
                <li><i class="las la-phone" style={{fontSize:22,marginRight:4}}></i>{`(903) 033 3333`}</li>
                <li><i class="lab la-github" style={{fontSize:25,marginRight:4}}></i><i class="lab la-behance" style={{fontSize:25,marginRight:4}}></i><i class="lab la-instagram" style={{fontSize:25}}></i></li>
              </motion.ul>
              
            </div>
            <form >
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
            </form>
          </div>
        </div>
      
  );
}

export default Contact;
