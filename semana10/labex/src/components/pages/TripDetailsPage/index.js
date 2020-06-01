import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Header";
import Details from "../../../images/Details.jpg";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {
  Container,
  Content,
  ImgContainer,
  TripData,
  Planeta,
  ContainerCandidato,
} from "./StyledTripDetailsPage";
import { ContainerButtons } from "../FormPage/StyleForm";
import Button from "@material-ui/core/Button";
import Footer from "../../Footer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#273a4e",
    },
  },
});

const TripDetailsPage = (props) => {
  const params = useParams();
  const [viagem, setViagem] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const token = localStorage.getItem("token");

  if (token === null) {
    props.history.push("/login");
  }

  useEffect(() => {
    getTripDetail();
  });

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setViagem(response.data.trip);
        setCandidates(response.data.trip.candidates);
      })
      .catch((error) => {
        window.alert("Erro ao exibir viagem.");
      });
  };

  const decideCandidate = (candidateId, button) => {
    let decision = undefined;
    console.log(button);
    console.log(candidateId);

    if (button === "aprovar") {
      decision = true;
    } else {
      decision = false;
    }

    console.log(decision);

    const body = {
      approve: true,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/trips/
        ${viagem.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        /*Esta requisição está dando erro, falando que o candidato não foi encontrado,
        mas o candidato existe e conforme observado no console.log o id do candidato e 
        da viagem está sendo passado corretamente. A função funciona quando clico no botão
        para não aprovar...*/
        getTripDetail();
      })
      .catch((error) => {
        window.alert("Erro ao aprovar/reprovar candidato.");
        console.log(error);
      });
  };

  const voltar = () => {
    props.history.push("/viagens");
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <Header {...props} />
        <Content>
          <ImgContainer>
            <img src={Details} alt='details background' />
          </ImgContainer>
          <TripData>
            <h1>{viagem.name}</h1>
            <Planeta>Planeta: {viagem.planet}</Planeta>
            <p>{viagem.description}</p>
            <p>Data: {viagem.date}</p>
            <p>Duração: {viagem.durationInDays} dias</p>
            <h2>Candidatos</h2>
            {candidates.map((candidate) => {
              return (
                <ContainerCandidato>
                  <p>{candidate.name}</p>
                  <p>{candidate.age}</p>
                  <p>{candidate.profession}</p>
                  <p>{candidate.country}</p>
                  <p>{candidate.applicationText}</p>
                  <ContainerButtons>
                    <Button
                      variant='contained'
                      disableElevation
                      size='medium'
                      color='primary'
                      onClick={() => decideCandidate(candidate.id, "aprovar")}
                    >
                      Aprovar
                    </Button>
                    <Button
                      variant='contained'
                      disableElevation
                      size='medium'
                      color='primary'
                      onClick={() => decideCandidate(candidate.id, "reprovar")}
                    >
                      Reprovar
                    </Button>
                  </ContainerButtons>
                </ContainerCandidato>
              );
            })}
            <button onClick={voltar}>Voltar</button>
          </TripData>
        </Content>
        <Footer />
      </Container>
    </MuiThemeProvider>
  );
};

export default TripDetailsPage;
