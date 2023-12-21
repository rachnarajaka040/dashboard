import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import Login from 'views/Login';
const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

// const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

// const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <Login />,
  children: [
    {
      path: '/subadmin',
      element: <MainLayout />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    }
    // { path: '/utils/util-typography', element: <UtilsTypography /> },
    // { path: '/sample-page', element: <SamplePage /> }
  ]
};

export default MainRoutes;
