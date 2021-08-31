import {useRef,useEffect} from 'react'
import Navbar from'./Navbar'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom'

export default function DesktopNav() {
  useEffect(()=>{
    isMobile && console.log('test');
  },[])
  const date = new Date().getFullYear()
  // const checkActive 

  const menuRef = useRef()
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  return (
    <div id='sidebar' >
      <Link className='logo' to={'/'} style={{fontWeight:'bold', fontSize:20, marginRight:25}}>DAVISjs</Link>
      <Navbar />
      <span className="clickable">
        <i 
        className="nav-lines las la-bars" 
        style={{fontSize:30}} 
        onClick={()=>{
          return menuRef.current.style.display = 'block'
        }}></i>
      </span>
      {isMobile &&
      <motion.div className="nav-slider" ref={menuRef}>
        <Navbar />
        <span className="clickable">
          <i 
          class="las la-times" 
          style={{fontSize:30}} 
          onClick={()=>{
            return menuRef.current.style.display = 'none'
          }}
          ></i>
        </span>
      </motion.div>
      }
    </div>
  )
}
