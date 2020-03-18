import React from 'react';
import s from './App.module.css';
import Monday from "./Monday/Monday";
import Navbar from "./Navbar/Navbar";
import Tuesday from "./Tuesday/Tuesday";
import {Route} from "react-router-dom";
import Loader from "./Loader";

class App extends React.Component {

    state = {
        loading: true,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000)
    }

    render() {
        return (
            <>
            { this.state.loading ? <Loader/> :
                    <div className={s.app}>
                        <Navbar/>
                        <Route path='/monday' render={() => <Monday/>}/>
                        <Route path='/tuesday' render={() => <Tuesday/>}/>
                    </div>
            }
            </>
        );
    }
}

export default App;
