import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';


const AuthLogin = Loadable(lazy(() => import('../views/Login')));

const AuthenticationRoutes = {
  route: '/',
  element: <AuthLogin />,
  children: [
    {
      path: '/application/login',

    
    

      element: <MinimalLayout />
    }

  ]
};

export default AuthenticationRoutes;
