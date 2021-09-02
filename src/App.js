import React from 'react';
import './main.css';
import {Route,Switch,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import PageState from './context/page/PageState'

import Navbar from './components/layout/Navbar'

import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {

  const location = useLocation()

  return (
    <PageState>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
    </PageState>
  );
}



export default App;
