import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Card, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

const DayTen = () => {
    const navigate = useNavigate();
    return ( 
        <div>
        <NavBar current="challenge:10"></NavBar>
        <div style={{   
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#0a1930'
        }}>
          <Card style={{ width: 800, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
            <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Typography.Title style={{textAlign: 'center', color: '#a9b4d4'}}> Day Ten </Typography.Title>
            </div>
            <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Button type="primary" size="large" block onClick={() => {navigate('/dayten/1')}}>Part One</Button>
            </div>
            <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
              <Button type="primary" size="large" block onClick={() => {navigate('/dayten/2')}}>Part Two</Button>
            </div>
          </Card>
        </div>
        </div>);
}
export default DayTen;