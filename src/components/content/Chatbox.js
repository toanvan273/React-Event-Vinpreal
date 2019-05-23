import React, { Component } from 'react';
import styled from 'styled-components'
import Box from './../chatbox/Box'
import Users from './../chatbox/Users'
import InfoUser from './../chatbox/InfoUser'

const Bound = styled.div`
    display: flex;
    flex-direction:row;
    flex: 1;
    overflow:auto;
`
class Chatbox extends Component {
    state =  {
        users : [
            {id: 1, name: 'San Dara', username: '@sandara', image:'', message: []},
            {id: 2, name: 'Lucy Nguyen', username: '@lucynguyen', image:'', message: []},
            {id: 3, name: 'Nguyễn Hoàng Yến', username: '@hoangyen', image:'', message: []},
            {id: 4, name: '', username: '', image:'', message: []},
            {id: 5, name: '', username: '', image:'', message: []},
        ]
    }
    render() {
        return (
            <Bound>
                <Users />
                <Box />
                <InfoUser />
            </Bound>
        );
    }
}

export default Chatbox;
