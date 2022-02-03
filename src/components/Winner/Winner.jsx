import React from 'react';
import style from './Winner.module.css'
import {Link} from 'react-router-dom'

const Winner = () => {
  return(
      <>
        <div className={style.container}>
            <h1>¡Felicidades has sumado mas de 5 puntos!</h1>

            <img src='https://illustoon.com/photo/314.png' alt='winner' height='20%'></img>

            <div className={style.buttonContainer}>
                <button className={style.button}><Link to='/appcultura/playing'>Jugar de nuevo</Link></button>
                <button className={style.button}><Link to="/appcultura/">Ir al Inicio</Link></button>
            </div>
        </div>
      </>
  )
};

export default Winner;
