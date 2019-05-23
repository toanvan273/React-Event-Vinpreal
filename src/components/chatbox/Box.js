import React, { Component } from 'react';
import styled from 'styled-components'


const Bound = styled.div`
        display: flex;
        flex-direction:column;
        flex: 1;
        background: #fff;
        .top-info{
            display:flex;
            height: 90px;
            box-sizing: border-box;
            padding: 10px;
            box-shadow: inset 0 -0.5px 0 0 #d0d4da;
            background-color: rgba(255, 255, 255, 0.9);
            border-left: 1px solid #d0d4da;
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
            overflow:auto;
            box-sizing: border-box;
            padding: 20px;
            border-left: 1px solid #d0d4da;
            /* box-shadow: inset 0.5px 0 0 0 #d0d4da; */
            .scroll{
                display:flex;
                flex-direction:column;
                width:100%;
                height:fit-content;
                /* max-height: 500px; */
                .message{
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 10px;
                    span{
                        border-radius: 12px;
                        background-color: #008bcc;
                        font-size: 14px;
                        color: #ffffff;
                        padding: 10px 15px;
                    }
                }
            }
            
        }
        .form-chat{
            display:flex;
            height: 72px;
            box-shadow: 0 -8px 30px 0 rgba(0, 0, 0, 0.05);
            background-color: #ffffff;
            form{
                text-align: center;
                line-height: 4.5;
                position: relative;
                width: 100%;
            }
            .input-text{
                outline: none;
                height: 39px;
                border-radius: 24px;
                background-color: #eff1f5;
                border: none;
                padding: 0 25px;
                width: 75%;
            }
            .btn-send{
                border: none;
                width: 38px;
                height: 38px;
                border-radius: 100%;
                background-image: linear-gradient(28deg, #f98153, #f45112);
                color: #fff;
                font-size: 20px;
                position: absolute;
                top: 18px;
                right: 32px;
                cursor: pointer;
            }
        }
        
   
   
`


class Box extends Component {
    state = {
        txtText: '',
    }
 
    onChange = e => {
        e.preventDefault()
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]: value
        })
    }

    onSubmit = event => {
        event.preventDefault()
        const { userChoose } = this.props
        const { txtText } = this.state
        let dataMes = userChoose.message
        dataMes.push(txtText)
        this.setState({
            txtText: ''
        })
        this.props.getData(dataMes, userChoose.id)
    }
    render() {
        const { userChoose } = this.props
        let elmMess = userChoose.message.length === 0 ? null : userChoose.message.map(e => {
            return (
                <div className="message" key={e}>
                    <span>{e}</span>
                </div>
            )
        })


        return (
            <Bound>
                <div className="top-info">
                    <div className="user-img">
                        <div className="icon-status"></div>
                        <div className="img">
                            <img src={userChoose.image} alt={userChoose.username} />
                        </div>
                    </div>
                    <div className="name-user">
                        <h5>{userChoose.name}</h5>
                        <span className="username">
                            {userChoose.username}
                        </span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        <span>{userChoose.timezone}</span>
                    </div>
                    <div className="more">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="block-message">
                    <div className="scroll">
                        {elmMess}
                    </div>
                </div>
                <div className="form-chat">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" className="input-text"
                            value={this.state.txtText}
                            onChange={this.onChange}
                            name="txtText" placeholder="Type something" />
                        <button type="submit" className="btn-send">
                            <i className="fa fa-location-arrow" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>

            </Bound>
        );
    }
}

export default Box;
