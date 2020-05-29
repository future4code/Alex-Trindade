import React from "react";
import { useListaViagens } from "../../Hooks";
import CardViagem from "./CardViagem";

const ListTripsPage = (props) => {
  const token = localStorage.getItem("token");
  const viagens = useListaViagens();

  const goToDetails = (id) => {
    props.history.push("/detalhes-viagem/"+id);
  };

  const goToCreatTrip = () => {
    props.history.push("/criar-viagem");
  };

  if (token === null) {
    props.history.push("/login");
  }

  return (
    <main>
      <div>Aprovar Viagens</div>
      <div onClick={goToCreatTrip}>Criar Viagens</div>
      {viagens.map((viagem) => {
        return (
          <CardViagem dadosViagem={viagem} vaiParaDetalhes={goToDetails} />
        );
      })}
    </main>
  );
};

export default ListTripsPage;
