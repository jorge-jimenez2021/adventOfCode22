import React, { useEffect, useState } from 'react';
import { Card, Divider, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';

const DayFivePartOne = () => {
    const [stack, setStack] = useState([]);
    const [total, setTotal] = useState(0);
    const [data, setData] = useState('');
    const [answer, setAnswer] = useState([])

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
            const d = text.split('\n');
            const s = parseStack(d);
            setStack(s);
            setData(d);
        })
    }, []);

    const parseStack = (input) => {
      var array = [[],[],[],[],[],[],[],[],[]]
      var bound = input[8].split('')
      for (var i = 0; i < ((bound.length + 1) / 4) - 1; i++) {
        var row = input[i].split('')
        var stackIndex = 0;
        for (var x = 0; x<=bound.length; x += 4) {
          var item = row[x] + row[x+1] + row[x+2];
          if (item != '   ') {
            array[stackIndex].push(item);
          }
          stackIndex += 1;
        }
      }
      return array;
    }

    useEffect(() => {
      if (stack.length > 0) {
        var array = []
        stack.forEach((element) => {
          array.push((element.reverse()))
        });
        for (var i = 10; i < data.length; i++) {
          const moveString = data[i];
          const regex = /\d+/g
          const amount = [...moveString.matchAll(regex)]
          var row = []
          for(var z = 0; z < parseInt(amount[0][0]); z++) {
            var item = array[parseInt(amount[1][0]) - 1].pop();
            row.push(item);
          }
          row = row.reverse()
          row.forEach(element => {
            array[parseInt(amount[2][0]) - 1].push(element)
          });
        }
        setAnswer(array);
      }
    }, [stack])

    return (
    <div>
    <NavBar current="challenge:5"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ height: 1000, width: 800, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
          <List
            itemLayout="horizontal"
            dataSource={answer}
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
export default DayFivePartOne;