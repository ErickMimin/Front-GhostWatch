import React from 'react';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Pages/About/About';
import TermsConditions from './Pages/TermsConditions/TermsConditions';
import Contact from './Pages/Contact/Contact';
import NoFound from './Pages/NoFound/NoFound';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Router> 
        <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/terms-conditions">
              <TermsConditions/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route component={NoFound}/>
          </Switch>
      </Router>
    </>
  ); 
}

export default App;
