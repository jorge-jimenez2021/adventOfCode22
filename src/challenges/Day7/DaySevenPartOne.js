import React, { useEffect, useState } from 'react';
import { Card, Divider, Typography } from 'antd';
import input from './input.txt'
import NavBar from '../../components/NavBar/NavBar';
import { List, Item } from 'linked-list'

const DaySevenPartOne = () => {
    const [data, setData] = useState(null);
    const [answer, setAnswer] = useState({})

    useEffect(() => {
        fetch(input)
        .then(response => response.text())
        .then((text) => {
          setData(text);
        })
    }, []);

    const stackProcess = (terminal, commandStack) => {
      var stack = terminal['/']
      commandStack.forEach((level) => {
        if (level in stack) {
          stack = stack[level]
        }
      })
      return stack;
    }


    useEffect(() => {
      if (data != null) {
        var split = data.split('\n')
        var terminal = { '/':{} };
        var commandStack = ['/'];
        var currentDirectory = null;
        var idx = 0;
        while (idx < split.length) {
          var command = split[idx];
          var commandSplit = command.split(' ');
          if (commandSplit.length == 3) {
            if (commandSplit[2] == '..') {
              commandStack.pop();
            } else {
              currentDirectory = stackProcess(terminal, commandStack)
              if (!(commandSplit[2] in currentDirectory)) {
                currentDirectory[commandSplit[2]] = {}
                commandStack.push(commandSplit[2])
              } else {
                commandStack.push(commandSplit[2])
              }
            }
            idx++
          } else {
            currentDirectory = stackProcess(terminal, commandStack)
            do {
              var c = split[idx].split(' ')
              if (c[0] == 'dir') {
                currentDirectory[c[1]] = {}
              } else if (c[0] != '$') {
                console.log(c[0]);
              }
              idx++
            } while (split[idx+1].split(' ')[0] != '$');
            idx++
          }
        }
        console.log(terminal)
      }
    }, [data])

    return (
    <div>
    <NavBar current="challenge:7"></NavBar>
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
export default DaySevenPartOne;