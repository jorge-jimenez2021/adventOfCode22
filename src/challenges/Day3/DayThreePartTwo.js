import React, { useEffect, useState } from 'react';
import { Card, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';

const DayThreePartTwo = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const mapping = {
      'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26,
      'A':27, 'B':28, 'C':29, 'D':30, 'E':31, 'F':32, 'G':33, 'H':34, 'I':35, 'J':36, 'K':37, 'L':38, 'M':39, 'N':40, 'O':41, 'P':42, 'Q':43, 'R':44, 'S':45, 'T':46, 'U':47, 'V':48, 'W':49, 'X':50, 'Y':51, 'Z':52,
    }

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
            const split = text.split('\n');
            setData(filterDown(split))
        })
    }, []);

    const filterDown = (split) => {
      var filtered = [];
      var row = []
      split.forEach((x) => {
        var length = row.push(x);
        if (length == 3) {
          filtered.push(row)
          row = []
        }
      })
      return filtered;
    }

    useEffect(() => {
      var t = 0;
      if (data.length > 0) {
        data.forEach((x) => {
          for (let i in x[0]) {
            if (x[1].includes(x[0][i]) && x[2].includes(x[0][i])) {
              t= t + mapping[x[0][i]]
              break
            }
          }
        })
        setTotal(t);
      }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:3"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 600, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
        {total && <Typography.Title level={2} style={{color:"#a9b4d4"}}>{`Priority total: ${total}`}</Typography.Title>}
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
export default DayThreePartTwo;