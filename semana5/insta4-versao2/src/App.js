import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    valorInputNomeUsuario: "",
    valorInputfotoUsuario: "",
    valorInputfotoPost: "",

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
        fotoPost: 'https://picsum.photos/200/150?a=7'
      }
    ]
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputfotoUsuario,
      fotoPost: this.state.valorInputfotoPost
    }

    const novoPostagens = [...this.state.postagens, novoPost]
    
    this.setState({ postagens: novoPostagens })

    this.setState({ 
      valorInputNomeUsuario: "",
      valorInputfotoUsuario: "",
      valorInputfotoPost: ""
     })
  }

  onChangeInputNomeUsuario = event => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    const ListaDePostagens = this.state.postagens.map(conteudoPostagem => {
      return (
        <Post key = {conteudoPostagem.nomeUsuario}
          nomeUsuario = {conteudoPostagem.nomeUsuario}
          fotoUsuario = {conteudoPostagem.fotoUsuario}
          fotoPost = {conteudoPostagem.fotoUsuario}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <div>
        <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome de usuário"}
        />
        <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto de usuário"}
        />
        <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto que deseja postar"}
        />
        <button onClick= {this.adicionarPost}>Adicionar</button>
        </div>

        <div>{ListaDePostagens}</div>
      </div>
    )
  }
}

export default App;
