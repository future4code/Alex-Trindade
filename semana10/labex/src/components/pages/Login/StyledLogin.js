import Styled from "styled-components";
import Login from "../../../images/Login.jpg";

export const Container = Styled.main`
    width: 90vw;
`;

export const Content = Styled.section`
    background-image: url(${Login});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(10,23,55,0.4);
    height: 73vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = Styled.section`
    background-color: #f0f3f6;
    width: 40%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
