import React from "react";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.titulo}>Pregunta2</h1>
        <img
          src="https://images.vexels.com/media/users/3/155301/isolated/preview/6a91c0d6c8ba37a9fd115e1776300319-pregunta-de-doodle-de-signo-de-interrogacion-3d.png"
          alt="imagen"
          className={style.image}
        />
      </div>
    </>
  );
};

export default HomePage;
