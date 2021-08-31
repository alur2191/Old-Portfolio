import { useRef, useState, useEffect, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import PageContext from '../../context/page/pageContext'
import { useMediaQuery } from 'react-responsive'

export default function Navbar({menuRef}) {
  const arrowRef = useRef();
  const [current,setCurrent] = useState('')
  useEffect(() => {
    const pathname = window.location.pathname
    setCurrent(pathname)
    currentPage(pathname)
    
  }, [])
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})


  const currentPage = (page) => {
    switch(true){
      case page === '/':
        return arrowRef.current.style.marginTop = '-80px';
      case page === '/portfolio':
        return arrowRef.current.style.marginTop = '0px'
      case page === '/contact':
        return arrowRef.current.style.marginTop = '80px'
    }
  }
  const date = new Date().getFullYear()
  // const checkActive 
  return (
    
      <div id='navbar'>
        <ul>
          <li><NavLink exact className='nav-item' activeClassName="active" to={'/'} onMouseOver={() => arrowRef.current.style.marginTop = '-80px'} onClick={()=>{
            setCurrent('/')
            if(isMobile){menuRef.current.style.display = 'none'}
            arrowRef.current.style.marginTop = '-80px'
            }} onMouseOut={()=>currentPage(current)}>About</NavLink></li>
          <li><NavLink exact className='nav-item' activeClassName="active" to={'/portfolio'} onMouseOver={() => arrowRef.current.style.marginTop = '0px'} onClick={()=>{
            setCurrent('/portfolio')
            if(isMobile){menuRef.current.style.display = 'none'}
            arrowRef.current.style.marginTop = '0px'
            }} onMouseOut={()=>currentPage(current)}>Portfolio</NavLink></li>
          <li><NavLink exact className='nav-item' activeClassName="active" onClick={()=>{
            setCurrent('/contact')
            if(isMobile){menuRef.current.style.display = 'none'}
            arrowRef.current.style.marginTop = '80px'
            }} to={'/contact'} onMouseOver={() => {arrowRef.current.style.marginTop = '80px' }} onMouseOut={()=>currentPage(current)}>Contact</NavLink></li>
        </ul>
        <span className='nav-arrow' ref={arrowRef}>
        </span>
        
      </div>
      
  )
}
