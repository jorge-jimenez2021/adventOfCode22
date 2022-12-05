import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar';
import DayOne from '../../challenges/DayOne/DayOne';
import DayTwo from '../../challenges/DayTwo/DayTwo';
import DayTwoPartOne from '../../challenges/DayTwo/DayTwoPartOne';
import DayTwoPartTwo from '../../challenges/DayTwo/DayTwoPartTwo';
import DayThree from '../../challenges/DayThree/DayThree';
import DayThreePartOne from '../../challenges/DayThree/DayThreePartOne';
import DayThreePartTwo from '../../challenges/DayThree/DayThreePartTwo';
import DayFour from '../../challenges/DayFour/DayFour';
import DayFourPartOne from '../../challenges/DayFour/DayFourPartOne';
import DayFourPartTwo from '../../challenges/DayFour/DayFourPartTwo';
import DayFive from '../../challenges/DayFive/DayFive';
import DayFivePartOne from '../../challenges/DayFive/DayFivePartOne';
import DayFivePartTwo from '../../challenges/DayFive/DayFivePartTwo';




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
        <Route path="/daythree" element={<DayThree />} />
        <Route path="/daythree/1" element={<DayThreePartOne />} />
        <Route path="/daythree/2" element={<DayThreePartTwo />} />
        <Route path="/dayfour" element={<DayFour />} />
        <Route path="/dayfour/1" element={<DayFourPartOne />} />
        <Route path="/dayfour/2" element={<DayFourPartTwo />} />
        <Route path="/dayfive" element={<DayFive />} />
        <Route path="/dayfive/1" element={<DayFivePartOne />} />
        <Route path="/dayfive/2" element={<DayFivePartTwo />} />
      </Routes>
  </HashRouter>
  </div>
  );
};
export default App;