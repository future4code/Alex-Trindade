import React from "react";
import { useTripsList } from "../../Hooks";
import CardViagem from "./CardViagem";
import Header from "../../Header";
import Footer from "../../Footer";
import { Container, Content, ButtonCreate } from "./StyledListTripsPage";
import CreateIcon from "@material-ui/icons/Create";

const ListTripsPage = (props) => {
  const token = localStorage.getItem("token");
  const viagens = useTripsList();

  const goToDetails = (id) => {
    props.history.push("/detalhes-viagem/" + id);
  };

  const goToCreatTrip = () => {
    props.history.push("/criar-viagem");
  };

  if (token === null) {
    props.history.push("/login");
  }

  return (
    <Container>
      <Header {...props} />
      <Content>
        <ButtonCreate onClick={goToCreatTrip}>
          <CreateIcon /> Criar Viagens
        </ButtonCreate>
        <div>Criar Viagens</div>
        {viagens.map((viagem) => {
          return (
            <CardViagem dadosViagem={viagem} vaiParaDetalhes={goToDetails} />
          );
        })}
      </Content>
      <Footer />
    </Container>
  );
};

export default ListTripsPage;
