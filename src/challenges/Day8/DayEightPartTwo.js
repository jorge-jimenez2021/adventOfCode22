import React, { useEffect, useState } from 'react';
import { Card, Divider, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';
import { List, Item } from 'linked-list'

const DayEightPartTwo = () => {
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
        var currentMax = 0;
        for(var rows = 1; rows < data.length - 1; rows++){
          for(var columns = 1; columns < data[rows].length - 1; columns++){
              const value = parseInt(data[rows][columns]);
              var seenTopScore = 1;
              var seenBottomScore = 1;
              var seenLeftScore = 1;
              var seenRightScore = 1;
              // check left
              for (var check = columns - 1; check > 0; check--) {
                  if (parseInt(data[rows][check]) < value) {
                    seenLeftScore++
                  } else {
                    break;
                  }
              }
              // check right
              for (var check = columns +1; check < data.length - 1; check++) {
                if (parseInt(data[rows][check]) < value) {
                  seenRightScore++;
                } else {
                  break;
                }
              }
              // check bottom
              for (var check = rows + 1; check < data[0].length -1; check++) {
                if (parseInt(data[check][columns]) < value) {
                  seenBottomScore++;
                } else {
                  break
                }
              }
              // check top
              for (var check = rows - 1; check > 0; check--) {
                if (parseInt(data[check][columns]) < value) {
                  seenTopScore++
                } else {
                  break
                }
              }
              currentMax = Math.max(currentMax, seenBottomScore * seenLeftScore * seenRightScore * seenTopScore)
          }
        }
        setAnswer(currentMax)
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
        <Typography.Title level={3} style={{textAlign: 'center', color: '#a9b4d4'}}> {`Visible trees: ${answer}`} </Typography.Title>
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
export default DayEightPartTwo;