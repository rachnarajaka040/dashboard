import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import Datashow from 'views/Tabledataview/Datashow';
import Webdata from 'views/Webdatashow/Webdata';
import Webadversement from 'views/Add Adversement/Webadversement';
import Addversement from 'views/Add Adversement/Addversement';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: '/tabledata',
      element: <Datashow />
    },
    {
      path: '/Add_Advertisement',
      element: <Addversement />
    },
    {
      path: '/webAdvertisement',
      element: <Webadversement />
    },
    {
      path: '/Webdata',
      element: <Webdata />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> }
  ]
};

export default MainRoutes;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // project import
// // import MainLayout from 'layout/MainLayout';
// import Loadable from 'component/Loadable';
// import Datashow from 'views/Tabledataview/Datashow';
// import Webdata from 'views/Webdatashow/Webdata';
// import Webadversement from 'views/Add Adversement/Webadversement';
// import Addversement from 'views/Add Adversement/Addversement';

// const DashboardDefault = Loadable(React.lazy(() => import('../views/Dashboard')));
// const UtilsTypography = Loadable(React.lazy(() => import('../views/Utils/Typography')));
// const SamplePage = Loadable(React.lazy(() => import('../views/SamplePage')));

// // ==============================|| MAIN ROUTES ||============================== //

// const MainRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<DashboardDefault />}>
//           {/* <Route index element={<DashboardDefault />} /> */}
//           <Route path="dashboard/default" element={<DashboardDefault />} />
//           <Route path="tabledata" element={<Datashow />} />
//           <Route path="Add_Advertisement" element={<Addversement />} />
//           <Route path="webAdvertisement" element={<Webadversement />} />
//           <Route path="Webdata" element={<Webdata />} />
//           <Route path="utils/util-typography" element={<UtilsTypography />} />
//           <Route path="sample-page" element={<SamplePage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default MainRoutes;
