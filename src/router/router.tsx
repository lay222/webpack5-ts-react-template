import React from 'react';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom';
import first from '../pages/home/index.tsx';
import page from '../pages/home/page.tsx';

export default () => (
  <Router>
    <ul>
      <li>
        <Link to="/">
          首页
        </Link>
      </li>
      <li>
        <Link to="page">
          活动
        </Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={first} />
      <Route path="/page" component={page} />
    </Switch>
  </Router>
);
