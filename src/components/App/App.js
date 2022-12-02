import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar';
import DayOne from '../../challenges/DayOne/DayOne';
import DayTwo from '../../challenges/DayTwo/DayTwo';
import DayTwoPartOne from '../../challenges/DayTwo/DayTwoPartOne';
import DayTwoPartTwo from '../../challenges/DayTwo/DayTwoPartTwo';


const App = () => {
  return ( 
    <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dayone" element={<DayOne />} />
        <Route path="/daytwo" element={<DayTwo />} />
        <Route path="/daytwo/1" element={<DayTwoPartOne />} />
        <Route path="/daytwo/2" element={<DayTwoPartTwo />} />
      </Routes>
  </HashRouter>
  </div>
  );
};
export default App;