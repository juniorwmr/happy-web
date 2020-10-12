import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/global.css';

import Landing from './pages/Landing';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
