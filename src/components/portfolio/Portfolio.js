import React,{useState,useEffect} from 'react';
import '../../main.css';
import Logistics from './logistics/Logistics'
import Charts from './charts/Charts'
import {motion} from 'framer-motion'
import content from './content'

const iconVariants = {
  init: {
    opcaity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}


function Portfolio() {
  const [index,setIndex] = useState(0)

  useEffect(()=> {
    
  }, [index]);

  const checkPage = () => {
    switch(content[index].name){
      case 'logistics':
        return <Logistics index={index}/>
      case 'charts':
        return <Charts index={index}/>
    }
  }

  const next = () => {
    content.length-1===index?setIndex(0):setIndex(index+1)
  }

  const previous = () => {
    index===0?setIndex(content.length-1):setIndex(index-1)
  }
  
  return(
       

    <div className="page" >
      
      <motion.div style={{display:'grid',gridTemplateColumns: '280px 520px',
      marginBottom:40, marginLeft: 150}} >
        <span></span>
        <motion.h1 style={{textAlign:'center'}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>{content[index].title}</motion.h1>
        
        
      </motion.div>
      
      {checkPage()}
      <motion.div className="disable-select" style={{display:'flex', justifyContent:'center',marginTop:50, marginLeft:550, }} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:0.8}} exit={{opacity:0,transition:{duration:0.4}}}>
        <button className="slide-nav" onClick={()=>previous()}>{"<"}</button>
        <span style={{margin:'0 10px',display: 'flex',flexDirection: 'column',justifyContent: 'center'}}>{index+1} / {content.length}</span>
        <button className="slide-nav" onClick={()=>next()}>{">"}</button>
      </motion.div>
    </div>
  )
}
export default Portfolio;
