import React from 'react';
import preloader from './Images/103.gif'
import s from './App.module.css'

class Loader extends React.Component {

    render() {
        return (
            <div className={s.loading} >
                <img src={preloader}/>
            </div>
        )
    }
}

export default Loader;
