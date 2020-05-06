import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastro = styled.div`
    margin: 1vw auto;
    display: flex;
    justify-content: center;
`
const SectionForm = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px dashed black;
    width: 30%;
    margin: 0 auto;
    padding: 5vw;

    div {
        margin-bottom: 5vh;
    }

    label {
        margin: 1vw;
    }

    button {
        margin: 0 auto;
        background-color: black;
        color: white;
        border: none;
        padding: 0.5em 1em;
        cursor: pointer;
    }
`

export class CadastraUsuarios extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }

    onChangeName = (event) => {
        this.setState({ nameValue: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value })
    }

    onClickSalvar = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
            {
                headers: {
                    Authorization: "alex-trindade-julian"
                }
            }).then(response => {
                window.alert("Contato Salvo!", response)
            }).catch(error => {
                console.log(error.response)
                window.alert("ERRO!")
            })

        this.setState({
            nameValue: "",
            emailValue: ""
        })
    }

    render() {
        return (
            <ContainerCadastro>
                <SectionForm>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input id="nome" name="nome" type="text" value={this.state.nameValue} onChange={this.onChangeName}></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" name="email" type="email" value={this.state.emailValue} onChange={this.onChangeEmail}></input>
                    </div>
                    <button onClick={this.onClickSalvar}>Salvar</button>
                </SectionForm>
            </ContainerCadastro>
        );
    }
}