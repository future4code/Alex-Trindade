import React from "react";
import axios from "axios";
import { useForm } from "../../Hooks";
import Header from "../../Header";
import Footer from "../../Footer";
import { Form, ContainerButtons } from "../FormPage/StyleForm";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Cancel from "@material-ui/icons/Cancel";
import { Container, Content, ContainerForm } from "./StyledLogin";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#273a4e",
    },
  },
});

const Login = (props) => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-trindade-julian/login`,
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        props.history.push("/viagens");
      })
      .catch((error) => {
        window.alert("Falha ao fazer login.");
      });
  };

  const cancel = () => {
    props.history.push("/");
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <header>
          <Header {...props} />
        </header>
        <Content>
          <ContainerForm>
            <Form onSubmit={handleSubmit}>
              <h1>Entrar</h1>
              <TextField
                size='small'
                value={form.email}
                onChange={handleInputChange}
                name='email'
                type='email'
                label='E-mail'
                required
              />
              <TextField
                size='small'
                value={form.password}
                onChange={handleInputChange}
                name='password'
                type='password'
                minLength='6'
                label='Senha'
                required
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
                  endIcon={<VpnKeyIcon />}
                  color='primary'
                  type='submit'
                  disableElevation
                  size='medium'
                >
                  Entrar
                </Button>
              </ContainerButtons>
            </Form>
          </ContainerForm>
        </Content>
        <Footer />
      </Container>
    </MuiThemeProvider>
  );
};

export default Login;
