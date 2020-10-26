import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Login}/>
      <Route  exact path="/signup" component={Signup}/>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/user/:id" component={UserProfile}/>
      </Switch>
    </HashRouter>
  );
}

export default App;