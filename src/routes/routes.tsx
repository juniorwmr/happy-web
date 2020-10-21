import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { AuthRoute } from './AuthRoute';

// Component to check the Authentication
import AuthVerifyComponent from './AuthVerifyComponent';

// App Public Components
import Landing from '../pages/App/Landing';
import CreateOrphanage from '../pages/App/CreateOrphanage';
import Orphanage from '../pages/App/Orphanage';
import OrphanagesMap from '../pages/App/OrphanagesMap';

// Authentication Components
import SignIn from '../pages/Auth/SignIn';
import ForgetPassword from '../pages/Auth/ForgetPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import CreateUser from '../pages/Auth/CreateUser';

// Private Components
import Orphanages from '../pages/Dashboard/Orphanages';
import PendentOrphanages from '../pages/Dashboard/PendentOrphanages';
import AprooveOrphanage from '../pages/Dashboard/AprooveOrphanage';
import EditOrphanage from '../pages/Dashboard/EditOrphanage';

import DeleteOrphanageConfirmed from '../pages/Dashboard/EditOrphanage/DeleteOrphanageConfirmed';
import CreateOrphanagePendent from '../pages/App/CreateOrphanage/CreateOrphanagePendent';

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
        <AuthRoute path="/forget_password/:token" component={ResetPassword} />
        <PrivateRoute path="/dashboard/orphanages" component={Orphanages} />
        <PrivateRoute
          path="/dashboard/pendents"
          component={PendentOrphanages}
        />
        <PrivateRoute path="/dashboard/aproove" component={AprooveOrphanage} />
        <PrivateRoute path="/dashboard/edit" component={EditOrphanage} />
        <PrivateRoute
          exact
          path="/orphanage/deleted"
          component={DeleteOrphanageConfirmed}
        />
        <PrivateRoute
          exact
          path="/orphanage/created"
          component={CreateOrphanagePendent}
        />
        <Route
          path="*"
          component={() => <h1 style={{ color: 'black' }}>ERROR404</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
