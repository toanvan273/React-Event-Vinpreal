import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    /* &.mainpage{
        width:100%;
        position: relative;
    } */
    display:flex;
    flex:1;
    background-color:blue;
`
class MainLayout extends Component {
    render() {
        return (
            <Bound className="mainpage">
               {this.props.children}
            </Bound>
        );
    }
}

export default MainLayout;
