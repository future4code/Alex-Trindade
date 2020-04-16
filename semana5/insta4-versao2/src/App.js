import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div `
   height: 30vh;
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
`

const Input = styled.input `
  width: 22vw;
  height: 4vh;
  border-radius: 5px;
  text-align: center;
`

const Botao = styled.button `
  width: 10vw;
  height: 3vw;
  align-self: center;
  border-radius: 5px;
  font-weight: 600;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1.1em;
`

class App extends React.Component {
  state = {
    postagens: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'joao',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=4'
      },
      {
        nomeUsuario: 'amanda',
        fotoUsuario: 'https://picsum.photos/50/50?a=5',
        fotoPost: 'https://picsum.photos/200/150?a=6'
      }
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }

  adicionarPost = () => {
    let novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    let novoPostagens = [...this.state.postagens, novoPost]
    
    this.setState({ postagens: novoPostagens })

    this.setState({ 
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
     })
  }

  onChangeInputNomeUsuario = event => {
    this.setState({ inputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = event => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {
    const ListaDePostagens = this.state.postagens.map(conteudoPostagem => {
      return (
        <Post key = {conteudoPostagem.nomeUsuario}
          nomeUsuario = {conteudoPostagem.nomeUsuario}
          fotoUsuario = {conteudoPostagem.fotoUsuario}
          fotoPost = {conteudoPostagem.fotoPost}
        />
      )
    })

    return (
      <AppContainer>
        <InputContainer>
          <Input
              value={this.state.inputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome de usuário"}
          />
          <Input
              value={this.state.inputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Foto de usuário"}
          />
          <Input
              value={this.state.inputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Foto que deseja postar"}
          />
          <Botao onClick= {this.adicionarPost}>Adicionar</Botao>
        </InputContainer>

        <div>{ListaDePostagens}</div>
      </AppContainer>
    )
  }
}

export default App;
