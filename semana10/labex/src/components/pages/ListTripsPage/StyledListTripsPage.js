import Styled from "styled-components";

export const Container = Styled.main`
    width: 90vw;
`;

export const Content = Styled.section`
    background-color: #f0f3f6;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonCreate = Styled.section`
    width: 50%;
    margin: 2vw;
    padding: 1vw;
    border-radius: 8px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    color: #3498DB;
    font-weight: 700;

    :hover {
        cursor: pointer;
    }
`;
