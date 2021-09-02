import {useRef} from 'react'
import NavMenu from'./NavMenu'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

export default function Navbar() {
  // menuRef used for mobile dropdown menu 
  const menuRef = useRef()
  // checking if mobile device using react-responsive
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  return (
    <div id='navbar'>
      <span className='logo disable-select'>DAVISjs</span>
      <NavMenu />
      <i 
      className="nav-button clickable las la-bars"
      onClick={()=>{
        return menuRef.current.style.display = 'block'
      }}></i>
      {isMobile &&
      <motion.div className="nav-mobile" ref={menuRef}>
        <NavMenu menuRef={menuRef}/>
        <span className="clickable">
          <i 
          className="las la-times" 
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
