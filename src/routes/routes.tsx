import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { AuthRoute } from './AuthRoute';
import AuthVerifyComponent from './AuthVerifyComponent';

// Public Components
import Landing from '../pages/Landing';
import SignIn from '../pages/Auth/SignIn';
import ForgetPassword from '../pages/Auth/ForgetPassword';
import RecoveryPassword from '../pages/Auth/RecoveryPassword';
import CreateUser from '../pages/Auth/CreateUser';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/App/CreateOrphanage';

// Private Components
import Orphanages from '../pages/Dashboard/Orphanages';
import PendentOrphanages from '../pages/Dashboard/PendentOrphanages';
import AprooveOrphanage from '../pages/Dashboard/AprooveOrphanage';
import EditOrphanage from '../pages/Dashboard/EditOrphanage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthVerifyComponent />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/orphanage/create" component={CreateOrphanage} />
        <AuthRoute path="/signin" component={SignIn} />
        <AuthRoute path="/register" component={CreateUser} />
        <AuthRoute exact path="/forget_password" component={ForgetPassword} />
        <AuthRoute
          path="/forget_password/:token"
          component={RecoveryPassword}
        />
        <PrivateRoute path="/dashboard/orphanages" component={Orphanages} />
        <PrivateRoute
          path="/dashboard/pendents"
          component={PendentOrphanages}
        />
        <PrivateRoute path="/dashboard/aproove" component={AprooveOrphanage} />
        <PrivateRoute path="/dashboard/edit" component={EditOrphanage} />
        <Route
          path="*"
          component={() => <h1 style={{ color: 'black' }}>ERROR404</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
