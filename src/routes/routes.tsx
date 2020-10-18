import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { useAuth } from '../context/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthRoutes } from './AuthRoutes';

import Landing from '../pages/Landing';
import SignIn from '../pages/Auth/SignIn';
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
        <Route path="/app" component={OrphanagesMap} />

        <PrivateRoutes
          path="/orphanage/create"
          isSignedIn={signed}
          component={CreateOrphanage}
        />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
