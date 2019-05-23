import React, { Component } from 'react';
import styled from 'styled-components'
import Logo from './../statics/images/group-15.png'
import Humen from './../statics/images/kimnana.png'
import wee from './../statics/images/wee.png'
import { Link } from "react-router-dom";

const Bound = styled.div`
    display:flex;
    flex-direction:column;
    width: 260px;
    
    vertical-align: top;
    /* height: 100%; */
    background: #006a9b;
    .head{
        background: #1d7ca7;
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 4;
    }
    .customer-info{
        background: #006fa0;
        text-align: center;
        padding-top: 40px;
        padding-bottom: 45px;
        .face{
            width: 120px;
            height: 120px;
            display: inline-block;
            img{
                width: 100%;
                border-radius: 100%;
            }
        }
        .info-detail{
            font-family: Roboto-Medium;
            color: #fff;
            margin-top: 15px;
            h4{
                margin: 0;
                font-size: 18px;
            }
            .time-zone{
                font-family: Roboto-Light;
                margin-top: 10px;
                font-size: 12px;
            }
        }
    }
        nav, ul, li {
            margin: 0;
            padding: 0;
        }
        ul li{
            list-style: none;
        }
    .menu-side{
        .nav-link{
            background: #006a9b;
            height: 50px;
            line-height: 45px;
            color: #7bc0e0;
            border-bottom: 1px solid #408db2;
            padding-left: 10px;
            &:hover{
                background: #0084c2;
                border-right: 5px solid #f9890c;
            }
            .fa{
                margin-right: 10px;
            }
        }
        .request{
            height: 50px;
            line-height: 45px;
            background: #8308fd;
            color: #7bc0e0;
            font-size: 12px;
            padding-left: 20px;
            img{
                display: inline-block;
                vertical-align: text-bottom;
            }
        }
    
}
`

class SideBar extends Component {
    render() {
        return (
            <Bound className="side-bar">
                    <div className="head">
                        <img src={Logo} alt="eximbank" />
                    </div>
                    <div className="customer-info">
                        <div className="face">
                            <img src={Humen} alt="face" />
                        </div>
                        <div className="info-detail">
                            <h4>Nguyễn Hoàng Yến</h4>
                            <p className="time-zone">
                                Last login at 12:02 PM -Oct 01, 2018
                            </p>
                        </div>
                    </div>
                    <div className="menu-side">
                        <nav className="nav-bar">
                            <ul>

                                <Link to="/">
                                    <li className="nav-link">
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                        Home
                                    </li>
                                </Link>

                                <li className="nav-link">
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                    Money Transfer
                                </li>
                                <li className="request">
                                    <span>Send or Request Money with </span>
                                    <img src={wee} alt="wee" />
                                </li>
                                <li className="nav-link">
                                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                                    Payment</li>
                                <li className="nav-link">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                    Products Services
                                </li>

                                <Link to="/chat">
                                    <li className="nav-link">
                                        <i className="fa fa-weixin" aria-hidden="true"></i>
                                        Chat
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
            </Bound >

        );
    }
}

export default SideBar;
