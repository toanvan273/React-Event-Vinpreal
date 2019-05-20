import React, { Component } from 'react';



import styled from 'styled-components'

const Div = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: center;
`

const Bitmap = styled(Div)`
    width: 150px;
    height: 200px;
    margin-right: 15px;
    border: 2px solid #5bc3bf;
    border-radius: 4px;
`


class ImageGrid extends Component {
    render() {
        return (
            <>
                <Bitmap draggable={true}
                onDragStart={this.props.onDragStart}
                onDragEnd={this.props.onDragEnd} 
                onDrop={(e) => this.props.onDrop(e, 'img')}
                onDragOver={(event) => event.preventDefault()}
                >
                    <img src={this.props.url} className="img-respon" alt="age" />
                </Bitmap>
            </>

        );
    }
}

export default ImageGrid;
