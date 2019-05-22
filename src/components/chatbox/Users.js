import React, { Component } from 'react';
import styled from 'styled-components'
import plus from './../../statics/images/plus.png'
import Dara from './../../statics/images/dara2.png'

const Bound = styled.div`
 
        display: inline-block;
        width: 360px;
        vertical-align: top;
        background: #fff;
        padding-top: 15px;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
        .search-sort{
            .form-search{
                position: relative;
            }
            .btn-search{
                border: none;
                background: transparent;
                position: absolute;
                top: 8px;
                left: 5px;
                font-size: 22px;
                color: gray;
            }
            .search-input{
                width: 294px;
                height: 40px;
                border-radius: 24px;
                background-color: #eff1f5;
                border: none;
                &::placeholder{
                    color: gray;
                    padding-left: 40px;
                }
            }
            .block-sort{
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
                margin-bottom: 20px;
            }
            .sort-form{
                display: inline-block;
                vertical-align: top;
            }
            .select-sort{
                border: none;
                background: transparent;
            }
            .message-new{
                display: inline-block;
                vertical-align: top;
                button{
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    width: 40px;
                    height: 40px;
                    display: inline-block;
                    vertical-align: top;
                    margin-top: -5px;
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .block-humen{
            .active-box{
                background-image: linear-gradient(76deg, #f98153, #f45112);
            }
            .box{
                box-sizing: border-box;
                border-radius: 5px;
                box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
                height: 70px;
                padding: 10px;
                margin-bottom: 10px;
                .avatar{
                    display: inline-block;
                    vertical-align: top;
                    width: 25%;
                    text-align: center;
                    position: relative;
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
                    }
                    img{
                        width: 100%;
                        border-radius: 100%;
                    }
                }
                .name-text{
                    display: inline-block;
                    vertical-align: top;
                    width: 60%;
                    b{
                        font-family: Roboto;
                        font-size: 20px;
                        line-height: 1.38;
                        color: #001654;
                    }
                    p{
                        margin: 0;
                        font-size: 12px;
                        font-weight: 300;
                        line-height: 1.83;
                        color: #181c2f;
                    }
                }
                .time-zone{
                    display: inline-block;
                    vertical-align: top;
                    width: 15%;
                    text-align: right;
                    span{
                        opacity: 0.5;
                        font-family: Lato;
                        font-size: 12px;
                        font-weight: 300;
                        color: #001654;
                    }
                }
            }
        }
   
`
class Users extends Component {
    render() {
        return (
            <Bound>
                <div className="search-sort">
                    <form className="form-search">
                        <button type="submit" className="btn-search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                        <input type="text" className="search-input" placeholder="Search" />
                    </form>
                    <div className="block-sort">
                        <div className="sort-form">
                            <label htmlFor="input-sort">Sort by:</label>
                            <select id="input-sort" className="select-sort">
                                <option value="0">Latest</option>
                                <option value="1">Newest</option>
                                <option value="2">Recent</option>
                            </select>

                        </div>
                        <div className="message-new">
                            <span>New Message</span>
                            <button type="button">
                                <img src={plus} alt="plus" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block-humen">
                    <div className="box active-box">
                        <div className="avatar">
                            <div className="icon-status"></div>
                            <div className="img">
                                <img src={Dara} alt="dara" />
                            </div>
                        </div>
                        <div className="name-text">
                            <b>San Dara</b>
                            <p>Wait forn some minutes</p>
                        </div>
                        <div className="time-zone">
                            <span>3 mins</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="avatar">
                            <div className="icon-status"></div>
                            <div className="img">
                                <img src={Dara} alt="dara" />
                            </div>
                        </div>
                        <div className="name-text">
                            <b>San Dara</b>
                            <p>Wait forn some minutes</p>
                        </div>
                        <div className="time-zone">
                            <span>3 mins</span>
                        </div>
                    </div>
                </div>
            </Bound>
        );
    }
}

export default Users;
