import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <AuthLogin />
    }
  ]
};

export default AuthenticationRoutes;
