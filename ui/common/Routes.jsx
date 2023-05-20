import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Layout } from './Layout';

export const RoutePaths = {
  HOME: '/',
  AUTH: '/auth',
};

export const AppRoutes = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path={RoutePaths.AUTH} element={<Layout />}>
      <Route index element={<AuthPage />} />
    </Route>
    <Route exact path="*" element={<NotFoundPage />} />
  </Routes>
);
