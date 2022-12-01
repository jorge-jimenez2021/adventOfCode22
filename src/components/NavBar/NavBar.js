import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const items = [
  {
    label: (<Link to="/">{'Home Dashboard'}</Link>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Challenges',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'AOC 2022 Challenges',
        children: [
          {
            label:  (<Link to="/dayone">{'Day One - Calorie Counting'}</Link>),
            key: 'challenge:1',
          }
        ],
      },
    ],
  }
];
const NavBar = (props) => {
  const [current, setCurrent] = useState(props.current);
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;