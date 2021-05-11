import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "./stores/AuthStore";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const authState = useAuthState();

  return (
    <Route
      {...rest}
      render={(props) =>
        authState.isLoggedIn.get() === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
