import React from 'react';
import s from './App.module.css';
import Tarasiuk from "./Name/Tarasiuk";
import Hello from "./Hello/Hello";
import MySkill from "./MySkills/MySkill";


class App extends React.Component {

    state = {
        skills: ["Пунктуальный", "Исполнительный", "Коммуникабельный"],
        names: [],
    }

    onHelloClick = (newText) => {
        alert(`Hello ${newText}`);
        let newFriend = [...this.state.names, newText];

        this.setState({count: this.state.count + 1, names: newFriend})
    };

    render() {

        let skillsMe = this.state.skills.map(i => <MySkill skill={i}/>);

        return (
            <div className={s.app}>
                <h2>Спасибо, что заглянули ко мне на страницу</h2>
                <div className={s.wrapper}>
                    <div>
                        <Tarasiuk/>
                        <div className={s.skills}>
                            <div>Если коротко, то меня можно охарактеризовать:</div>
                            <div className={s.skill}>{skillsMe}</div>
                        </div>
                    </div>
                    <div>
                        <Hello state={this.state} onHelloClick={this.onHelloClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
