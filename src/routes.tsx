import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/global.css';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
