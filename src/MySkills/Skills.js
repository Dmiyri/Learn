import React from 'react';
import s from './MySkill.module.css';
import MySkill from "./MySkill";

class Skills extends React.Component {

  render=()=> {
    let skills = ["Ответственный", "Исполнительный", "Коммуникабельный"];

    let skillsMe = skills.map(i=> <MySkill skill={i}/>);
    return (
        <div className={s.skills}>
          {skillsMe}
        </div>
    );
  }
}

export default Skills;
