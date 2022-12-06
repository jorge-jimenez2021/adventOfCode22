import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Card, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';

const DayTwoPartOne = () => {

    const moveDictionary = {A: 'Rock', B: 'Paper', C: 'Scissors', X: 'Rock', Y: 'Paper', Z: 'Scissors'}
    const pointsMappingOne = {Rock: 1, Paper: 2, Scissors: 3}

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
            const split = text.split('\n');
            const d = split.map((elem) => {return calculateRowTotal(elem)})
            setData(d)
        })
    }, []);

    const calculateRowTotal = (item) => {
        const arraySplit = item.split(' ');
        const returnValue = [moveDictionary[arraySplit[0]], moveDictionary[arraySplit[1]]]
        const turnValue = turnTotal(returnValue)
        return [returnValue, turnValue]
    }

    const calculateTotal = () => {
        var t= 0
        for (let i = 0; i < data.length; i++) {
            t = t + data[i][1];
        } 
        setTotal(t);
    }

    const turnTotal = (turn) => {
        const movePoints = pointsMappingOne[turn[1]];
        if (turn[0] === turn[1]) {
            return movePoints + 3
        } else {
            switch(turn[0]) {
                case 'Rock':
                    if (turn[1] === 'Paper') {
                        return movePoints + 6
                    } else {
                        return movePoints
                    }
                case 'Paper':
                    if (turn[1] === 'Rock') {
                        return movePoints
                    } else {
                        return movePoints + 6
                    }
                case 'Scissors':
                    if (turn[1] === 'Paper') {
                        return movePoints
                    } else {
                        return movePoints + 6
                    }
              }
        }
    }

    useEffect(() => {
        if (data.length > 0) {
            calculateTotal();
        }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:2"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 600, minHeight: 1200, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
        <Typography.Title level={2} style={{color:"#a9b4d4"}}>{`Total Points: ${total}`}</Typography.Title>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, key) => (
              <List.Item 
              >
                <Typography.Title style={{color:'#a9b4d4'}}  level={4}>{`Round ${key+1}`}</Typography.Title>
                <Typography.Text style={{color:'#a9b4d4'}}  level={4}>{`${item}`}</Typography.Text>
              </List.Item>
            )}
          />
        </Card>
      </div>
      </div>
      )
}
export default DayTwoPartOne;