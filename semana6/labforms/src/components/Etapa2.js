import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 5vh;

    label, input {
        margin: 2vh;
    }
`

export class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerForm>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <label for="curso">5. Qual curso?</label>
                <input type="text" name="curso"></input>
                <label for="unidade">6. Qual a unidade de ensino?</label>
                <input type="text" name="unidade"></input>
            </ContainerForm>
        )
    }
}