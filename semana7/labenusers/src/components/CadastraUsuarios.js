import React from 'react';

export class CadastraUsuarios extends React.Component {
    render() {
      return (
        <div className={"App"}>
          <div>
              <div>
                  <label htmlFor="nome">Nome:</label>
                  <input id="nome" name="nome" type="text" onChange={this.props.onChangeNome}></input>
              </div>
              <div>
                  <label htmlFor="email">E-mail:</label>
                  <input id="email" name="email" type="email" onChange={this.props.onChangeEmail}></input>
              </div>
              <button>Salvar</button>
          </div>
          <button onClick={this.props.clickRegistro}>Listar Nomes</button>
        </div>
      );
    }
}