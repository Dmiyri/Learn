import React from 'react';
import SpanHello from "./SpanHello";
import InButHello from "./InButHello";

class Hello extends React.Component {

    render = () => {
        return (
            <div style={{
                width: '250px',
                border: '1px solid black',
                margin: '5px',
                padding: '5px',
                backgroundColor: 'yellow',
                display: 'flex',
            }}>
                <SpanHello count={this.props.count}/>
                <InButHello onHelloClick={this.props.onHelloClick}/>
            </div>
        );
    }
}

export default Hello;

