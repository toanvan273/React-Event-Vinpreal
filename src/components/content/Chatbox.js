import React, { Component } from 'react';
import styled from 'styled-components'
import Dara from './../../statics/images/dara2.png'

import Users from './../chatbox/Users'
import InfoUser from './../chatbox/InfoUser'

const Bound = styled.div`
    display: flex;
    flex: 1;
    
   .block-center{
        display: flex;
        flex-direction:column;
        flex: 1;
        background: pink;
        .top-info{
            height: 90px;
            box-sizing: border-box;
            padding: 10px;
            .user-img{
                position: relative;
                display: inline-block;
                width: 15%;
                text-align: center;
            }
            .icon-status{
                display: inline-block;
                width: 8px;
                height: 8px;
                background: #34d859;
                border-radius: 100%;
                border: 4px solid #fff;
                position: absolute;
                left: 10px;
                top: -3px;
            }
            .img{
                display: inline-block;
                width: 46px;
                height: 46px;
                img{
                    width: 100%;
                    border-radius: 100%;
                }
            }
            .name-user{
                display: inline-block;
                vertical-align: top;
                width: 80%;
                h5{
                    margin: 0;
                    font-family: Roboto;
                    font-size: 18px;
                    line-height: 1.22;
                    color: #001654;
                }
                span{
                    opacity: 0.5;
                    font-family: Roboto;
                    font-size: 12px;
                    line-height: 1.83;
                    color: #001654;
                }
                .fa{
                    font-size: 7px;
                    margin: 0 10px;
                    opacity: 0.5;
                    color: #001654;
                }
            }
            .more{
                display: inline-block;
                vertical-align: top;
                text-align: right;
                width: 5%;
            }
        }
        .block-message{
            display: flex;
            flex: 1;
            flex-direction: column;
            border: 1px solid #d0d4da;
            overflow:auto;
            .scroll{
                width:100%;
                height:fit-content;
            }
        }
        .form-chat{
            height: 72px;
        }
        
   }
   
`
class Chatbox extends Component {
    render() {
        return (
            <Bound>
                <Users />
                <div className="block-center">
                    <div className="top-info">
                        <div className="user-img">
                            <div className="icon-status"></div>
                            <div className="img">
                                <img src={Dara} alt="dara" />
                            </div>
                        </div>
                        <div className="name-user">
                            <h5>Lucy Nguyen</h5>
                            <span className="username">
                                @lucynguyen
                            </span>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                            <span>Last seen 3 hours ago</span>
                        </div>
                        <div className="more">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="block-message">
                        <div className="scroll"> 
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        <div className="message">ABC KHI NAO GAP?</div>
                        </div>
                    </div>
                    <div className="form-chat">
                        <form>
                            <input type="text" className="input-text" id="" placeholder="Input text" />
                            <button type="submit" className="btn-send">
                                <i className="fa fa-location-arrow" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <InfoUser />
            </Bound>
        );
    }
}

export default Chatbox;
