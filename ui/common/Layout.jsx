import React from 'react';
import { Menu } from './Menu';

export const Layout = ({ children }) => (
    <>
        <Menu />
        {children}
    </>
)