import Background from "../../../images/mainWallpaper.jpg";
import Styled from "styled-components";

export const Main = Styled.main`
    background-image: url(${Background});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(10,23,55,0.4);
    height: 100vh;
    width: 100vw;
`;

export const SecaoSuperior = Styled.section`
    height: 50%;
    background-color: rgba(10,23,55,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logotipo = Styled.img`
    width: 20%;
    height: 50%;
`;

export const Frase = Styled.span`
    color: white;
    font-size: 2em;
    font-weight: 500;
    margin: 1vh;
`;

export const SecaoInferior = Styled.section`
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Buttons = Styled.button`
    height: 40%;
    font-size: 3em;
`;
