import React, { Component } from 'react';
import styled from 'styled-components'
import Box from './../chatbox/Box'
import Users from './../chatbox/Users'
import InfoUser from './../chatbox/InfoUser'

import Dara2 from './../../statics/images/dara2.png'
import Dara from './../../statics/images/dara.png'
const Bound = styled.div`
    display: flex;
    flex-direction:row;
    flex: 1;
    /* overflow:auto; */
`
class Chatbox extends Component {
    constructor(){
        super()
        this.state = {
            users: [
                { id: 1, name: 'San Dara', username: '@sandara', timezone: '3 mins', image: Dara, message: [] },
                { id: 2, name: 'Lucy Nguyen', username: '@lucynguyen', timezone: '1 hr', image: Dara2, message: [] },
                { id: 3, name: 'Nguyễn Hoàng Yến', username: '@hoangyen', timezone: 'yesterday', image: Dara, message: [] },
                { id: 4, name: 'Hoang Anh', username: '@mint', timezone: '15 hrs ago', image: Dara2, message: [] },
                { id: 5, name: 'Nguyen Thu', username: '@thunguyen', timezone: '2 hr ago', image: Dara, message: [] },
            ],
            userChoose: {},
        }
    }
    
    getId = id => {
        const { users } = this.state
        users.forEach((e) => {
            if (e.id === id) {
                this.setState({
                    userChoose: e
                })
            }
        })
    }

    getData = (data, id) => {
        const { users } = this.state
        users.forEach((e,index) => {
            if (e.id === id) {
                this.setState(
                    users[index].message = data
                )
            }
        })
    }
    componentWillMount() {
        const { users } = this.state
        this.setState({
            userChoose: users[0]
        })
    }
    render() {
        const { users, userChoose } = this.state
        return (
            <Bound>
                <Users users={users} getId={this.getId} />
                <Box userChoose={userChoose} getData={this.getData} />
                <InfoUser user={userChoose} />
            </Bound>
        );
    }
}

export default Chatbox;
