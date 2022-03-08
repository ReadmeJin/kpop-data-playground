import React from 'react';
import { Route } from '@tanstack/react-location';
import { Home } from './pages';

export const routes: Route[] = [
    { path: "/", element: <Home /> }
]
