import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom'
// React路由懒加载
const first = lazy(() => import('@/pages/home'))
const page = lazy(() => import('@/pages/home/page'))

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
    <Suspense fallback={<div>loading....</div>}>
      <Switch>
        <Route exact path="/" component={first} />
        <Route path="/page" component={page} />
      </Switch>
    </Suspense>
  </Router>
)
