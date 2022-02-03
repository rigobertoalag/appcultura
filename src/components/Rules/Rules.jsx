import React from "react";
import style from "./Rules.module.css";
import {Link} from 'react-router-dom'

const Rules = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Instrucciones</h1>
        <div className={style.ruleContainer}>
          <h2>¡Juega de manera simple!</h2>
          <p>
            Contesta la pregunta que se te muestra en pantalla presionando el
            botón con la respuesta correcta.
          </p>
          <br></br>
          <h2>¡Suma 5 puntos y ganarás!</h2>
          <br></br>
          <p>Pero cuidado si pierdes tus 5 vidas perderás :(</p>
        </div>
        <div className={style.butonContainer}>
          <button className={style.button}><Link to='/appcultura/playing'>Jugar</Link></button>
          <button className={style.button}><Link to='/appcultura/'>Volver</Link></button>
        </div>
      </div>
    </>
  );
};

export default Rules;
