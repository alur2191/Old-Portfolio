import { useRef, useEffect, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import PageContext from '../../context/page/pageContext'
import { useMediaQuery } from 'react-responsive'

export default function NavMenu({menuRef}) {
  // arrowRef used to configure the position of the navigation menu arrow on desktop
  const arrowRef = useRef();
  // changePage is used to identify which page is viewed
  const {changePage} = useContext(PageContext) 
  // checking if mobile device using react-responsive
  const isMobile = useMediaQuery({query:'(max-width: 768px)'})
  const pathname = window.location.pathname

  useEffect(() => {
    currentPage(pathname)
  }, [pathname])

  // set arrow location poition to the current page
  const currentPage = (current) => {
    switch(true){
      case current === '/':
        return arrowRef.current.style.marginTop = '2px';
      case current === '/portfolio':
        return arrowRef.current.style.marginTop = '42px'
      case current === '/contact':
        return arrowRef.current.style.marginTop = '82px'
    }
  }
  return (
      <div id='nav-menu'>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to={'/'} 
              onMouseOver={() => 
                arrowRef.current.style.marginTop = '2px'
              } 
              onClick={()=>{
                changePage('/')
                if(isMobile){menuRef.current.style.display = 'none'}
                arrowRef.current.style.marginTop = '2px'
              }} 
              onMouseOut={()=>
              currentPage(pathname)
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to={'/portfolio'} 
            onMouseOver={() => 
              arrowRef.current.style.marginTop = '42px'
            } 
            onClick={()=>{
              changePage('/portfolio')
              if(isMobile){menuRef.current.style.display = 'none'}
              arrowRef.current.style.marginTop = '42px'
            }}
            onMouseOut={()=>
              currentPage(pathname)
            }>
            Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to={'/contact'}
            onMouseOver={() => {
              arrowRef.current.style.marginTop = '82px' }
            } 
            onClick={()=>{
              changePage('/contact')
              if(isMobile){menuRef.current.style.display = 'none'}
              arrowRef.current.style.marginTop = '82px'
            }} 
            onMouseOut={()=>
              currentPage(pathname)
            }>
            Contact
            </NavLink></li>
        </ul>
        <span className='nav-arrow' ref={arrowRef}>
        </span>
        
      </div>
      
  )
}
