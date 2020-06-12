import React from "react";
import { useForm } from "../../Hooks";
import axios from "axios";
import { countries } from "./CountriesList";
import { useTripsList } from "../../Hooks";
import Header from "../../Header";
import {
  Container,
  Body,
  ImgContainer,
  FormContainer,
  Form,
  ContainerButtons,
} from "./StyleForm";
import Footer from "../../Footer";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import Cancel from "@material-ui/icons/Cancel";
import ImgForm from "../../../images/Form.jpg";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#273a4e",
    },
  },
});

const FormPage = (props) => {
  const countriesList = countries;
  const trips = useTripsList();

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

  const cancel = () => {
    props.history.push("/");
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <Header {...props} />
        <Body>
          <ImgContainer>
            <img src={ImgForm} alt='form background' />
          </ImgContainer>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <h1>Faça Agora Mesmo Sua Viagem Dos Sonhos</h1>
              <TextField
                size='small'
                label='Nome'
                variant='outlined'
                value={form.name}
                onChange={handleInputChange}
                name='name'
                required
                autoFocus
                type='text'
                inputProps={{
                  pattern: "[a-zA-Z ]{3,}",
                  title: "O nome deve conter mais de 3 letras",
                }}
              />
              <TextField
                size='small'
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

              <TextField
                size='small'
                variant='outlined'
                required
                select
                label='País'
                value={form.country}
                onChange={handleInputChange}
                name='country'
                helperText='Selecione o seu país'
              >
                {countriesList.map((country) => {
                  return <MenuItem value={country}>{country}</MenuItem>;
                })}
              </TextField>

              <TextField
                size='small'
                variant='outlined'
                required
                label='Profissão'
                type='text'
                inputProps={{
                  pattern: "[a-zA-Z0-9 ]{10,}",
                  title: "A profissão deve conter mais de 10 caracteres",
                }}
                name='profession'
                value={form.profession}
                onChange={handleInputChange}
              />

              <TextField
                size='small'
                variant='outlined'
                required
                select
                label='Escolha sua Viagem'
                value={form.trip}
                onChange={handleInputChange}
                name='trip'
                helperText='Escolha uma viagem'
              >
                {trips.map((trip) => {
                  return (
                    <MenuItem value={trip.id}>
                      {trip.name + " - " + trip.planet}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                required
                variant='outlined'
                label='Por que sou um bom candidato?'
                type='text'
                inputProps={{
                  pattern: "[a-zA-Z0-9.,!? /@$%()]{30,}",
                  title: "A mensagem deve ter mais de 30 caracteres",
                }}
                rowsMax='8'
                multiline
                value={form.applicationText}
                name='applicationText'
                onChange={handleInputChange}
              />
              <ContainerButtons>
                <Button
                  variant='contained'
                  endIcon={<Cancel />}
                  color='primary'
                  onClick={cancel}
                  disableElevation
                  size='medium'
                >
                  Cancelar
                </Button>
                <Button
                  variant='contained'
                  endIcon={<Send />}
                  color='primary'
                  type='submit'
                  disableElevation
                  size='medium'
                >
                  Enviar
                </Button>
              </ContainerButtons>
            </Form>
          </FormContainer>
        </Body>
        <Footer />
      </Container>
    </MuiThemeProvider>
  );
};

export default FormPage;
