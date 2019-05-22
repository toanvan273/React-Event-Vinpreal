import React, { Component } from 'react';
import styled from 'styled-components'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import MainLayout from './pages/MainLayout'
import Chatbox from './components/content/Chatbox'
import Home from './components/content/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


const MainPage = styled.div`
    display:flex;
    flex-direction:row;
    .rigth-mainpage{
        display: flex;
        flex-direction:column;
        flex:1;
    }
`
class App extends Component {
    render() {
        return (
            <Router>
                <MainPage>
                    <SideBar />
                    <div className="rigth-mainpage">
                        <Header />
                        <MainLayout>
                            <Route exact path="/" component={Home} />
                            <Route path="/chat" component={Chatbox} />
                        </MainLayout>
                        <Footer />
                    </div>
                </MainPage>
            </Router>
        );
    }
}

export default App;
