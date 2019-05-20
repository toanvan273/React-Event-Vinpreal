import React, { Component } from 'react';
import icDrag from './../images/ic_drag.png'
import Human from './../images/women.jpg'
import ImageGrid from './ImageGrid'
import styled from 'styled-components'

const Bound = styled.div`
    display:flex;
    .retangle{
        width: 100%;
        height: 512px;
        min-width: 1024px;
        background-color: #194341;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow-x: hidden;
    }
    .block-data{
        display: inline-block;
        vertical-align: top;
        max-width: 15%;
    }
    .block-image{
        width: 100%;
        padding: 0 10px;
    }
    .div-img{
        max-width: 84%;
        overflow-x: auto;
        overflow-y: hidden;
        display: inline-flex;
        margin-left: 10px;
        &::-webkit-scrollbar{
            height: 0;
        }
    }
    .div-drag{
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        p{
            color: #8ba09f;
            font-size: 18px;
            font-weight: bold;
            line-height: 1.33;
            letter-spacing: 0.2px;
        }
    }
    .div-num{
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        line-height: 1.5;
        border: 5px solid #fff;
        border-radius: 4px;
        background: #5bc3bf;
        color: #fff;
        vertical-align: top;
        width: 150px;
        height: 200px;
        p{
            margin-top: 30px;
        }
    }
    
`

const Div = styled.div`
    display: inline-block;
    vertical-align: middle;
    text-align: center;
`

const P = styled.p`
    font-size: 50px;
    font-weight: 900;
    margin: 0;
`

class LoadImage extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    url: Human,
                    id: 1
                },
                {
                    url: Human,
                    id: 2
                },
                {
                    url: Human,
                    id: 3
                },
                {
                    url: Human,
                    id: 4
                },
                {
                    url: Human,
                    id: 5
                },
                {
                    url: Human,
                    id: 6
                },
                {
                    url: Human,
                    id: 7
                },
                { url: Human, id: 8 },
                { url: Human, id: 9 }, { url: Human, id: 10 }, { url: Human, id: 11 },
                { url: Human, id: 12 }, { url: Human, id: 13 }
            ],
            chooseIdImg: null,
        }
    }

    onDrop = (event) => {
        let { data, chooseIdImg } = this.state
        data.forEach((e, index) => {
            if (e.id === chooseIdImg) {
                data.splice(index, 1)
                this.setState({
                    data: data,
                    chooseIdImg: null
                })
            }
        })

    }

    onDragStart = (event, id) => {
        if (event && id) {
            this.setState({
                chooseIdImg: id
            })
        }
    }

    componentDidMount() {
        window.addEventListener('load', function () {
            document.getElementById('div-img').addEventListener('mousewheel', function (e) {
                if (e.wheelDelta > 0) {
                    this.scrollLeft -= 20
                } else {
                    this.scrollLeft += 20
                }
                e.preventDefault();
            })
        })
    }

    render() {
        let { data } = this.state
        let elm = data.map((e, index) => {
            return <ImageGrid key={index} url={e.url}
                onDragStart={(event) => this.onDragStart(event, e.id)}
                onDrop={this.onDrop}
            />
        })
        return (
            <Bound>
                <div className='retangle'
                    draggable={true}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(e) => this.onDrop(e)}
                >
                    <div className="block-image">
                        <div className="block-data">
                            <div className="div-num">
                                <P> {data.length} </P>
                                <span>PAX</span>
                            </div>
                        </div>
                        <div className="div-img" id="div-img" >
                            {elm}
                        </div>
                    </div>
                    <div className="div-drag">
                        <Div>
                            <img src={icDrag} className="img-respon" alt="so" />
                        </Div>
                        <p>KÉO HÌNH RA KHỎI HÀNG CHẠY ĐỂ XÓA</p>
                    </div>
                </div>
            </Bound>

        );
    }
}

export default LoadImage;
