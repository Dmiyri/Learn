import React from 'react';
import '../App.module.css';

class Day extends React.Component {

  render() {
    return (
        <div className={classForDay}>
          <select value={day} onChange={e => setDay(e.target.value)}>
            <option value={'Monday'}>1</option>
            <option value={'Tuesday'}>2</option>
            <option value={'Wednesday'}>3</option>
            <option value={'Thursday'}>4</option>
            <option value={'Friday'}>5</option>
          </select>
        </div>
    );
  }
}

export default Days;
