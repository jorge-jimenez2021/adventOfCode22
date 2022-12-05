import React from 'react';
import { Avatar, Button, Divider, Card, List, Typography } from 'antd';
import { GithubOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import DayOne from '../../challenges/DayOne/DayOne';
import NavBar from '../NavBar/NavBar';

const data = [
  {
    link: '/dayone',
    title: 'Day 1: Calorie Counting',
    description: "Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows."
  },
  {
    link: '/daytwo',
    title: 'Day 2: Rock Paper Scissors ',
    description: "The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress."
  },
  {
    link: '/daythree',
    title: 'Day 3: Rucksack Reorganization',
    description: "One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged."
  },
  {
    link: '/dayfour',
    title: 'Day 4: Camp Cleanup',
    description: "Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs."
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
      <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Button type="primary" size="large"  block icon={<GithubOutlined></GithubOutlined>} 
        onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/jorge-jimenez2021/adventOfCode22';
        }
        }>Check Out The Repo</Button>
      </div>
      <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <Typography.Title level={3} style={{textAlign: 'center', color: '#a9b4d4'}}> Challenges </Typography.Title>
      </div>
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