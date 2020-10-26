import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}/>
      <Route  exact path="/signup" component={Signup}/>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/user/:id" component={UserProfile}/>
      </Switch>
    </Router>
  );
}

export default App;