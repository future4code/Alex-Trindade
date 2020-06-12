import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App.js";
import Perfis from "../images/profiles.png";
import LogoInvert from "../images/logoinvert.jpg";
import {
  Container,
  Header,
  ProfileButton,
  Lista,
  ItemLista,
  PerfilImage,
} from "./StyledMatches.js";
import { LogoApp, Cursor } from "../StyledApp.js";

function Matches(props) {
  const [telaAtual, setTelaAtual] = useState("matches");
  const [listaDeMatches, setListaDeMatches] = useState(undefined);

  const ListarMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-trindade-julian/matches"
      )
      .then((resposta) => {
        return setListaDeMatches(resposta.data.matches);
      })
      .catch((error) => {
        return window.alert("Erro ao exibir os matches.");
      });
  };

  useEffect(() => {
    ListarMatches();
  }, []);

  const onClickPerfis = () => {
    setTelaAtual("perfis");
  };

  if (telaAtual === "matches") {
    return (
      <div>
        <Container>
          <div>
            <Header>
              <ProfileButton onClick={onClickPerfis}>
                <img src={Perfis} alt='íconePerfis' />
              </ProfileButton>
              <LogoApp src={LogoInvert} alt='logo' />
              <Cursor></Cursor>
            </Header>
            <Lista>
              {listaDeMatches &&
                listaDeMatches.map((perfil) => {
                  return (
                    <ItemLista>
                      <PerfilImage src={perfil.photo} alt='fotoPerfil' />
                      <p>{perfil.name}</p>
                    </ItemLista>
                  );
                })}
            </Lista>
          </div>
        </Container>
        <button onClick={props.Limpar}>Limpar swipes e Matches</button>
      </div>
    );
  } else {
    return <App pagina={"principal"} lista={ListarMatches} />;
  }
}

export default Matches;
