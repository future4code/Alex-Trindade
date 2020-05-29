import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TripDetailsPage = (props) => {
  const params = useParams();
  const [viagem, setViagem] = useState([]);
  const [candidates, setCandidates] = useState([])
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
        setCandidates(response.data.trip.candidates)
      })
      .catch((error) => {
        window.alert("Erro ao exibir viagem.");
      });
  };

  const decideCandidate = (candidateId, button) => {
    let decision = undefined;
    console.log(button)
    console.log(candidateId)

    if (button === "aprovar") {
      decision = true;
    } else {
      decision = false;
    }

    console.log(decision)

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
        console.log(error)
      });
  };

  return (
    <div>
      <h1>{viagem.name}</h1>
      <p>{viagem.planet}</p>
      <p>{viagem.description}</p>
      <p>{viagem.date}</p>
      <p>{viagem.durationInDays}</p>
      <div>
        <h2>Candidatos</h2>
        {candidates.map((candidate) => {
            return (
              <div>
                <p>{candidate.applicationText}</p>
                <p>{candidate.country}</p>
                <p>{candidate.profession}</p>
                <p>{candidate.age}</p>
                <p>{candidate.name}</p>
                <button
                  onClick={() => decideCandidate(candidate.id, "aprovar")}
                >
                  Aprovar
                </button>
                <button
                  onClick={() => decideCandidate(candidate.id, "reprovar")}
                >
                  Reprovar
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TripDetailsPage;
