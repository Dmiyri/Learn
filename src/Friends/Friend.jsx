import React from 'react';
import s from './Friend.module.css';

class Skills extends React.Component {
  render=()=> {
    return (
        <div className={s.friend}>
         {this.props.friend}
        </div>
    );
  }
}

export default Skills;
