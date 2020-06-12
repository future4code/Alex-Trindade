import Styled from "styled-components";

export const Container = Styled.main`
    width: 90vw;
`;

export const Content = Styled.section`
    display: flex;
    background-color: #f0f3f6;
`;

export const ImgContainer = Styled.section`
    width: 40%;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TripData = Styled.section`
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;

    h1 {
        font-size: 2em;
        color: #2c3e50;
    }

    h2 {
        font-size: 1.3em;
        color: #2c3e50;
    }

    p {
        width: 70%;
        text-align: justify;
        font-size: 1.1em;
    }
`;

export const Planeta = Styled.p`
    font-weight: 700;
    color: #3498DB;
`;

export const ContainerCandidato = Styled.section`
    width: 70%;
    border-radius: 8px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
    padding: 1vw;
    width: 90%;
    margin: 2vw;
`;
