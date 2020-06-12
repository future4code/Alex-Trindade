import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useForm } from "../../Hooks";
import axios from "axios";
import Header from "../../Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Footer from "../../Footer";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Cancel from "@material-ui/icons/Cancel";
import Form2 from "../../../images/Form2.jpg";
import {
  Container,
  Body,
  ImgContainer,
  FormContainer,
  Form,
  ContainerButtons,
} from "../FormPage/StyleForm";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#273a4e",
    },
  },
});

const CreateTripPage = (props) => {
  const { form, onChange, resetForm } = useForm({
    name: "",
    planet: "selecione",
    date: "",
    description: "",
    durationInDays: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const token = localStorage.getItem("token");

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  if (token === null) {
    props.history.push("/login");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let formatDate;

    if (form.date !== null) {
      let day =
        (selectedDate.getDate() < 10 ? "0" : "") + selectedDate.getDate();
      let month =
        (selectedDate.getMonth() + 1 < 10 ? "0" : "") +
        (selectedDate.getMonth() + 1);
      let year = selectedDate.getYear() - 100;
      const newDate = day + "/" + month + "/" + year;
      formatDate = newDate;
    }

    const body = {
      name: form.name,
      planet: form.planet,
      date: formatDate,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/trips`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        window.alert("Viagem criada com sucesso.");
        resetForm();
      })
      .catch((error) => {
        window.alert("Falha ao criar viagem.");
      });
  };

  const cancel = () => {
    props.history.push("/viagens");
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <Header {...props} />
        <Body>
          <ImgContainer>
            <img src={Form2} alt='form background' />
          </ImgContainer>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <h1>Cadastre Uma Nova Viagem</h1>
              <TextField
                size='small'
                label='Título da viagem'
                value={form.name}
                onChange={handleInputChange}
                name='name'
                type='text'
                required
                inputProps={{
                  pattern: "[a-z0-9A-Z°- ]{5,}",
                  title: "O título deve conter mais de 5 letras",
                }}
              />
              <TextField
                size='small'
                onChange={handleInputChange}
                name='planet'
                required
                select
                label='Escolha o planeta'
                helperText='Selecione o planeta de destino da viagem'
              >
                <MenuItem value='mercurio'>Mercúrio</MenuItem>
                <MenuItem value='venus'>Vênus</MenuItem>
                <MenuItem value='marte'>Marte</MenuItem>
                <MenuItem value='jupiter'>Júpiter</MenuItem>
                <MenuItem value='saturno'>Saturno</MenuItem>
                <MenuItem value='urano'>Urano</MenuItem>
                <MenuItem value='netuno'>Netuno</MenuItem>
                <MenuItem value='plutao'>Plutão</MenuItem>
              </TextField>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Fragment>
                  <KeyboardDatePicker
                    required
                    label='Data da Viagem'
                    name='date'
                    clearable
                    value={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                    }}
                    minDate={new Date()}
                    format='dd/MM/yy'
                  />
                </Fragment>
              </MuiPickersUtilsProvider>
              <TextField
                size='small'
                label='Duração da viagem'
                helperText='Tempo (dias) de duração da viagem'
                value={form.durationInDays}
                onChange={handleInputChange}
                name='durationInDays'
                type='number'
                required
                min='50'
              />
              <TextField
                label='Insira a descrição da viagem'
                value={form.description}
                onChange={handleInputChange}
                name='description'
                required
                multiline
                inputProps={{
                  pattern: "[A-Za-z 0-9,.;:/!@#$%()-=]{30,500}",
                  title: "A descrição deve conter entre 30 e 500 caracteres",
                }}
                rowsMax='8'
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
                  size='large'
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

export default CreateTripPage;
