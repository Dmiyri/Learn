import React from 'react';
import s from './Tarasiuk.module.css';

class Tarasiuk extends React.Component {
    render = () => {
        return (
                <div className={s.name }>
                    <span className={s.animation}>Тарасюк Дмитрий Валентинович</span>
                </div>
        );
    }
}

export default Tarasiuk;

