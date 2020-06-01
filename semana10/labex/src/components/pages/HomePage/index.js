import React from "react";
import { Container, Content } from "./StyleHome";
import Header from "../../Header";
import Footer from "../../Footer";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#f0f3f6",
    },
  },
});

const HomePage = (props) => {
  const goToFormPage = () => {
    props.history.push("/inscricoes");
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <Header {...props} />
        <Content>
          <h1>BEM VINDOS A LABESPACE</h1>
          <h3>Encontre as melhores viagens espaciais!</h3>
          <Button
            variant='outlined'
            color='primary'
            onClick={goToFormPage}
            size='large'
          >
            Inscreva-se
          </Button>
        </Content>
        <Footer />
      </Container>
    </MuiThemeProvider>
  );
};

export default HomePage;
