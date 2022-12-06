import React, { useEffect, useState } from 'react';
import { Card, Divider, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';

const DaySixPartOne = () => {
    const [data, setData] = useState('');
    const [answer, setAnswer] = useState({})

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
          setData(text);
        })
    }, []);


    useEffect(() => {
      var count = 0
      for (var i = 0; data.length > i ; i += 1) {
        var sub_s = data.substring(i, i+4);
        var dict = []
        for (var c in sub_s) {
          if (!(dict.includes(sub_s[c]))) {
            dict.push(sub_s[c]);
          } 
        }
        if (dict.length == 4) {
          setAnswer({s: sub_s, idx: (i+4)})
          break
        }
      }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:6"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 600, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
        <Typography.Title level={3} style={{textAlign: 'center', color: '#a9b4d4'}}> {`Subroutine: ${answer.s} (${answer.idx})`} </Typography.Title>
        <Divider></Divider>
        <Typography.Title level={5} style={{textAlign: 'center', color: '#a9b4d4'}}> {data} </Typography.Title>
        </Card>
      </div>
      </div>
      )
}
export default DaySixPartOne;