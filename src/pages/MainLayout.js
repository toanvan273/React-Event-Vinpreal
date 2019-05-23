import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display:flex;
    flex:1;
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
