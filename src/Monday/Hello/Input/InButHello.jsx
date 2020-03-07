import React from 'react';
import s from './Input.module.css'

class InButHello extends React.Component {

    state={
        error: true,
        title:'',
    };

    helloClick = () => {
        let newText = this.state.title;
        this.state.title = '';
        if (newText===''){
            this.setState({error:true})
        }else {
            this.setState({error:false})
            this.props.onHelloClick(newText);
        }
    };
    onEnterPress = (e) => {
        if (e.key === 'Enter') {
            return this.helloClick()
        }
    };
    onTitleChange=(e)=>{this.setState({error:false, title:e.currentTarget.value})};

    render = () => {
        let classForError = this.state.error ? `${s.error}` : "";
        return (
            <div>
                <input onChange={this.onTitleChange}
                       onKeyPress={this.onEnterPress}
                       value={this.state.title}
                       className={classForError} placeholder="Как тебя зовут?"/>
                <button style={{marginLeft: '5px', padding: '5px'}}
                        onClick={this.helloClick}>hello</button>
            </div>
        );
    }
}

export default InButHello;

