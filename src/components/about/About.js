import React,{useEffect,useRef} from 'react'; 
import '../../main.css';
import {motion} from 'framer-motion'
import about from '../../img/about.jpg'
import {Link} from 'react-router-dom'

function About() {

  
  useEffect(()=>{
    setTimeout(() => {
      loop()
    }, 100)
  },[])


  const loop = () => {
    if(true){
      let i = 0;
      let j = 0;
      const txt = ['Graphic Design','Brand Identity','Blockchain'];
      const speed = 75;

      const typeWriter =()=> {
        if (i < txt[j].length) {
          if(textRef.current != null){
            textRef.current.innerHTML += txt[j].charAt(i)
          } else {
            return;
          }
          i++;
          if(i === txt[j].length){
            
            flash()
            setTimeout(() => {
              j===txt.length-1?j=0:j++;
              reverseType()
            }, 2000)
          }else{
            setTimeout(typeWriter, speed);
          }
        }
      }
 
      const reverseType =()=> {
        if(i > 0){
          if(textRef.current != null){
            textRef.current.innerHTML = textRef.current.innerHTML.slice(0, -1)
          } else {
            return;
          }
          i--;
          setTimeout(reverseType,speed)
        }

        if(i===0){
          flash()
          setTimeout(() => {
            typeWriter()
          }, 2000)     
        }
      }
      
      
      typeWriter()
      
    }
  }

  const flash = () => lineRef.current!= null ? lineRef.current.style.display = 'inline' : null

  const textRef = useRef()
  const lineRef = useRef()
  return (
    
        <div  className="page">
          <div id='about'>
            <motion.h1 style={{ textAlign:'center',marginBottom:30}} initial={{opacity:0,scale:1}} animate={{opacity:1}} transition={{duration:0.3}} exit={{opacity:0,scale:0.8,transition:{duration:0.4}}}>Front-End Developer Based in Los Angeles</motion.h1>
            
            <motion.img style={{float:'left', height: 400, marginRight:20}} src={about} alt="Frontend developer" initial={{opacity:0,scale:1}} animate={{opacity:1}} transition={{delay:0.2,duration:0.3}} exit={{opacity:0,scale:0.8,transition:{duration:0.4}}}/>
            <motion.p initial={{opacity:0,scale:1}} animate={{opacity:1}} transition={{delay:0.4,duration:0.3}} exit={{opacity:0,scale:0.8,transition:{duration:0.4}}}>I am a Frontend developer with limited Backend experience. My focus is on JavaScript with React.js as my framework of choice. Some of the libraries I've used in my projects are ThreeJS, and Framer Motion, and GreenSock GSAP. Experience setting up CMS (Wordpress, Joomla) websites through FTP and SSH, managing MySQL databases with phpMyAdmin, and deploying on CPanel and static hosting.</motion.p> 
            <motion.div 
            style={{marginBottom:10}} 
            initial={{opacity:0,scale:1}} 
            animate={{opacity:1}} 
            transition={{delay:0.5,duration:0.3}} 
            exit={{opacity:0,scale:0.8,transition:{duration:0.4}}}>
              <span>Besides <span style={{fontWeight: 'bold'}}>Programming</span> I keep an <i className="las la-eye" style={{fontSize:22,position:'relative',top:3 }}></i> on </span>
              <span style={{fontWeight: 'bold'}} ref={textRef}></span>
              <span id='line' ref={lineRef} onAnimationEnd={()=>lineRef.current.style.display = 'none'}>|</span>
            </motion.div>
            <motion.p 
            initial={{opacity:0,scale:1}} 
            animate={{opacity:1}} 
            transition={{delay:0.6,duration:0.3}} 
            exit={{opacity:0,scale:0.8,transition:{duration:0.4}}}>
              I have been practicing graphic design for several years prior to studying programming. I have experience with various Adobe products; Photoshop, Xd and Illustrator. Besides practicing design software skills, I've spent time studying design principles and brand strategy.
            </motion.p>
            <motion.Link
            style={{marginTop:50,display:'flex', justifyContent:'flex-end',fontStyle:'oblique'}} 
            initial={{opacity:0,scale:1}} 
            animate={{opacity:1}} 
            transition={{delay:0.7,duration:0.3}} 
            exit={{opacity:0,scale:0.8,transition:{duration:0.4}}}>
              View my portfolio {`>`}
            </motion.Link>

          </div>
        </div>
  );
}

export default About;
