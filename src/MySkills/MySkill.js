import React from 'react';
import logo from './logo.svg';
import s from './MySkill.module.css';

class Skills extends React.Component {

  render=()=> {
    return (
        <div className={s.skill}>
          {this.props.skill}
        </div>
    );
  }
}

export default Skills;
