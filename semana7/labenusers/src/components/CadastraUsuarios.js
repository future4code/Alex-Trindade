import React from 'react';
import styled from 'styled-components'

const ContainerCadastro = styled.div`
    margin: 5vw auto;
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
    render() {
        return (
            <div className={"App"}>
                <ContainerCadastro>
                    <SectionForm>
                        <div>
                            <label htmlFor="nome">Nome:</label>
                            <input id="nome" name="nome" type="text" value={this.props.nomeValue} onChange={this.props.onChangeNome}></input>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input id="email" name="email" type="email" value={this.props.emailValue} onChange={this.props.onChangeEmail}></input>
                        </div>
                        <button onClick={this.props.clickSalvar}>Salvar</button>
                    </SectionForm>
                </ContainerCadastro>
                <button onClick={this.props.clickRegistro}>Listar Nomes</button>
            </div>
        );
    }
}