import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./components/pages/register/Register";
import { Context } from "./context/Context";
import {useContext} from "react";
function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register />}
        </Route>
        
        <Route path="/login">
          {user ? <Home/> :<Login />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register/>}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
