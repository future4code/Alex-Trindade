import React from 'react';
import styled from 'styled-components'

const ContainerLista = styled.div`
    margin: 10vh auto;
    display: flex;
    justify-content: center;

    ul{
        display: block;
        list-style: none;
    }

    li {
        display: flex;
        min-width: 3vh;
        justify-content: space-between;
        border-bottom: 1px dashed black;
        padding: 1vh 0;
    }
`

export class ListaUsuarios extends React.Component {
    render() {
      return (
        <div className={"App"}>
          <button onClick={this.props.clickLista}>Voltar para a página de Cadastro</button>
          <ContainerLista>
              <ul>
                  <h2>Usuários Cadastrados:</h2>
                  {this.props.usuarios.map(usuario => {
                      return (
                        <li>
                          <p>{usuario.name}</p>
                        </li>
                      )
                  })}
              </ul>
          </ContainerLista>
        </div>
      );
    }
}