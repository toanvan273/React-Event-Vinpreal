import React, { Component } from 'react';
import styled from 'styled-components'
import vnd from './../../statics/images/vnd.png'
import Adver from './../../statics/images/quan1.png'
import plus from './../../statics/images/plus.png'
import dara from './../../statics/images/dara.png'

const Bound = styled.div`
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    background-image: linear-gradient(121deg, #00a1e4, #005d98);
   .block-left{
        display: inline-block;
        width: 73%;
        height: 430px;
        .account{
            display: flex;
            justify-content: space-between;
            .style-account{
                color: #fff;
                display: inline-block;
                width: 313px;
                height: 50px;
                opacity: 0.95;
                border-radius: 5px;
                box-shadow: 0 6px 10px 0 rgba(169,71,0,0.25);
                background-image: linear-gradient(65deg,#f98153,#f45112);
                padding: 20px;
                .fa{
                    float: right;
                }
                .number{
                    display: flex;
                    justify-content: space-between;
                    .img{
                        display: inline-block;
                        vertical-align: bottom;
                        line-height: 3;
                    }
                    .style{
                        font-size: 28px;
                        display: inline-block;
                        vertical-align: bottom;
                    }
                }
            }
        }
        .advertizing{
            margin: 20px 0;
            img{
                width: 100%;
            }
        }
        .show-people{
            .plus{
                display: flex;
                width: 90px;
                height: 90px;
                border-radius: 10px;
                background-color: #ffffff;
                text-align: center;
                justify-content: center;
                align-items: center;
            }
            .button-plus{
                display: inline-block;
                vertical-align: top;
                margin-right: 20px;
            }
            .line-people{
                display: inline-flex;
                overflow-x: auto;
                overflow-y: hidden;
                .people{
                    width: 90px;
                    height: 90px;
                    border-radius: 10px;
                    background-color: #ffffff;
                    text-align: center;
                    display: inline-block;
                    p{
                        margin: 0;
                    color: #001654;
                    margin-top: 6px;
                    }
                    .img{
                        width: 40px;
                        height: 40px;
                        display: inline-block;
                        margin-top: 10px;
                    }
                    img{
                        width: 100%;
                        border-radius: 100%;
                    }
                }
            }
        }
   }
   .block-right{
        display: flex;
        flex-direction: column;
        width: 25%;
        vertical-align: top;
        justify-content: space-between;
        height: 430px;
        float: right;
        .top{
            background-image: linear-gradient(64deg, #00cfff, #005cec, #005bec);
            color: #fff;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 23px;
            border-radius: 5px;
                height: 160px;
            h2{
                margin: 0;
                font-size: 12px;
            }
            .info{
                margin-top: 40px;
                h3{
                    margin: 0;
                }
            }
        }
        .bottom{
            border-radius: 5px;
            display: inline-block;
            color: #fff;
            padding-top: 27px;
            padding-left: 27px;
            padding-bottom: 27px;
            background-image: linear-gradient(to top, #000f2f, #00385c);
            height: 140px;
            form{
                position: relative;
                .form-control{
                    height: 30px;
                    opacity: 0.1;
                    border-radius: 22.5px;
                    width: 193px;
                    &::placeholder { 
                        color: red;
                        opacity: 1;
                    }
                }
                .btn-primary{
                    background: transparent;
                    border: transparent;
                    position: absolute;
                    right: 30px;
                    top: 10px;
                    cursor: pointer;
                }
            }
        }
   }
   .bottom-page{
        height: 255px;
        .table-content{
            width: 100%;
            color: #fff;
       thead{
        background: #1aa4e5;
       }
    }
   }
   
`

class Home extends Component {
    render() {
        return (
            <Bound>
                <div className="top-page">
                    <div className="block-left">
                        <div className="account">
                            <div className="style-account">
                                <div className="top">
                                    <span>CURRENT ACCOUNT</span>
                                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                </div>
                                <div className="number">
                                    <div className="img">
                                        <img src={vnd} alt="vnd" />
                                    </div>
                                    <div className="style">
                                        <b>12864000 </b>
                                        <span>.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="style-account">
                                <div className="top">
                                    <span>CURRENT ACCOUNT</span>
                                    <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                </div>
                                <div className="number">
                                    <div className="img">
                                        <img src={vnd} alt="vnd" />
                                    </div>
                                    <div className="style">
                                        <b>12864000 </b>
                                        <span>.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quang Cao */}
                        <div className="advertizing">
                            <img src={Adver} alt="adver" />
                        </div>
                        {/* Slide show */}
                        <div className="show-people">
                            <div className="button-plus">
                                <div className="plus">
                                    <img src={plus} alt="plus" />
                                </div>
                            </div>
                            <div className="line-people">
                                <div className="people">
                                    <div className="img">
                                        <img src={dara} alt="dara" />
                                    </div>
                                    <p>San Dara</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Block right */}
                    <div className="block-right">
                        <div className="top">
                            <div className="title">
                                <h2>NEXT RECURRING BILL PAYMENT</h2>
                            </div>
                            <div className="info">
                                <span> 15 October, 2018 </span>
                                <h3>220000 VND</h3>
                                <i>Water bill monthly</i>
                            </div>
                        </div>
                        <div className="bottom">
                            <b>Hello</b>
                            <p>May I help you?</p>
                            <form >
                                <input type="text" className="form-control" placeholder="Answer here" />
                                <button type="submit" className="btn-primary">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom-page">
                    <table className="table-content">
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>TYPE</th>
                                <th>DETAILS</th>
                                <th>DEPOSITS</th>
                                <th>WITHRAWALS</th>
                                <th>BALANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                            <tr>
                                <td>30 Sep 2018</td>
                                <td>Topup</td>
                                <td>Phone number: 0983758298</td>
                                <td></td>
                                <td>200000</td>
                                <td>12864000</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </Bound>
        )
    }
}

export default Home;
