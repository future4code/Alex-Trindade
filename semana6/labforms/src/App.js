import React from 'react'
import { Etapa1 } from './components/Etapa1'
import { Etapa2 } from './components/Etapa2'
import { Etapa3 } from './components/Etapa3'
import { Final } from './components/Final'
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
        break
      case 2:
        return <Etapa2 />
        break
      case 3:
        return <Etapa3 />
        break
      case 4:
        return <Final />
        break
    }
  }

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.state.etapa <= 3 ? <button onClick={this.proximaEtapa}>Próxima Etapa</button> : " "}
      </Container>
    )
  }
}

export default App;