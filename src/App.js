import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './components/common/Navbar';
// import Loader from './components/common/Loader';

import './styles/global.css';

// const ListPage = React.lazy(() => import('./pages/ListPage'));
// const DetailsPage = React.lazy(() => import('./pages/DetailsPage'));
// const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            // <Suspense fallback={<Loader />}>
            <ListPage />
            // </Suspense>
          }
        ></Route>
        <Route
          path='/details/:id'
          element={
            // <Suspense fallback={<Loader />}>
            <DetailsPage />
            // </Suspense>
          }
        ></Route>
        <Route
          path='*'
          element={
            // <Suspense fallback={<Loader />}>
            <NotFoundPage />
            // </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
