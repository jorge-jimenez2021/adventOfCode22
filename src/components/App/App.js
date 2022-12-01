import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar';
import DayOne from '../../challenges/DayOne/DayOne';

const App = () => {
  return ( 
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dayone" element={<DayOne />} />
      </Routes>
  </BrowserRouter>
  </div>
  );
};
export default App;