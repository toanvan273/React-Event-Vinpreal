import React, { Component } from 'react';

import cameraon from './../images/ic_cameraon.png'

import styled from 'styled-components'



const RectangleCopy = styled.div`
width: 100%;
min-width: 1024px;
height: 280px;
background-color: #0a312f;
display: flex;
justify-content: space-around;
align-items: center;
`
const Camera = styled.div`
    width: 260px;
    height: 125px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    border: 2px solid;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const CameraOn = styled(Camera)`
    background: #5aa308;
`
const CameraOff = styled(Camera)`
    background: #d0021b;
`
const CameraClear = styled(Camera)`
    background: #2a5aed;
`
const CardReset = styled(Camera)`
    background: #9b51e0;
`
class CameraShow extends Component {
    render() {
        return (
            <>
                <RectangleCopy>
                    
                    <CameraOn>
                        <span>CAMERA ON</span>
                        <div>
                        <img src={cameraon} className="img-responsive" alt="made" />
                        </div>
                    </CameraOn>
                    <CameraOff>
                        <span>CAMERA OFF</span>
                        <div>
                        <img src={cameraon} className="img-responsive" alt="a" />
                        </div>
                    </CameraOff>
                    <CameraClear>
                        <span>CLEAR CAMERA</span>
                        <div>
                        <img src={cameraon} className="img-responsive" alt="se" />
                        </div>
                    </CameraClear>
                    <CardReset>
                        <span>RESET CARD</span>
                        <div>
                        <img src={cameraon} className="img-responsive" alt="he" />
                        </div>
                    </CardReset>
                </RectangleCopy>
            </>

        );
    }
}

export default CameraShow;
