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

  cadastrar = () => {
    this.salvarContato(this.state.nomeValue, this.state.emailValue)

    this.setState({
      nomeValue: "",
      emailValue: ""
    })
  }

  salvarContato = (nome, email) => {
    const body = {
      name: nome,
      email: email
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {
      headers: {
        Authorization: "alex-trindade-julian"
      }
    }).then(resposta => {
      alert("Contato Salvo!", resposta)
    }).catch(erro => {
      alert("ERRO!", erro)
    })
  }

  exibirUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "alex-trindade-julian"
      }
    }).then(resposta => {
      this.setState({ usuarios: resposta.data })
    }).catch(erro => {
      alert("ERRO!", erro.response)
    })
  }

  onClickPaginaDeLista = () => {
    this.setState({ mudarDePagina: true })

    this.exibirUsuarios()
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
    this.setState({ emailValue: event.target.value })
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
          nomeValue={this.state.nomeValue}
          emailValue={this.state.emailValue}
          onChangeNome={this.onChangeNome}
          onChangeEmail={this.onChangeEmail}
          clickSalvar={this.cadastrar}
        />
      )
    }
  }
}

export default App;