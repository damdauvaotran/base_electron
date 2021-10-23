import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function render() {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>,
    document.body
  );
}

render();
