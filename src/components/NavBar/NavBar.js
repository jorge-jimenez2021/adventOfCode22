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
            label:  (<Link to="/dayfive">{'Day 5 - Supply Stacks'}</Link>),
            key: 'challenge:5',
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