import React from "react";
import style from "./GameOver.module.css";
import { Link } from "react-router-dom";

const GameOver = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.titulo}>Haz perdido :(</h1>

        <div className={style.containerImg}>
          <div className={style.img}></div>
        </div>

        <div className={style.buttonContainer}>
          <Link to="/appcultura/">Volver</Link>
        </div>
      </div>
    </>
  );
};

export default GameOver;
