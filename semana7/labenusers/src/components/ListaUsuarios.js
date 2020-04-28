import React from 'react';

export class ListaUsuarios extends React.Component {
    render() {
      return (
        <div className={"App"}>
          <button onClick={this.props.clickLista}>Voltar para a página de Cadastro</button>
          <div>
              <ul>
                  <h2>Usuários Cadastrados:</h2>
                  {this.props.usuarios.map(usuario => {
                      return (
                        <li>
                          <p>{usuario.name}</p>
                          <p>{usuario.email}</p>
                        </li>
                      )
                  })}
              </ul>
          </div>
        </div>
      );
    }
}