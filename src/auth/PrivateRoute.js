import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

// A wrapper for <Route> that redirects to the signin
// screen if you're not yet authenticated.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
export default PrivateRoute;
