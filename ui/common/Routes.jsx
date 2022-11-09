import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Layout } from './Layout';

export const RoutePaths = {
  HOME: '/',
  AUTH: '/auth',
};

export const AppRoutes = () => (
  <Switch>
    <Route exact path={RoutePaths.HOME}>
      <Layout children={<HomePage />} />
    </Route>
    <Route exact path={RoutePaths.AUTH}>
      <Layout children={<AuthPage />} />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);
