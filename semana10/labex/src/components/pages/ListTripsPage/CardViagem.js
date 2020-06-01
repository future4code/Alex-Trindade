import React from "react";
import { ContainerCard, CardViagemInfo, Details } from "./StyledCard";

const CardViagem = (props) => {
  return (
    <ContainerCard>
      <CardViagemInfo>
        <h1>{props.dadosViagem.name}</h1>
        <span>Planeta: {props.dadosViagem.planet}</span>
        <p>"{props.dadosViagem.description}"</p>
        <footer>
          <div>Data: {props.dadosViagem.date}</div>
          <div>Dias Terrestres: {props.dadosViagem.durationInDays}</div>
          <Details onClick={() => props.vaiParaDetalhes(props.dadosViagem.id)}>
            DETALHES
          </Details>
        </footer>
      </CardViagemInfo>
    </ContainerCard>
  );
};

export default CardViagem;
