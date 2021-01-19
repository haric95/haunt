import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import './index.scss';
import { Router } from '@reach/router';
import { About } from './pages/About';
import { AppPath } from './constants';
import { Artists } from './pages/Artists';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <About path={AppPath.HOME} />
        <Artists path={AppPath.ARTISTS} />
      </Router>
    </div>
  );
};

export default App;
