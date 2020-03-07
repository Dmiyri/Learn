import React from 'react';

class SpanHello extends React.Component {
    render = () => {
        return (
            <div>
                <span style={{width: '15px', margin: '5px'}}>
                    {this.props.count}
                </span>
            </div>
        );
    }
}

export default SpanHello;

