import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar';
import DayOne from '../../challenges/DayOne/DayOne';

const App = () => {
  return ( 
    <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dayone" element={<DayOne />} />
      </Routes>
  </HashRouter>
  </div>
  );
};
export default App;