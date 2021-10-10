import { useRef, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import PageContext from '../../context/page/pageContext';

export default function NavMenu({ menuRef, match }) {
  const { page } = useContext(PageContext);
  // arrowRef used to configure the position of the navigation menu arrow on desktop
  const arrowRef = useRef();
  // checking if mobile device using react-responsive
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    currentPage(page);
  }, [page]);

  // set arrow location poition to the current page
  const currentPage = (current) => {
    switch (true) {
      case current === '/':
        return (arrowRef.current.style.marginTop = '2px');
      case current === '/portfolio':
        return (arrowRef.current.style.marginTop = '40px');
      case current === '/contact':
        return (arrowRef.current.style.marginTop = '78px');
    }
  };
  return (
    <div id='nav-menu'>
      <ul>
        <li>
          <NavLink
            exact
            activeClassName='active'
            to={'/'}
            onMouseOver={() => (arrowRef.current.style.marginTop = '2px')}
            onClick={() => {
              // if on a mobile device close the dropdown upon click
              if (isMobile) {
                menuRef.current.style.display = 'none';
              }
              arrowRef.current.style.marginTop = '2px';
            }}
            onMouseOut={() => currentPage(page)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName='active'
            to={'/portfolio'}
            onMouseOver={() => (arrowRef.current.style.marginTop = '42px')}
            onClick={() => {
              if (isMobile) {
                menuRef.current.style.display = 'none';
              }
              arrowRef.current.style.marginTop = '42px';
            }}
            onMouseOut={() => currentPage(page)}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName='active'
            to={'/contact'}
            onMouseOver={() => {
              arrowRef.current.style.marginTop = '82px';
            }}
            onClick={() => {
              if (isMobile) {
                menuRef.current.style.display = 'none';
              }
              arrowRef.current.style.marginTop = '82px';
            }}
            onMouseOut={() => currentPage(page)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <span className='nav-arrow' ref={arrowRef}></span>
    </div>
  );
}
