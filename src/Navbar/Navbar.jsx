import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Monday = 'monday';
const Tuesday = 'tuesday';

class Navbar extends React.Component {

    state = {
        isHidden: false,
        day:'',
    }

    render() {

        return (
            <div className={s.nav}>
              <span >NavBar</span>
                {!this.state.isHidden && <div className={s.wrapper}>
                    <div className={s.days}>
                        <NavLink style={{color: this.state.day === Monday ? 'red' : 'blue'}}
                                 to='/monday'
                        onClick={()=>{this.setState({day: Monday})}}> Monday</NavLink>
                    </div>
                    <div className={s.days}>
                        <NavLink style={{color: this.state.day === Tuesday ? 'red' : 'blue'}}
                            to='/tuesday'
                                 onClick={()=>{this.setState({day: Tuesday})}}> Tuesday</NavLink>
                    </div>
                    <div className={s.days}>
                        <NavLink to='/wednesday'>Wednesday </NavLink>
                    </div>
                    <div className={s.days}>
                        <NavLink to='/thursday'>Thursday </NavLink>
                    </div>
                    <div className={s.days}>
                        <NavLink to='/friday'>Friday </NavLink>
                    </div>
                </div>
                }
                {!this.state.isHidden && <button onClick={() => {
                    this.setState({isHidden: true})
                }}>hide</button>}
                {this.state.isHidden && <button onClick={() => {
                    this.setState({isHidden: false})
                }}>show</button>}
            </div>
        );
    }
}

export default Navbar;
