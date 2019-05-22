import React, { Component } from 'react';
import styled from 'styled-components'

const Foud = styled.div`
    display:flex;
    height:80px;
        padding: 0 40px;
        background-image: linear-gradient(121deg,#00a1e4,#005d98);
        color: #c5e1ef;
    .bank-info{
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        h3{
            margin: 0;
        }
        p{
            margin: 0;
        }
    }
    .all-info{
        display: inline-block;
        vertical-align: top;
        float: right;
    }
    .mail-call{
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        margin-left: 10px;
        .fa{
            font-size: 17px;
            background: #cce0ed;
            color: #0069a6;
            width: 22px;
            height: 20px;
            text-align: center;
            border-radius: 5px;
            margin-right: 10px;
        }
        .mail{
            margin-bottom: 5px;
        }
    }
    .copyright{
        display: inline-block;
        text-align: right;
        margin-left: 130px;
        p{
            margin: 0;
        }
    }
`

class Footer extends Component {
    render() {
        return (
            <Foud>
                <div className="bank-info">
                    <h3>VIETNAM EXPORT IMPORT BANK</h3>
                    <p>8th Floor - Vincom Center, 72 Le Thanh Ton and 45A Ly Tu Trong Street, District 1, HCMC</p>
                </div>
                <div className="all-info">
                    <div className="mail-call">
                        <div className="mail">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>ebanking@eximbank.com.vn</span>
                        </div>
                        <div className="call">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>1800 1199</span>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2018 Eximbank.</p>
                        <p> All Rights Reserved. </p>
                    </div>
                </div>
            </Foud>
        );
    }
}

export default Footer;
