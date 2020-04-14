import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <span id="item">{props.itemCadastro}</span>
            <span>{props.conteudo}</span>
        </div>
    )
}

export default CardPequeno;