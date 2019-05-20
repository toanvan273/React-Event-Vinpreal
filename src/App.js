import React, { Component } from 'react';
import Icon from './images/ic_menu.png'
import Logo from './images/logo_vinpearl.png'



import CameraShow from './components/Camera'
import LoadImage from './components/LoadImage'
import styled from 'styled-components'

const Div = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`

const MainMenu = styled.div`
    width: 100%;
    min-width: 1024px;
    height: auto;
    background-color: #0a312f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .logo-vinpreal{
        width: 108px;
        height: 108px;
        background: #fbab18;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .icon-menu{
        justify-content: center;
        align-items: center;
        display: flex;
        width: 108px;
        height: 108px;
        border-left: 1px solid rgba(255, 255, 255, 0.25);
    }
`



class App extends Component {
    render() {
        return (
            <>
                <MainMenu className="header">
                    <Div className="logo-vinpreal">
                        <img src={Logo} className="img-responsive" alt="so" />
                    </Div>
                    <Div className="title">
                        <h1>VINPEARL CONTROL ACCESS</h1>
                    </Div>
                    <Div className="icon-menu">
                        <img src={Icon} className="img-responsive" alt="be" />
                    </Div>
                </MainMenu>
                <LoadImage />

                <CameraShow />

            </>

        );
    }
}

export default App;
