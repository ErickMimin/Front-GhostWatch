import React from 'react';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import About from './Pages/About/About';
import TermsConditions from './Pages/TermsConditions/TermsConditions';
import Contact from './Pages/Contact/Contact';
import NoFound from './Pages/NoFound/NoFound';
import Visualization from './Pages/Visualization/Visualization';
import './App.scss';

import PropTypes from 'prop-types';

const App: React.FC<{store: any}> = ({store}) => {
  return (
    <>
      <Provider store={store}>
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
              <Route exact path="/" component={Home}/>
              <Route exact path="/process-image" component={Visualization}/>
              <Route component={NoFound}/>
            </Switch>
        </Router>
      </Provider>
    </>
  ); 
}

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
