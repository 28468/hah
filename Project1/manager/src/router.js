import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/IndexPage';

import AddQuestions from '@/pages/index/questions/addQuestions/Index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/main/addQuestions" component={AddQuestions} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
