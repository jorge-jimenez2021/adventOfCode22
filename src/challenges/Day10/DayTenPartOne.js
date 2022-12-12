import React, { useEffect, useState } from 'react';
import { Card, Divider, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';
import { List, Item } from 'linked-list'

const DayTenPartOne = () => {
    const [data, setData] = useState(null);
    const [answer, setAnswer] = useState({})

    function inRange(x, min, max) {
      return x >= min && x <= max;
    }

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
          setData(text.split('\n'));
        })
    }, []);

    useEffect(() => {
      if (data != null) {
        var v = 1;
        var cycle = 0;
        var row = '';
        data.forEach(element => {
          const command = element.split(" ");
          if (command.length == 1) {
            if (inRange(cycle % 40, v - 1, v + 1)) {
              row += '#'
            } else {
              row += '.'
            }
            cycle++;
            if (cycle % 40 == 0) {
              console.log(row);
              row = '';
            }
          } else {
            if (inRange(cycle % 40, v - 1, v + 1)) {
              row += '#'
            } else {
              row += '.'
            }
            cycle++
            if (cycle % 40 == 0) {
              console.log(row);
              row = '';
            }
            if (inRange(cycle % 40, v - 1, v + 1)) {
              row += '#'
            } else {
              row += '.'
            }
            cycle++
            v += parseInt(command[1])
            if (cycle % 40 == 0) {
              console.log(row);
              row = '';
            }
          }
        });
        setAnswer(0)
      }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:10"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 600, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
        <Typography.Title level={3} style={{textAlign: 'center', color: '#a9b4d4'}}> {`Signal Strength: ${answer}`} </Typography.Title>
        <Divider></Divider>
        {
          data && data.map((elem) => {
            return  <Typography.Title level={5} style={{textAlign: 'center', color: '#a9b4d4'}}> {elem} </Typography.Title>
          })
        }
        </Card>
      </div>
      </div>
      )
}
export default DayTenPartOne;