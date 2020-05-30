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

const Header = () => {
  return (
    <Container>
      <Logo src={LabeSpaceHeader} alt='logotipo' />
      <ContainerMenu>
        <ul>
          <li>Home</li>
          <li>Inscrições</li>
          <li>Entrar</li>
        </ul>
      </ContainerMenu>
    </Container>
  );
};

export default Header;
