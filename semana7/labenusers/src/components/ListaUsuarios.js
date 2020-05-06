import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { DetalhesUsuarios } from './DetalhesUsuario.js'

const ContainerLista = styled.div`
    margin: 1vh auto;
    display: flex;
    justify-content: center;

    ul{
        display: block;
        list-style: none;
    }

    li {
        display: flex;
        min-width: 8vw;
        height: 5vh;
        justify-content: space-between;
        border-bottom: 1px dashed black;
        padding: 1vh 0;
    }

    span {
      background-color: red;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
`

export class ListaUsuarios extends React.Component {
  state = {
    usersList: [],
    currentPage: "LIST",
    userId: ''
  }

  onClickChangePage = () => {
    this.setState({ currentPage: this.state.currentPage === "LIST" ? "DETAIL" : "LIST" })
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "alex-trindade-julian"
      }
    }).then(response => {
      this.setState({ usersList: response.data })
    }).catch(error => {
      window.alert("ERRO!")
    })
  }

  onClickDeleteUser(userId) {
    if (window.confirm("Deseja apagar esse usuário?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
        headers: {
          Authorization: "alex-trindade-julian"
        }
      }).then(response => {
        window.alert("Usuário apagado!")
        this.getUsers()
      }).catch(error => {
        window.alert("ERRO!")
      })
    }
  }

  onClickUser(IdUser) {
    this.setState({ userId: IdUser })
  }

  render() {
    if (this.state.currentPage === "LIST") {
      return (
        <ContainerLista>
          <ul>
            <h2>Usuários Cadastrados:</h2>
            {this.state.usersList.map(user => {
              return (
                <li onClick={() => this.onClickUser(user.id)}>
                  <p onClick={this.onClickChangePage}>{user.name}</p>
                  <span onClick={() => this.onClickDeleteUser(user.id)}>Excluir</span>
                </li>
              )
            })}
          </ul>
        </ContainerLista>
      )  
    } else {
      return <DetalhesUsuarios ID={this.state.userId}/>
    }
  }
}