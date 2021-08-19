import React from 'react';
import './main.css';
import {Route,Switch,useLocation} from 'react-router-dom';
import PageState from './context/page/PageState'
import { AnimatePresence } from 'framer-motion'

import DesktopNav from './components/layout/DesktopNav'
import MobileNav from './components/layout/MobileNav'

import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
  const location = useLocation()

  return (
    <PageState>
      {/* <MobileNav /> */}
      <div id='main' className="container">
        <DesktopNav />
        <AnimatePresence exitBeforeEnter>
        
          <Switch location={location} key={location.key}>
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
          
      
      </div>
    </PageState>
  );
}



export default App;
