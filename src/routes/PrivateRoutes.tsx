import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IRouteProps extends RouteProps {
  isSignedIn: boolean;
  component: any;
}

export const PrivateRoutes: React.FC<IRouteProps> = ({
  component: Component,
  isSignedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};
