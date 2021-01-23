import { Router } from '@reach/router';
import React, { Suspense } from 'react';
import { Navigation } from './components/navigation/Navigation';
import { World } from './components/world/world';
import { AppPath } from './constants';
import './index.scss';
import { About } from './pages/About';
import { Artists } from './pages/Artists';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={null}>
        <World />
      </Suspense>
      <Router>
        <About path={AppPath.HOME} />
        <Artists path={AppPath.ARTISTS} />
      </Router>
    </div>
  );
};

export default App;
