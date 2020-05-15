import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const[perfil, setPerfil] = useState({})

  const pegaPerfil = () => {
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-trindade-julian/person')
    .then(resposta => {
      return setPerfil(resposta.data.profile)
    })
    .catch(erro => {
      return window.alert('erro')
    })
  }

  useEffect(() => {
     pegaPerfil()
  },[])

  return (
    <div>
      <div>
        <div></div>
        <div>
          AstromachLogo
          <div>
            <button>Tela de Matches</button>
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <img src={perfil.photo} alt='imagem-perfil'/>
            <div>
              <div>
                <div>
                  {perfil.name + ', '}
                </div>
                <div>{perfil.age}</div>
              </div>
              <p>{perfil.bio}</p>
            </div>
          </div>
          <div>
            <button>Nope</button>
            <button>Like</button>
          </div>
        </div>
      </div>
      <div>
        <button>Limpar swipes e Matches</button>
      </div>
    </div>
  );
}

export default App;
