import React from "react";
import LabeSpaceHeader from "../images/LabeSpaceHeader.png";
import Styled from "styled-components";

const Container = Styled.main`
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = Styled.img`
    width: 25%;
    height: 85%;

    :hover {
        cursor: pointer;
    }
`;

const ContainerMenu = Styled.nav`
    width: 55%;

    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
    }

    li {
        font-size: 1.2em;
        margin-right: 1vw;
    }

    li:hover {
        cursor: pointer;
        color: #bec4ca
    }
`;

const Header = (props) => {
  const goToHomePage = () => {
    props.history.push("/");
  };

  const goToFormPage = () => {
    props.history.push("/inscricoes");
  };

  const goToLoginPage = () => {
    props.history.push("/entrar");
  };

  return (
    <Container>
      <Logo onClick={goToHomePage} src={LabeSpaceHeader} alt='logotipo' />
      <ContainerMenu>
        <ul>
          <li onClick={goToHomePage}>Página Inicial</li>
          <li onClick={goToFormPage}>Inscrições</li>
          <li onClick={goToLoginPage}>Entrar</li>
        </ul>
      </ContainerMenu>
    </Container>
  );
};

export default Header;
