import {useRef} from 'react'
import Navbar from'./Navbar'
import {motion} from 'framer-motion'

export default function DesktopNav() {
  const date = new Date().getFullYear()
  // const checkActive 
  const menuRef = useRef()
  
  return (
    <div id='sidebar' >
      <span style={{fontWeight:'bold', fontSize:20, marginRight:25}}>DAVISjs</span>
      <Navbar />
      <span className="clickable"><i className="nav-lines las la-bars" style={{fontSize:30}} onClick={()=>{
        return menuRef.current.style.display = 'block'
        }}></i></span>
      <motion.div className="nav-slider" ref={menuRef}>
      <Navbar />
        <span className="clickable"><i class="las la-times" style={{fontSize:30}} onClick={()=>{
        return menuRef.current.style.display = 'none'
        }}></i></span>
      </motion.div>
    </div>
  )
}
