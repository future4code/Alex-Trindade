import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Matches from "./components/Matches.js";
import { Container, FlexContainer, Header, Cursor } from "./StyledApp.js";
import Logo from './images/logosize.jpg'

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
          alert("Aplicação resetada!"),
          pegaPerfil(), 
          props.lista
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
        <Container>
          <FlexContainer>
            <Header>
              <Cursor></Cursor>
              <img src={Logo} alt='logo'/>
              <div>
                <button onClick={onClickMatches}>Tela de Matches</button>
              </div>
            </Header>
            <div>
              <div>
                <div></div>
                <img src={perfil.photo} alt='imagem-perfil' />
                <div>
                  <div>
                    <div>{perfil.name + ", "}</div>
                    <div>{perfil.age}</div>
                  </div>
                  <p>{perfil.bio}</p>
                </div>
              </div>
              <div>
                <button onClick={onClickNope}>Nope</button>
                <button onClick={onClickLike}>Like</button>
              </div>
            </div>
          </FlexContainer>
        </Container>
      );
      break;
    case "matches":
      secao = <Matches />;
      break;
    default:
      secao = <App />;
      break;
  }

  return (
    <div>
      {secao}
      <button onClick={limpaTudo}>Limpar swipes e Matches</button>
    </div>
  );
}

export default App;
