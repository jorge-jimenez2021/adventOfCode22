import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Card, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';
import DayTwoPartOne from './DayTwoPartOne';
import DayTwoPartTwo from './DayTwoPartTwo';
import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};

const DayTwo = () => {
    const navigate = useNavigate();
    return ( 
        <div>
        <NavBar current="home"></NavBar>
        <div style={{   
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#0a1930'
        }}>
          <Card style={{ width: 800, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
            <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Typography.Title style={{textAlign: 'center', color: '#a9b4d4'}}> Day Two </Typography.Title>
            </div>
            <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Button type="primary" size="large" block onClick={() => {navigate('/daytwo/1')}}>Part One</Button>
            </div>
            <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
              <Button type="primary" size="large" block onClick={() => {navigate('/daytwo/2')}}>Part Two</Button>
            </div>
          </Card>
        </div>
        </div>);
}
export default DayTwo;