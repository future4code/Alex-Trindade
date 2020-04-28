import React from 'react';
import './App.css';
import { CadastraUsuarios } from './components/CadastraUsuarios.js'
import { ListaUsuarios } from './components/ListaUsuarios.js'
import axios from 'axios'

class App extends React.Component{
  state ={
    mudarDePagina: false,
    nomeValue: "",
    emailValue: "",
    usuarios: []
  }

  exibirUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "alex-trindade-julian"
      }
    }).then(resposta => {
      this.setState({ usuarios: resposta.data.result.list })
    }).catch(erro => {
      alert("ERRO!", erro.response)
    })
  }

  onClickPaginaDeLista = () => {
    this.setState({ mudarDePagina: true })
  }

  onClickPaginaDeRegistro = () => {
    this.setState({ 
      mudarDePagina: false 
    })
  }

  onChangeNome = (event) => {
    this.setState({ nomeValue: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ nomeValue: event.target.value })
  }

  render() {
    if (this.state.mudarDePagina) {
      return (
        <ListaUsuarios 
          clickLista={this.onClickPaginaDeRegistro}
          usuarios={this.state.usuarios}
        />
      )
    } else {
      return (
        <CadastraUsuarios 
          clickRegistro={this.onClickPaginaDeLista}
          onChangeNome={this.onChangeNome}
          onChangeEmail={this.onChangeEmail}
        />
      )
    }
  }
}

export default App;