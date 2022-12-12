import React from 'react';
import { Avatar, Button, Divider, Card, List, Typography } from 'antd';
import { GithubOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
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
  },
  {
    link: '/dayfive',
    title: 'Day 5: Supply Stacks',
    description: "The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged."
  },
  {
    link: '/daysix',
    title: 'Day 6: Tuning Trouble',
    description: "The preparations are finally complete; you and the Elves leave camp on foot and begin to make your way toward the star fruit grove. As you move through the dense undergrowth, one of the Elves gives you a handheld device. He says that it has many fancy features, but the most important one to set up right now is the communication system."
  },
  {
    link: '/dayseven',
    title: 'Day 7: No Space Left On Device',
    description: "You can hear birds chirping and raindrops hitting leaves as the expedition proceeds. Occasionally, you can even hear much louder sounds in the distance; how big do the animals get out here, anyway?."
  },
  {
    link: '/dayeight',
    title: 'Day 8: Treetop Tree House',
    description: "The expedition comes across a peculiar patch of tall trees all planted carefully in a grid. The Elves explain that a previous expedition planted these trees as a reforestation effort. Now, they're curious if this would be a good location for a tree house."
  },
  {
    link: '/daynine',
    title: 'Day 9: Rope Bridge',
    description: "This rope bridge creaks as you walk along it. You aren't sure how old it is, or whether it can even support your weight."
  },
  {
    link: '/dayten',
    title: 'Day 10: Cathode-Ray Tube',
    description: "You avoid the ropes, plunge into the river, and swim to shore. The Elves yell something about meeting back up with them upriver, but the river is too loud to tell exactly what they're saying. They finish crossing the bridge and disappear from view."
  },
];

const Home = () => {
  return ( 
  <div>
  <NavBar current="home"></NavBar>
  <div 
    style={{   
      backgroundImage: `url(https://picstatio.com/large/3u9vdp/abstract-blue-patterns-design.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      padding: 80,
      height: '160vh',
    }}>
    <div
        style={{   
          backgroundImage: 'linear-gradient( 110.9deg,  rgba(3,38,82,1) 3.6%, rgba(0,38,53,1) 90.4% )',
          padding: 20,
          borderRadius: 20,
          boxShadow: '1px 2px 9px #12B0E8'
        }}
    >
      <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <Typography.Title style={{textAlign: 'center', color: '#a9b4d4'}}> Advent of Code 2022 </Typography.Title>
      </div>
      <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Button type="primary" size="large" block icon={<GithubOutlined></GithubOutlined>} 
        onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/jorge-jimenez2021/adventOfCode22';
        }
        }>Check Out The Repo</Button>
      </div>
      <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <Typography.Title level={3} style={{textAlign: 'center', color: '#a9b4d4'}}> Challenges </Typography.Title>
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
      </div>
    </div>
  </div>);

};
export default Home;