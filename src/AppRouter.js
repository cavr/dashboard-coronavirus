import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './views/Dashboard';

const AppRouter = () => {
  return <Switch>
    <Route path="/">
      <Dashboard />
    </Route>
  </Switch>;
};

export default AppRouter;
