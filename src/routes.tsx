import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import SignIn from './pages/Auth/SignIn';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/Dashboard/CreateOrphanage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
