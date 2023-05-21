import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Layout } from './Layout';
import { UserPage } from "/ui/pages/UserPage";
import { LoggedUserOnly } from "/ui/common/LoggedUserOnly";

export const RoutePaths = {
  HOME: '/',
  AUTH: '/auth',
  USER: '/user',
};

export const AppRoutes = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path={RoutePaths.AUTH} element={<Layout />}>
      <Route index element={<AuthPage />} />
    </Route>
    <Route path={RoutePaths.USER} element={<Layout />}>
      <Route index element={<LoggedUserOnly><UserPage /></LoggedUserOnly>} />
    </Route>
    <Route exact path="*" element={<NotFoundPage />} />
  </Routes>
);
