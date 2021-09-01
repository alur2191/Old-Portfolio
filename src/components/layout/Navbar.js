import { useRef, useState, useEffect, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import PageContext from '../../context/page/pageContext'
import { useMediaQuery } from 'react-responsive'

export default function Navbar({menuRef}) {

  const arrowRef = useRef();
  const {page, changePage} = useContext(PageContext) 
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  const pathname = window.location.pathname

  useEffect(() => {
    currentPage(pathname)
  }, [])
  


  const currentPage = (current) => {
    switch(true){
      case current === '/':
        return arrowRef.current.style.marginTop = '-80px';
      case current === '/portfolio':
        return arrowRef.current.style.marginTop = '0px'
      case current === '/contact':
        return arrowRef.current.style.marginTop = '80px'
    }
  }
  const date = new Date().getFullYear()
  // const checkActive 
  return (
    
      <div id='navbar'>
        <ul>
          <li><NavLink exact className='nav-item' activeClassName="active" to={'/'} onMouseOver={() => arrowRef.current.style.marginTop = '-80px'} onClick={()=>{
            changePage('/')
            if(isMobile){menuRef.current.style.display = 'none'}
            arrowRef.current.style.marginTop = '-80px'
            }} onMouseOut={()=>currentPage(pathname)}>About</NavLink></li>
          <li><NavLink exact className='nav-item' activeClassName="active" to={'/portfolio'} onMouseOver={() => arrowRef.current.style.marginTop = '0px'} onClick={()=>{
            changePage('/portfolio')
            if(isMobile){menuRef.current.style.display = 'none'}
            arrowRef.current.style.marginTop = '0px'
            }} onMouseOut={()=>currentPage(pathname)}>Portfolio</NavLink></li>
          <li><NavLink exact className='nav-item' activeClassName="active" onClick={()=>{
            changePage('/contact')
            if(isMobile){menuRef.current.style.display = 'none'}
            arrowRef.current.style.marginTop = '80px'
            }} to={'/contact'} onMouseOver={() => {arrowRef.current.style.marginTop = '80px' }} onMouseOut={()=>currentPage(pathname)}>Contact</NavLink></li>
        </ul>
        <span className='nav-arrow' ref={arrowRef}>
        </span>
        
      </div>
      
  )
}
