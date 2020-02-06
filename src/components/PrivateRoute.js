import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        // store.getState().getUser && store.getState().getUser.token
        !!auth() ? <Component {...props} auth={auth()} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
