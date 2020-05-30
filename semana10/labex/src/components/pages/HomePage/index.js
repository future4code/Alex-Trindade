import React from "react";
import {
  Main,
  SecaoSuperior,
  Frase,
  SecaoInferior,
  Buttons,
} from "./StyleHome";

const HomePage = (props) => {
  const goToLogin = () => {
    props.history.push("/login");
  };

  const goToListTrips = () => {
    props.history.push("/viagens");
  };

  return (
    <main>
      <SecaoSuperior>
        <Frase>Bem vindos a LabeSpace</Frase>
        <Frase>Encontre as melhores viagens espaciais!</Frase>
      </SecaoSuperior>
      <SecaoInferior>
        <Buttons onClick={goToLogin}>Login</Buttons>
        <Buttons onClick={goToListTrips}>Ver Viagens</Buttons>
      </SecaoInferior>
    </main>
  );
};

export default HomePage;
