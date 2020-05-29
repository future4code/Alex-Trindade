import React from "react";

const CardViagem = (props) => {
  return (
    <div>
      <h1>{props.dadosViagem.name}</h1>
      <span>{props.dadosViagem.planet}</span>
      <div>"{props.dadosViagem.description}"</div>
      <footer>
        <div>{props.dadosViagem.date}</div>
        <div>{props.dadosViagem.durationInDays}</div>
        <div onClick={() => props.vaiParaDetalhes(props.dadosViagem.id)}>
          DETALHES
        </div>
      </footer>
    </div>
  );
};

export default CardViagem;
