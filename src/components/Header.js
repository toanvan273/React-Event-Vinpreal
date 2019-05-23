import React, { Component } from 'react';
import styled from 'styled-components'

const Roud = styled.div`
    display:flex;
    height:60px;
    background-image: linear-gradient(121deg, #00a1e4, #005d98);
    justify-content: space-between;
    .button-style{
        display: inline-block;
        width: 225px;
        background: #70c0e4;
        height: 100%;
        clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
        color: #fff;
        text-align: center;
        line-height: 4;
        vertical-align: top;
        span{
            margin-left: 10px;
        }
    }
    .right-head{
        display: flex;
        vertical-align: top;
        float: right;
        color: #fff;
        width: 285px;
        height: 100%;
        justify-content: space-around;
        .survey{
            display: inline-block;
            vertical-align: top;
            line-height: 3.5;
            span{
                margin-left: 10px;
            }
        }
        .noti-lang{
            display: inline-block;
            vertical-align: top;
            line-height: 3.5;
            .noti{
                display: inline-block;
                position: relative;
                .fa{
                    font-size: 22px;
                }
            }
            .lang{
                display: inline-block;
                padding-left: 30px;
                span{
                    border-left: 1px solid;
                    padding-left: 15px;
                }
            }
            .number{
                width: 20px;
                height: 20px;
                background: red;
                border-radius: 100%;
                display: inline-block;
                text-align: center;
                line-height: 16px;
                position: absolute;
                bottom: 10px;
                left: 15px;
            }
        }
    }
`

class Header extends Component {
    render() {
        return (
            <Roud >
                <div className="button-style">
                    <i className="fa fa-2x fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                </div>
                <div className="right-head">
                    <div className="survey">
                        <i className="fa fa-file-text" aria-hidden="true"></i>
                        <span>Customer Survey</span>
                    </div>
                    <div className="noti-lang">
                        <div className="noti">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <div className="number">
                                <span>1</span>
                            </div>
                        </div>
                        <div className="lang">
                            <span>EN</span>
                        </div>
                    </div>
                </div>
            </Roud>

        );
    }
}

export default Header;
