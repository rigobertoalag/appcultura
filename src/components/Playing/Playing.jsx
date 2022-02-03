import React, { useState, useEffect } from "react";
import style from "./Playing.module.css";
import { Preguntas } from "../Helpers/BD.jsx";
import {useNavigate } from 'react-router-dom'

const Playing = () => {
  const [aleatorio, setAleatorio] = useState(Math.round(Math.random() * 100));
  const [vidas, setVidas] = useState(5);
  const [puntuacion, setPuntuacion] = useState(0);
  const [time, setTime] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [clase, setClase] = useState([
    style.naturaleza,
    style.cultura,
    style.arte,
    style.deportes,
    style.viajes,
  ]);

  let navigate = useNavigate()

  useEffect(() => {
    let cuentaAtras = setInterval(() => {
      time > 0
        ? setTime(time - 1)
        // : setGameOver((window.location.href = "/appcultura/gameover"));
        : navigate("/appcultura/gameover")
    }, 1000);

    if(puntuacion === 5){
      // setGameOver((window.location.href = "/appcultura/winner"))
      // setGameOver((<Navigate to="/appcultura/winner"/>));
      navigate("/appcultura/winner")
    }

    return () => clearInterval(cuentaAtras);

    

  }, [time]);

  const bien = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance("Respuesta correcta"));
    setAleatorio(Math.round(Math.random() * 100));
    setPuntuacion(puntuacion + 1);
    setTime(20);
  };

  const malo = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance("Respuesta erronea"));
    setAleatorio(Math.round(Math.random() * 100));
    setVidas(
      vidas > 0 ? vidas - 1 : navigate("/appcultura/gameover") //setGameOver((<Navigate to="/appcultura/gameover"/>))
    );
    setTime(20);
  };

  return (
    <>
      {Preguntas.map((p) =>
        p.id === aleatorio && puntuacion < 5 ? (
          <div key={p.id}>
            <div className={style.countContainer}>
              <h2 className={time <= 5 ? style.danger : time <= 10 ? style.warning :style.normal}>Tiempo: {time}</h2>
              <h2 className={puntuacion === 5 ? style.winner : style.normal}>Puntos: {puntuacion}</h2>
              <h2 className={vidas === 0 ? style.danger : vidas <= 2 ? style.warning : style.normal}>Vidas: {vidas}</h2>
            </div>

            <div className={style.imgContainer}>
              <div
                className={
                  p.estilos === "naturaleza"
                    ? clase[0]
                    : p.estilos === "arte"
                    ? clase[2]
                    : p.estilos === "deportes"
                    ? clase[3]
                    : p.estilos === "viajes"
                    ? clase[4]
                    : p.estilos === "cultura"
                    ? clase[1]
                    : clase[4]
                }
              ></div>
            </div>

            <div className={style.preguntaContainer}>
              <h3>{p.pregunta}</h3>
            </div>

            <div className={style.buttonContainer}>
              <button
                className={style.boton}
                onClick={
                  p.respuesta1 === p.solucion ? () => bien() : () => malo()
                }
              >
                {[p.respuesta1]}
              </button>
              <button
                className={style.boton}
                onClick={
                  p.respuesta2 === p.solucion ? () => bien() : () => malo()
                }
              >
                {[p.respuesta2]}
              </button>
              <button
                className={style.boton}
                onClick={
                  p.respuesta3 === p.solucion ? () => bien() : () => malo()
                }
              >
                {[p.respuesta3]}
              </button>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default Playing;
