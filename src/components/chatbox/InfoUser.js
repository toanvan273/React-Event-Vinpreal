import React, { Component } from 'react';
import styled from 'styled-components'
import Dara from './../../statics/images/dara2.png'
import Dara2 from './../../statics/images/dara.png'
import wee from './../../statics/images/wee.png'
import d from './../../statics/images/d.png'


const Bound = styled.div`
    
        display: flex;
        flex-direction:column;
        width: 260px;
        vertical-align: top;
        .rectangle{
            box-sizing: border-box;
            padding: 10px;
            height: 346px;
            background-image: linear-gradient(37deg, #9000ff 0%, #8100e1 24%, #005cec, #005bec);
            .text{
                font-size: 12px;
                color: #ffffff;
                display: inline-flex;
                justify-content: space-between;
                width: 100%;
            }
            .number-input{
                position: relative;
                margin-top: 20px;
                .img{
                display: inline-block;
                position: absolute;
                right: 5px;
                top: 13px;
                }
            }
            .plus{
                display: inline-block;
                width: 13px;
                height: 13px;
                color: gray;
                background: #fff;
                text-align: center;
                border-radius: 100%;
                line-height: 10px;
                position: absolute;
                top: 17px;
                left: -6px;
            }
            .number{
                display: inline-block;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                background-color: rgba(255, 255, 255, 0.15);
                text-align: center;
                color: #fff;
                font-size: 24px;
                font-weight: bold;
                line-height: 1.6;
                input{
                    background: transparent;
                    border: none;
                    width: 135px;
                    height: 28px;
                }
            }
           
            .search-name{
                margin-top: 20px;
                form{
                    position: relative;
                }
                .btn-search{
                    border: none;
                    background: transparent;
                    position: absolute;
                    top: 0;
                    left: 5px;
                    font-size: 22px;
                    color: gray;
                }
                .form-control{
                    height: 17px;
                    opacity: 0.5;
                    font-family: UTM-Avo;
                    font-size: 12px;
                    color: #ffffff;
                    background: transparent;
                    padding-left: 35px;
                    border: none;
                }
            }
            .block-people{
                margin-top: 31px;
                border-top: 1px solid gray;
                padding-top: 10px;
                .box{
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    background-color: rgba(255, 255, 255, 0.15);
                    display: inline-block;
                    text-align: center;
                    margin-right: 10px;
                    p{
                        margin: 0;
                        font-size: 12px;
                        text-align: center;
                        color: #ffffff;
                    }
                }
                .img{
                    width: 36px;
                    height: 36px;
                    display: inline-block;
                    margin-top: 10px;
                    img{
                        width: 100%;
                        border-radius: 100%;
                    }
                }
            }
        }
        .block-color{
            .orange{
                height: 15px;
                background-image: linear-gradient(87deg, #f7bb25, #ff2424);
            }
            .green{
                height: 15px;
                background-image: linear-gradient(87deg, #00a548, #bdd50a);
            }
        }
        .block-info{
            .avatar{
                text-align: center;
                padding-top: 10px;
            }
            .ava{
                width: 120px;
                height: 120px;
                display: inline-block;
                img{
                    width: 100%;
                    border-radius: 100%;
                }
            }
            .info{
                h4{
                    margin: 0;
                    font-family: Roboto;
                    font-size: 18px;
                    color: #001654;
                }
                span{
                    opacity: 0.5;
                    font-family: Roboto;
                    font-size: 14px;
                    color: #001654;
                }
            }
            .info-detail{
                .number{
                    display: inline-block;
                }
                .acc-no{
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 10px;
                    border-bottom: 1px solid #4d567d;
                    line-height: 3;
                    span{
                        opacity: 0.4;
                        font-family: Roboto;
                        font-size: 14px;
                        color: #181c2f;
                    }
                    .number{
                        font-family: Roboto;
                        font-size: 14px;
                        color: #001654;
                    }
                }
                .media{
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 10px;
                    height: 45px;
                    box-shadow: inset 0 0.5px 0 0 #d0d4da;
                    line-height: 3;
                    span{
                        font-family: Roboto;
                        font-size: 14px;
                        color: #001654;
                    }
                    .see-all{
                        display: inline-block;
                        font-family: Roboto;
                        font-size: 14px;
                        color: #f5581c;
                        .fa{
                            font-size: 10px;
                            margin-left: 9px;
                        }
                        span{
                        font-family: Roboto;
                        font-size: 14px;
                        color: #f5581c;
                    }
                    }
                }
            }
        }
   
`
class InfoUser extends Component {
    render() {
        return (
            <Bound className="block-right">
                <div className="rectangle">
                    <div className="text">
                        <span>DRAG MONEY TO SEND</span>
                        <div className="img">
                            <img src={wee} alt="wee" />
                        </div>
                    </div>
                    <div className="number-input">
                        <div className="plus">+</div>
                        <div className="number">
                            <input type="number" placeholder="Number" />
                        </div>
                        <div className="img">
                            <img src={d} alt="d" />
                        </div>
                    </div>
                    <div className="search-name">
                        <form>
                            <button type="submit" className="btn-search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <input type="text" className="form-control" placeholder="Search wee name" />
                        </form>
                    </div>
                    <div className="block-people">
                        <div className="box">
                            <div className="img">
                                <img src={Dara2} alt="dara" />
                            </div>
                            <p>Thùy Dương</p>
                        </div>
                        <div className="box">
                            <div className="img">
                                <img src={Dara2} alt="dara" />
                            </div>
                            <p>Thùy Dương</p>
                        </div>
                    </div>
                </div>
                <div className="block-color">
                    <div className="orange"></div>
                    <div className="green"></div>
                </div>
                <div className="block-info">
                    <div className="avatar">
                        <div className="ava">
                            <img src={Dara} alt="dara" />
                        </div>
                        <div className="info">
                            <h4>Lucy Nguyen</h4>
                            <span>@lucynguyen</span>
                        </div>
                    </div>
                    <div className="info-detail">
                        <div className="acc-no">
                            <span>Acc No:</span>
                            <div className="number">20009237423854992</div>
                        </div>
                        <div className="media">
                            <span>Media (31)</span>
                            <div className="see-all">
                                <span>See all</span>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="media">
                            <span>Last transaction</span>
                            <div className="see-all">
                                <span>See all</span>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Bound>
        );
    }
}

export default InfoUser;
