import Styled from "styled-components";

export const Container = Styled.main`
    width: 90vw;
`;

export const Body = Styled.section`
    display: flex;
`;

export const ImgContainer = Styled.section`
    width: 50%;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const FormContainer = Styled.section`
    width: 50%;
    display: flex;
    justify-content: center;
    background-color: #f0f3f6;
`;

export const Form = Styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
        text-align: center;
    }
`;

export const ContainerButtons = Styled.section`
    margin-top: 3vh;
    display: flex;
    justify-content: space-around;
`;
