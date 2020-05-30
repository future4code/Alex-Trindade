import React from "react";
import { useForm } from "../../Hooks";
import axios from "axios";
import { paises } from "./ListaPaises";
import { useListaViagens } from "../../Hooks";
import Header from "../../Header";
import { ContainerBody } from "../HomePage/StyleHome";
import Footer from "../../Footer";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const FormPage = (props) => {
  const listaDePaises = paises;
  const viagens = useListaViagens();

  const { form, onChange, resetForm } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "Brasil",
    trip: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian
        /trips/${form.trip}/apply`,
        body
      )
      .then((response) => {
        window.alert("Candidatura enviada com sucesso.");
        resetForm();
      })
      .catch((error) => {
        window.alert("Falha ao aplicar a sua candidatura.");
      });
  };

  return (
    <ContainerBody>
      <Header />
      <form onSubmit={handleSubmit}>
        <TextField
          label='name'
          variant='outlined'
          value={form.name}
          onChange={handleInputChange}
          name='name'
          required
          autoFocus
          type='text'
          inputProps={{
            pattern: "[a-zA-Z]{3,}",
            title: "O nome deve conter mais de 3 letras",
          }}
        />
        <TextField
          variant='outlined'
          required
          label='Idade'
          type='number'
          min='18'
          value={form.age}
          name='age'
          onChange={handleInputChange}
          helperText='Maior que 18 anos.'
        />

        <Select
          variant='outlined'
          autoWidth
          required
          select
          label='País'
          value={form.country}
          onChange={handleInputChange}
          name='country'
        >
          {listaDePaises.map((pais) => {
            return <MenuItem value={pais}>{pais}</MenuItem>;
          })}
        </Select>

        <TextField
          variant='outlined'
          required
          label='Profissão'
          type='text'
          inputProps={{
            pattern: "[a-zA-Z0-9]{10,}",
            title: "A profissão deve conter mais de 10 caracteres",
          }}
          name='profissao'
          value={form.profession}
          onChange={handleInputChange}
        />

        <Select
          variant='outlined'
          autoWidth
          required
          select
          label='Escolha sua Viagem'
          value={form.trip}
          onChange={handleInputChange}
          name='trip'
        >
          {viagens.map((viagem) => {
            return (
              <MenuItem value={viagem.id}>
                {viagem.name + " - " + viagem.planet}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          required
          variant='outlined'
          label='Por que sou um bom candidato?'
          type='text'
          inputProps={{
            pattern: "[a-zA-Z0-9]{30,}",
            title: "A mensagem deve ter mais de 30 caracteres",
          }}
          multiline
          value={form.applicationText}
          name='applicationText'
          onChange={handleInputChange}
        />
        <button>Enviar</button>
      </form>
      <Footer />
    </ContainerBody>
  );
};

export default FormPage;
