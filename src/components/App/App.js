import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import DayOne from '../../challenges/Day1/DayOne';
import DayTwo from '../../challenges/Day2/DayTwo';
import DayTwoPartOne from '../../challenges/Day2/DayTwoPartOne';
import DayTwoPartTwo from '../../challenges/Day2/DayTwoPartTwo';
import DayThree from '../../challenges/Day3/DayThree';
import DayThreePartOne from '../../challenges/Day3/DayThreePartOne';
import DayThreePartTwo from '../../challenges/Day3/DayThreePartTwo';
import DayFour from '../../challenges/Day4/DayFour';
import DayFourPartOne from '../../challenges/Day4/DayFourPartOne';
import DayFourPartTwo from '../../challenges/Day4/DayFourPartTwo';
import DayFive from '../../challenges/Day5/DayFive';
import DayFivePartOne from '../../challenges/Day5/DayFivePartOne';
import DayFivePartTwo from '../../challenges/Day5/DayFivePartTwo';
import DaySix from '../../challenges/Day6/DaySix';
import DaySixPartOne from '../../challenges/Day6/DaySixPartOne';
import DaySixPartTwo from '../../challenges/Day6/DaySixPartTwo';
import DaySeven from '../../challenges/Day7/DaySeven';
import DaySevenPartOne from '../../challenges/Day7/DaySevenPartOne';
import DaySevenPartTwo from '../../challenges/Day7/DaySevenPartTwo';

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
        <Route path="/daysix" element={<DaySix />} />
        <Route path="/daysix/1" element={<DaySixPartOne />} />
        <Route path="/daysix/2" element={<DaySixPartTwo />} />
        <Route path="/dayseven" element={<DaySeven />} />
        <Route path="/dayseven/1" element={<DaySevenPartOne/>} />
        <Route path="/dayseven/2" element={<DaySevenPartTwo />} />
      </Routes>
  </HashRouter>
  </div>
  );
};
export default App;