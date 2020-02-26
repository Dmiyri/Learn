import React from 'react';

class InButHello extends React.Component {

    constructor(props) {
        super(props);
        this.newHelloText = React.createRef();
    }
    helloClick = () => {
        let newText = this.newHelloText.current.value;
        this.newHelloText.current.value = '';
        this.props.onHelloClick(newText);
    };

    render = () => {
        return (
            <div>
                <input ref={this.newHelloText}/>
                <button style={{marginLeft: '5px', padding: '5px'}} onClick={this.helloClick}>hello</button>
            </div>
        );
    }
}

export default InButHello;

