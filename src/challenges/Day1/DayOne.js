import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Card, List, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';

const DayOne = () => {
    const [data, setData] = useState([]);
    const [highestValue, setHighestValue] = useState(null);
    const [highestThree, setHighestThree] = useState(null);

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
            const split = text.split('\n\n');
            const d = split.map((elem,key) => {return {key: key, total: calculateRowTotal(elem)}})
            setData(d)
        })
    }, []);

    const calculateRowTotal = (item) => {
        const arraySplit = item.split('\n');
        return arraySplit.length === 1 ? parseInt(arraySplit[0]) : arraySplit.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    }

    useEffect(() => {
        if (data.length > 0) {
            const sorted = data.sort(function (a,b) {
                return b.total - a.total;
            })
            setHighestValue(sorted[0])
            setHighestThree(sorted[0].total + sorted[1].total + sorted[2].total)
        }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:1"></NavBar>
    <div style={{   
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#0a1930',
        padding: 10,
      }}>
        <Card style={{ width: 600, backgroundColor: '#172a47', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.15)' }}>
          {highestValue && <Typography.Title level={2} style={{color:"#a9b4d4"}}>{`Most calories: Reindeer ${highestValue.key} with ${highestValue.total}`}</Typography.Title>}
          {highestThree && <Typography.Title level={2} style={{color:"#a9b4d4"}}>{`Highest three: ${highestThree}`}</Typography.Title>}
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, key) => (
              <List.Item 
              >
                <Typography.Title style={{color:'#a9b4d4'}}  level={4}>{`Reindeer ${key+1}`}</Typography.Title>
                <Typography.Text style={{color:'#a9b4d4'}}  level={4}>{`Total calories: ${item.total}`}</Typography.Text>
              </List.Item>
            )}
          />
        </Card>
      </div>
      </div>
      )
}
export default DayOne;