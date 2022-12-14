import React, { useState } from 'react';
import { HomeOutlined, HddOutlined, DeploymentUnitOutlined, GithubOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Typography from 'antd/es/typography/Typography';
const items = [
  {
    label: (<Link to="/">{'Home Dashboard'}</Link>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Challenges',
    key: 'SubMenu',
    icon: <HddOutlined />,
    children: [
      {
        type: 'group',
        label: <Typography.Text style={{color: '#a9b4d4'}}>AOC 2022 Challenges</Typography.Text>,
        children: [
          {
            label:  (<Link to="/dayone">{'Day One - Calorie Counting'}</Link>),
            key: 'challenge:1',
          },
          {
            label:  (<Link to="/daytwo">{'Day Two - Rock Paper Scissors'}</Link>),
            key: 'challenge:2',
          },
          {
            label:  (<Link to="/daythree">{'Day Three - Rucksack Reorganization'}</Link>),
            key: 'challenge:3',
          },
          {
            label:  (<Link to="/dayfour">{'Day Four - Camp Cleanup'}</Link>),
            key: 'challenge:4',
          },
          {
            label:  (<Link to="/dayfive">{'Day Five - Supply Stacks'}</Link>),
            key: 'challenge:5',
          },
          {
            label:  (<Link to="/daysix">{'Day Six - Tuning Trouble'}</Link>),
            key: 'challenge:6',
          },
          {
            label:  (<Link to="/dayseven">{'Day Seven - No Space Left On Device'}</Link>),
            key: 'challenge:7',
          },
          {
            label:  (<Link to="/dayeight">{'Day Eight - Treetop Tree House'}</Link>),
            key: 'challenge:8',
          },
          {
            label:  (<Link to="/daynine">{'Day Nine - Rope Bridge'}</Link>),
            key: 'challenge:9',
          },
          {
            label:  (<Link to="/dayten">{'Day 10: Cathode-Ray Tube'}</Link>),
            key: 'challenge:10',
          }
        ],
      },
    ],
  },
  {
    label: (<a href='https://adventofcode.com/' target="_blank">{'Advent of Code'}</a>),
    key: 'aoc',
    icon: <DeploymentUnitOutlined />,
  },
  {
    label: (<a href='https://github.com/jorge-jimenez2021/adventOfCode22' target="_blank">{'Repository'}</a>),
    key: 'repo',
    icon: <GithubOutlined />,
  },
];
const NavBar = (props) => {
  const [current, setCurrent] = useState(props.current);
  const onClick = (e) => {
    if (e.key != 'aoc' && e.key != 'repo') {
        setCurrent(e.key);
    }
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark" />;
};
export default NavBar;