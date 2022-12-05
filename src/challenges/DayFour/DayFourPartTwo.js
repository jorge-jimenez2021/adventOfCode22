import React, { useEffect, useState } from 'react';
import { Card, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';

const DayFourPartTwo = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
            const split = text.split('\n');
            const d = split.map((elem,key) => {return splitRow(elem)})
            setData(d)
        })
    }, []);

    const splitRow = (item) => {
      var ranges = item.split(',');
      return ranges;
    }


    useEffect(() => {
      var t = 0;
      if (data.length > 0) {
        data.forEach((x) => {
          var firstElf = x[0].split('-')
          var secondElf = x[1].split('-')
          if ((parseInt(firstElf[0]) <= parseInt(secondElf[1]) && parseInt(secondElf[0]) <= parseInt(firstElf[1]))) {
            t += 1
          }
        })
        setTotal(t);
      }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:4"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 600, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
        {total && <Typography.Title level={2} style={{color:"#a9b4d4"}}>{`Total multi-range elves: ${total}`}</Typography.Title>}
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, key) => (
              <List.Item 
              >
                <Typography.Text style={{color:'#a9b4d4'}}  level={4}>{`${item}`}</Typography.Text>
              </List.Item>
            )}
          />
        </Card>
      </div>
      </div>
      )
}
export default DayFourPartTwo;