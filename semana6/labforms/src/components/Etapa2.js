import React from 'react'
import styled from 'styled-components'

export class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <form>
                    <label for="curso">5. Qual curso?</label>
                    <input type="text" name="curso"></input>
                    <label for="unidade">6. Qual a unidade de ensino?</label>
                    <input type="text" name="unidade"></input>
                </form>
            </div>
        )
    }
}