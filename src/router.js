import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UserLogin from './routes/UserLogin';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/app" component={UserLogin}/>
    </Router>
  );
}

export default RouterConfig;
