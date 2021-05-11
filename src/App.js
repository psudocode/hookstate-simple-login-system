import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./Routes";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default App;
