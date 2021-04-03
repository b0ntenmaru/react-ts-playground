import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Home } from 'pages/Home';
import { Login } from 'pages/Login';

const history = createBrowserHistory();

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

