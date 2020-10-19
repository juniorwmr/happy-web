import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { useAuth } from '../context/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthRoutes } from './AuthRoutes';

import Landing from '../pages/Landing';
import SignIn from '../pages/Auth/SignIn';
import ForgetPassword from '../pages/Auth/ForgetPassword';
import RecoveryPassword from '../pages/Auth/RecoveryPassword';
import CreateUser from '../pages/Auth/CreateUser';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/Dashboard/CreateOrphanage';

interface IDecodeJWToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
}

const Routes: React.FC = () => {
  const { signed, setSigned } = useAuth();

  useEffect(() => {
    function verifyToken() {
      const token = localStorage.getItem('token');
      if (!token) {
        return false;
      }
      const { exp } = jwt.decode(token) as IDecodeJWToken;
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('token');
        return false;
      }
      return true;
    }
    const verification = verifyToken();
    setSigned(verification);
  }, [setSigned]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <AuthRoutes path="/signin" isSignedIn={signed} component={SignIn} />
        <AuthRoutes
          path="/register"
          isSignedIn={signed}
          component={CreateUser}
        />
        <AuthRoutes
          exact
          path="/forget_password"
          isSignedIn={signed}
          component={ForgetPassword}
        />
        <AuthRoutes
          path="/forget_password/:token"
          isSignedIn={signed}
          component={RecoveryPassword}
        />
        <Route path="/app" component={OrphanagesMap} />

        <PrivateRoutes
          path="/orphanage/create"
          isSignedIn={signed}
          component={CreateOrphanage}
        />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route
          path="*"
          component={() => <h1 style={{ color: 'black' }}>ERROR404</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
