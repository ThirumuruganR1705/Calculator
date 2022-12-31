import React, { Component } from 'react';

class Square extends Component { 
    render() { 
        return (
            <button className={'Btn'} id={this.props.class} onClick={()=>{this.props.clickHandler(this.props.value)}}>{this.props.value}</button>
        );
    }
}
 
export default Square;