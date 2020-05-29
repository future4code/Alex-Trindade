import React from "react";
import Logo from "../../../images/logo.png";
import {
  Main,
  SecaoSuperior,
  Logotipo,
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
    <Main>
      <SecaoSuperior>
        <Logotipo src={Logo} alt={"logo da empresa"} />
        <Frase>Bem vindos a LabeSpace</Frase>
        <Frase>Encontre as melhores viagens espaciais!</Frase>
      </SecaoSuperior>
      <SecaoInferior>
        <Buttons onClick={goToLogin}>Login</Buttons>
        <Buttons onClick={goToListTrips}>Ver Viagens</Buttons>
      </SecaoInferior>
    </Main>
  );
};

export default HomePage;
