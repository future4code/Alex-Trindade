import Styled from "styled-components";

export const ContainerCard = Styled.main`
    border-radius: 8px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    padding: 1vw;
    width: 90%;
    margin: 2vw;
`;

export const CardViagemInfo = Styled.section`
    width: 100%;
    text-align: center;

    h1 {
        font-size: 1.5em;
        color: #2c3e50;
    }

    span {
        font-size: 2em;
        font-weight: 700;
        color: #3498DB;
    }

    p {
        color: #95A5A6;
        font-weight: 700;
        font-size: 1.1em;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Details = Styled.div`
    border: 1px solid #3498DB;
    padding: 1vh;
    border-radius: 5px;
    color: #3498DB;
    font-weight: 700;

    :hover {
        cursor: pointer;
    }
`;
