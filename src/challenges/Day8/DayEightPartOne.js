import React, { useEffect, useState } from 'react';
import { Card, Divider, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';
import { List, Item } from 'linked-list'

const DayEightPartOne = () => {
    const [data, setData] = useState(null);
    const [answer, setAnswer] = useState({})

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
          setData(processInput(text));
        })
    }, []);

    const processInput = (text) => {
      var two_d_arr = [];
      text.split('\n').forEach(element => {
        const split = element.split('');
        two_d_arr.push(split)
      });
      return two_d_arr
    }

    useEffect(() => {
      if (data != null) {
        var count = 0;
        var processed = 0
        for(var rows = 1; rows < data.length - 1; rows++){
          for(var columns = 1; columns < data[rows].length - 1; columns++){
              processed++
              const value = parseInt(data[rows][columns]);
              var seenTop = true;
              var seenBottom = true;
              var seenLeft = true;
              var seenRight = true;
              // check left
              for (var check = columns - 1; check >= 0; check--) {
                  if (parseInt(data[rows][check]) >= value) {
                    seenLeft = false;
                  }
              }
              // check right
              for (var check = columns +1; check < data.length; check++) {
                if (parseInt(data[rows][check]) >= value) {
                  seenRight = false;
                }
              }
              // check bottom
              for (var check = rows + 1; check < data[0].length; check++) {
                if (parseInt(data[check][columns]) >= value) {
                  seenBottom = false;
                }
              }
              // check top
              for (var check = rows - 1; check >= 0; check--) {
                if (parseInt(data[check][columns]) >= value) {
                  seenTop = false;
                }
              }
              if (seenTop || seenBottom || seenLeft || seenRight) {
                count++
              }
          }
        }
        setAnswer(((data.length * data[0].length) - processed) + count)
      }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:8"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 1200, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
        <Typography.Title level={3} style={{textAlign: 'center', color: '#a9b4d4'}}> {`Scenic Score: ${answer}`} </Typography.Title>
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
export default DayEightPartOne;
