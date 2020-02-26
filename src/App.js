import React from 'react';
import s from './App.module.css';
import Tarasiuk from "./Name/Tarasiuk";
import Hello from "./Hello/Hello";
import MySkill from "./MySkills/MySkill";


class App extends React.Component {

    state = {
        skills: ["Ответственный", "Исполнительный", "Коммуникабельный"],
        count: 0,
    }

    onHelloClick = (newText) => {
        alert(`Hello ${newText}`);
        this.setState({count: this.state.count + 1})
    };

    render() {
        let skillsMe = this.state.skills.map(i => <MySkill skill={i}/>);

        return (
            <div className={s.app}>
                <Tarasiuk/>
                <div className={s.skills}>
                    {skillsMe}
                </div>
                <Hello count={this.state.count} onHelloClick={this.onHelloClick}/>
            </div>
        );
    }
}

export default App;
