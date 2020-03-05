import React from 'react';
import SpanHello from "./SpanHello";
import InButHello from "./InButHello";
import s from './Hello.module.css'
import Friend from "../Friends/Friend";

class Hello extends React.Component {

    render = () => {

        let friendMe = this.props.state.names.map(t=><Friend friend={t}/>)

        return (
            <div className={s.style}>
                <InButHello onHelloClick={this.props.onHelloClick}/>
                <h3>Мои друзья:</h3>
                <div className={s.span}>
                    {friendMe}
                </div>
            </div>
        );
    }
}

export default Hello;

