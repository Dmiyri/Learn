import React from 'react';
import s from './App.module.css';
import Monday from "./Monday/Monday";
import Navbar from "./Navbar/Navbar";
import Tuesday from "./Tuesday/Tuesday";
import {Route} from "react-router-dom";

class App extends React.Component {


    render() {
        return (
            <div className={s.app}>
                <Navbar/>
                <Route path ='/monday' render={() => <Monday/> }/>
                <Route path='/tuesday' render={() => <Tuesday/> }/>
            </div>
        );
    }
}

export default App;
