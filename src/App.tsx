import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import './index.scss';
import { Router } from '@reach/router';
import { About } from './pages/About';
import { AppPath } from './constants';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <About path={AppPath.HOME} />
      </Router>
    </div>
  );
};

export default App;
