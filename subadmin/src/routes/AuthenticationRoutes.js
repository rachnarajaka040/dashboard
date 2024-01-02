import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));

const AuthenticationRoutes = {
  path: 'application',
  element: <AuthLogin />,
  children: [
    {
      path: 'login',
      element: <MinimalLayout />
    }
  ]
};

export default AuthenticationRoutes;
