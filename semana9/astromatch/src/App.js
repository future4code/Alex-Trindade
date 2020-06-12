import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Matches from "./components/Matches.js";
import {
  Container,
  FlexContainer,
  Header,
  Cursor,
  LogoApp,
  MatchButton,
  Main,
  ContainerFoto,
  ImagemPerfil,
  ContainerDados,
  NomeIdade,
  Nome,
  Idade,
  Bio,
  ContainerButtons,
  Nope,
  Like,
} from "./StyledApp.js";
import Logo from "./images/logosize.jpg";
import MatchIcon from "./images/match.png";

function App(props) {
  const [perfil, setPerfil] = useState({});
  const [telaAtual, setTelaAtual] = useState("principal");
  const [escolha, setEscolha] = useState();

  const pegaPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-trindade-julian/person"
      )
      .then((resposta) => {
        return setPerfil(resposta.data.profile);
      })
      .catch((erro) => {
        return window.alert("Erro ao carregar perfis.");
      });
  };

  const escolherPessoa = () => {
    const body = {
      id: perfil.id,
      choice: escolha,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-trindade-julian/choose-person",
        body
      )
      .then((resposta) => {
        pegaPerfil();
      })
      .catch((erro) => {
        window.alert("Erro ao curtir, tente de novo.");
      });
  };

  const limpaTudo = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-trindade-julian/clear"
      )
      .then((resposta) => {
        return (
          alert("Aplicação resetada!"), pegaPerfil(), props.lista
        ) 
      })
      .catch((error) => {
        return alert("Erro ao resetar, tente novamente");
      });
  };

  useEffect(() => {
    pegaPerfil();
  }, []);

  const onClickMatches = () => {
    setTelaAtual("matches");
  };

  const onClickLike = () => {
    setEscolha(true);
    escolherPessoa();
  };

  const onClickNope = () => {
    setEscolha(false);
    pegaPerfil();
  };

  let secao;

  switch (telaAtual) {
    case "principal":
      secao = (
        <div>
          <Container>
            <FlexContainer>
              <Header>
                <Cursor></Cursor>
                <LogoApp src={Logo} alt='logo' />
                <MatchButton onClick={onClickMatches}>
                  <img src={MatchIcon} alt='iconePerfil' />
                </MatchButton>
              </Header>
              <Main>
                <ContainerFoto>
                  <ImagemPerfil src={perfil.photo} alt='imagem-perfil' />
                  <ContainerDados>
                    <NomeIdade>
                      <Nome>{perfil.name + ","}</Nome>
                      <Idade>{perfil.age}</Idade>
                    </NomeIdade>
                    <Bio>{perfil.bio}</Bio>
                  </ContainerDados>
                </ContainerFoto>
                <ContainerButtons>
                  <Nope onClick={onClickNope}>X</Nope>
                  <Like onClick={onClickLike}>♥</Like>
                </ContainerButtons>
              </Main>
            </FlexContainer>
          </Container>
          <button onClick={limpaTudo}>Limpar swipes e Matches</button>
        </div>
      );
      break;
    case "matches":
      secao = <Matches Limpar = {limpaTudo}/>;
      break;
    default:
      secao = <App />;
      break;
  }

  return (
    <div>
      {secao} 
    </div>
  );
}

export default App;
