import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <hr/>
      <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/register" exact>
        <Register/>
      </Route>
      <Route path="/users" exact>
        <Users/>
      </Route>
      <Route path="*">
        <PageNotFound/>
      </Route>
      </Switch>
    </Router>
  )
}

export default App