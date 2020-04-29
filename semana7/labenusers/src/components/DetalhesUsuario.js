import React from 'react'
import { ListaUsuarios } from './ListaUsuarios'
import axios from 'axios'

export class DetalhesUsuarios extends React.Component {
    state = {
        currentPage: "DETAILS",
        id: this.props.ID,
        user: {}
    }

    onClickVoltar = () => {
        this.setState({ currentPage: this.state.currentPage === "DETAIL" ? "LIST" : "DETAIL" })
    }

    getUserById = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.id}`, {
            headers: {
                Authorization: "alex-trindade-julian"
            }
        }).then(response => {
            this.setState({ user: response.data })
        }).catch(error => {
            window.alert("ERRO!")
        })
    }

    onClickDeleteUser(ID) {
        if (window.confirm("Deseja apagar esse usuário?")) {
          axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${ID}`, {
            headers: {
              Authorization: "alex-trindade-julian"
            }
          }).then(response => {
            window.alert("Usuário apagado!")
            this.setState({ currentPage: "LIST" })
          }).catch(error => {
              window.alert("ERRO!")
          })
        }
    }

    componentDidMount() {
        this.getUserById()
    }

    render() {
        if (this.state.currentPage === "DETAILS") {
            return (
                <div>
                    <p>{this.state.user.name}</p>
                    <p>{this.state.user.email}</p>
                    <button onClick={() => this.onClickDeleteUser(this.state.user.id)}>Excluir</button>
                    <button onClick={this.onClickVoltar}>Voltar Para Lista De Usuários</button>
                </div>
            )
        } else {
            return <ListaUsuarios />
        }
    }
}