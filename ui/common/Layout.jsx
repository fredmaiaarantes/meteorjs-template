import React from 'react';
import { Menu } from './Menu';
import { Outlet } from 'react-router';

export const Layout = () => (
    <>
      <Menu />
      <Outlet />
    </>
)
