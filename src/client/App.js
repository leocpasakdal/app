import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { ROUTES } from '#/utils/constants';
import StartPage from '#/containers/StartPage/StartPage';
import GameArea from '#/containers/GameArea/GameArea';

const App = () => (
  <Switch>
    <Route component={GameArea} path={ROUTES.GAME} />
    <Route component={StartPage} exact path={ROUTES.START} />
  </Switch>
);

export default withRouter(App);
