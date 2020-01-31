import React from "react";
import { Switch, Route } from "react-router-dom";

import RouteWrapper from "./Route";
import Welcome from '../../components/pages/Welcome'
import TodoList from '../../components/pages/TodoList'
import SignIn from '../pages/Sign/SignIn'
import SignUp from '../pages/Sign/SignUp';
import NotFound from '../../components/pages/NotFound'

import { HOME_PATH, TODO_LIST_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from '../../constants/Pathes';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper exact path={HOME_PATH} component={Welcome} isNavBar />
      <RouteWrapper path={TODO_LIST_PATH} component={TodoList} isPrivate isNavBar />
      <RouteWrapper path={SIGN_IN_PATH} component={SignIn} />
      <RouteWrapper path={SIGN_UP_PATH} component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
}
