import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

interface IRouteProps extends RouteProps {
  component: any;
}

export const AuthRoute: React.FC<IRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !isAuthenticated() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard/orphanages',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};
