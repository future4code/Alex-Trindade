import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../App.js";

function Matches() {
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
        <div>
          <div>
            <div>
              <button onClick={onClickPerfis}>Perfis</button>
            </div>
            logo astromatch
            <div></div>
          </div>
          <ul>
            {listaDeMatches && listaDeMatches.map(perfil => {
                return (
                    <li>
                        <div src={perfil.photo}></div>
                        <p>{perfil.nome}</p>
                    </li>
                )
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <App lista = {ListarMatches}/>;
  }
}

export default Matches;
