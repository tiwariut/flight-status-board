import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import List from './pages/List';
import Details from './pages/Details';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
      </Routes>
    </>
  );
};

export default App;
