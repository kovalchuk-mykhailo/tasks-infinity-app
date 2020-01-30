import React from "react";
import { Switch, /* Route */ } from "react-router-dom";

import Route from "./Route";
import Welcome from '../../components/pages/Welcome'
import TodoList from '../../components/pages/TodoList'
import Login from '../pages/Sign/SignIn'
import SignUp from '../pages/Sign/SignUp';
import NotFound from '../../components/pages/NotFound'

import { HOME_PATH, TODO_LIST_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from '../../constants/Pathes';


export default function Routes() {
  return (
    <Switch>
      <Route exact path={HOME_PATH} component={Welcome} />
      <Route path={TODO_LIST_PATH} component={TodoList} isPrivate />
      <Route path={SIGN_IN_PATH} component={Login} isAuthPage />
      <Route path={SIGN_UP_PATH} component={SignUp} isAuthPage />
      <Route component={NotFound} />
    </Switch>
  );
}
