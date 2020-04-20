import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: 5vh;

    label, input, select {
        margin: 2vh;
    }
`

export class Etapa1 extends React.Component {
    render() {
        return (
            <ContainerForm>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <label for="nome">1. Qual o seu nome?</label>
                <input type="text" name="nome"></input>
                <label for="idade">2. Qual é a sua idade?</label>
                <input type="number"></input>
                <label for="email">3. Qual é o seu e-mail?</label>
                <input type="text"></input>
                <label for="escolaridade">4. Qual é a sua escolaridade?</label>
                <select>
                    <option>SELECIONE</option>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>

            </ContainerForm>
        )
    }
}