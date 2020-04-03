import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../views/Dashboard/Dashboard';

const AppRouter = () => {
  return <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <Route exact path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>;
};

export default AppRouter;
