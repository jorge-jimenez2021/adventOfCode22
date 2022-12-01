import React from 'react';
import { Avatar, Divider, Card, List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import DayOne from '../../challenges/DayOne/DayOne';
import NavBar from '../NavBar/NavBar';

const data = [
  {
    link: '/dayone',
    title: 'Day 1: Calorie Counting',
    description: "Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows."
  }
];

const Home = () => {
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
        <Typography.Title style={{textAlign: 'center', color: '#a9b4d4'}}> Advent of Code 2022 </Typography.Title>
      </div>
      <Divider></Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={item.link} style={{color: '#a9b4d4'}}>{item.title}</Link>}
              description={<Typography.Text style={{color: '#616e8b'}}>{item.description}</Typography.Text>}
            />
          </List.Item>
        )}
      />
    </Card>
  </div>
  </div>);

};
export default Home;