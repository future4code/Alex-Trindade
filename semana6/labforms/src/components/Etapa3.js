import React from 'react'
import styled from 'styled-components'

export class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <form>
                    <label for="graduacao">5. Por que você não terminou um curso de graduação?</label>
                    <input type="text" name="graduacao"></input>
                    <label for="curso-complementar">6. Você fez algum curso complementar?</label>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>
                </form>
            </div>
        )
    }
}