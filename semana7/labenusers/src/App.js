import React from 'react';
import './App.css';
import { CadastraUsuarios } from './components/CadastraUsuarios.js'
import { ListaUsuarios } from './components/ListaUsuarios.js'
import styled from 'styled-components';

const Botao = styled.button`
  margin-top: 5vh;
`

class App extends React.Component {
  state = {
    currentPage: "FORM"
  }

  onClickChangePage = () => {
    this.setState({ currentPage: this.state.currentPage === "FORM" ? "LIST" : "FORM" })
  }

  render() {
    return (
      <div className="App">
        <Botao onClick={this.onClickChangePage}>
          {this.state.currentPage === "FORM" ? "Listar Nomes" : "Voltar Para Cadastro"}
        </Botao>
        {this.state.currentPage === "FORM" ? (<CadastraUsuarios />) : (<ListaUsuarios />)}
      </div>
    )
  }
}

export default App;