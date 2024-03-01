import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from './pages/List';
import Details from './pages/Details';

import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
