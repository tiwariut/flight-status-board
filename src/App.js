import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './components/layout/Navbar';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ListPage />}></Route>
        <Route path='/details/:id' element={<DetailsPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
