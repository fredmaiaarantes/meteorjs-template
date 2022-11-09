import React from 'react';
import { AppRoutes } from './common/Routes';
import { renderWithSSR } from 'meteor/communitypackages:react-router-ssr';

export const App = () => (
  <div>
    <AppRoutes />
  </div>
);

renderWithSSR(<App />);
